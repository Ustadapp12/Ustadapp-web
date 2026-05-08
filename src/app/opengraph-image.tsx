import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(120deg, #0d3d26, #1a7a4a)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 40, opacity: 0.9 }}>Ustad أُستَاذ</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 18 }}>Learn. Recite. Remember.</div>
        <div style={{ fontSize: 32, marginTop: 20, opacity: 0.85 }}>
          Gamified Quranic learning - from Alif to full Surahs
        </div>
      </div>
    ),
    size
  );
}
