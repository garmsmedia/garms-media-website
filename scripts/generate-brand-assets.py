"""
Regenerate GARMS MEDIA logo sizes and favicons from the master logo.

Usage (Python 3 with Pillow, NumPy and SciPy):
    python3 scripts/generate-brand-assets.py

Input:  src/assets/brand/garms-media-logo.png  (official logo, transparent, 2558x1039)
Output: public/brand/garms-media-logo-{160,240,320,420,480,600}w.png  (lossless)
        src/app/favicon.ico (16/32/48), src/app/icon.png (512), src/app/apple-icon.png (180)

The artwork is never redrawn or recoloured:
- Logo sizes are straight downscales (premultiplied-alpha Lanczos) of the master.
- Favicons use the hanger shape exactly as it appears in the logo (the single connected
  shape that forms the "g" hook and hanger), placed on near-black (#111111) and
  downscaled in linear light so the thin lines stay as bright as possible.
"""

from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage

ROOT = Path(__file__).resolve().parent.parent
MASTER = ROOT / "src/assets/brand/garms-media-logo.png"
WIDTHS = (160, 240, 320, 420, 480, 600)
INK = np.array([17, 17, 17]) / 255.0


def to_linear(c):
    return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)


def to_srgb(c):
    return np.where(c <= 0.0031308, c * 12.92, 1.055 * c ** (1 / 2.4) - 0.055)


def logo_sizes(master: Image.Image) -> None:
    out = ROOT / "public/brand"
    out.mkdir(parents=True, exist_ok=True)
    w0, h0 = master.size
    for w in WIDTHS:
        h = round(w * h0 / w0)
        master.convert("RGBa").resize((w, h), Image.LANCZOS).convert("RGBA").save(
            out / f"garms-media-logo-{w}w.png", optimize=True
        )


def hanger_shape(master: Image.Image) -> Image.Image:
    arr = np.array(master)
    labels, n = ndimage.label(arr[:, :, 3] > 0, structure=np.ones((3, 3)))
    sizes = ndimage.sum(np.ones_like(labels), labels, range(1, n + 1))
    hanger_id = int(np.argmax(sizes)) + 1  # the hanger is the largest connected shape
    arr[labels != hanger_id] = 0
    img = Image.fromarray(arr)
    return img.crop(img.getchannel("A").getbbox())


def icon(hanger: Image.Image, size: int, pad: float, k: int) -> Image.Image:
    s = size * k
    inner = int(round(s * (1 - 2 * pad)))
    hh = round(inner * hanger.size[1] / hanger.size[0])  # keep proportions exactly
    big = np.asarray(hanger.resize((inner, hh), Image.LANCZOS)).astype(np.float64) / 255
    canvas = np.tile(to_linear(INK), (s, s, 1))
    y0, x0 = (s - hh) // 2, (s - inner) // 2
    a = big[:, :, 3:4]
    region = canvas[y0 : y0 + hh, x0 : x0 + inner]
    canvas[y0 : y0 + hh, x0 : x0 + inner] = to_linear(big[:, :, :3]) * a + region * (1 - a)
    small = canvas.reshape(size, k, size, k, 3).mean((1, 3))
    return Image.fromarray((to_srgb(small) * 255 + 0.5).clip(0, 255).astype(np.uint8), "RGB")


def main() -> None:
    master = Image.open(MASTER).convert("RGBA")
    logo_sizes(master)
    hanger = hanger_shape(master)
    app = ROOT / "src/app"
    # ICO entries must be RGBA for Next.js to read them (alpha is fully opaque).
    ico = [icon(hanger, s, 0.0, 32).convert("RGBA") for s in (16, 32, 48)]
    ico[2].save(app / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)], append_images=ico[:2])
    icon(hanger, 512, 0.04, 4).save(app / "icon.png", optimize=True)
    icon(hanger, 180, 0.1, 8).save(app / "apple-icon.png", optimize=True)
    print("Brand assets regenerated.")


if __name__ == "__main__":
    main()
