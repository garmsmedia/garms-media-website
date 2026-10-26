import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "From Scrolls to Sales. A GARMS MEDIA playbook article for independent clothing brands.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const anton = await readFile(join(process.cwd(), "src/app/fonts/Anton-Regular.woff"));
const logo = `data:image/png;base64,${(await readFile(join(process.cwd(), "src/assets/brand/garms-media-logo.png"))).toString("base64")}`;

/** Share image for the article, generated at build time. */
export default async function ArticleOgImage() {
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
          padding: "60px 72px",
          fontFamily: "Anton",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ background: "#FF5A1F", color: "#111111", padding: "8px 18px", fontSize: 24, letterSpacing: 3 }}>
            THE GARMS PLAYBOOK
          </span>
          <img src={logo} alt="" height={56} width={Math.round((56 * 2558) / 1039)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 150, lineHeight: 0.92 }}>
          <span>FROM SCROLLS</span>
          <span style={{ display: "flex", gap: 30 }}>
            <span>TO</span>
            <span style={{ color: "#FF5A1F" }}>SALES.</span>
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#C9C6BE", letterSpacing: 2 }}>
          TURNING ONLINE ATTENTION INTO REAL BUSINESS OPPORTUNITIES
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Anton", data: anton, style: "normal", weight: 400 }] },
  );
}
