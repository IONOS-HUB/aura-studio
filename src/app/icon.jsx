import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FDF9F5",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 14,
            border: "1px solid #8A6A28",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#14100E",
            fontSize: 15,
            fontFamily: "Georgia, Times New Roman, serif",
            letterSpacing: "-0.04em",
          }}
        >
          A
        </div>
      </div>
    ),
    { ...size }
  );
}
