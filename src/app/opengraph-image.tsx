import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "GARMS MEDIA — Social media marketing for independent streetwear brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const anton = await readFile(join(process.cwd(), "src/app/fonts/Anton-Regular.woff"));

/** Social sharing image, generated at build time in brand colours. */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111111",
          color: "#F2F0EA",
          padding: "64px 72px",
          fontFamily: "Anton",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span style={{ fontSize: 44 }}>GARMS</span>
          <span style={{ fontSize: 22, color: "#FF5A1F", letterSpacing: 6 }}>MEDIA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, lineHeight: 0.95, textTransform: "uppercase" }}>
          <span>Your brand deserves</span>
          <span style={{ display: "flex", gap: 24 }}>
            <span style={{ color: "#FF5A1F" }}>more</span>
            <span>than just likes.</span>
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#C9C6BE", letterSpacing: 3, textTransform: "uppercase" }}>
          Social media marketing · Independent streetwear · Los Angeles
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Anton", data: anton, style: "normal", weight: 400 }] },
  );
}
