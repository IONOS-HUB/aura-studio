import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Aura Beauty Studio — La belleza de sentirte tú. Uñas, pestañas y maquillaje en Ibarra.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const logo = await readFile(join(process.cwd(), "public/imgs/icon.PNG"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        <img src={src} width={420} height={420} alt="" />
      </div>
    ),
    { ...size }
  );
}
