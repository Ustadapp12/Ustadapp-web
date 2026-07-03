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
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: "48px",
          overflow: "hidden",
          background: "linear-gradient(150deg, #58cc02 0%, #46a302 55%, #2f7f00 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -70,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 64,
            right: 88,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 22px",
            borderRadius: 999,
            background: "#ffd900",
            color: "#704f00",
            fontSize: 28,
            fontWeight: 800,
            boxShadow: "0 8px 0 #dbb800",
          }}
        >
          ★ +120 XP
        </div>

        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "52px 64px",
            borderRadius: 40,
            background: "rgba(15, 63, 8, 0.22)",
            border: "4px solid rgba(255, 255, 255, 0.28)",
            boxShadow: "0 16px 0 rgba(22, 80, 5, 0.5)",
          }}
        >
          <div style={{ fontSize: 42, fontWeight: 700, opacity: 0.96 }}>UstadApp أُستَاذ</div>
          <div style={{ fontSize: 78, fontWeight: 800, marginTop: 20, lineHeight: 1.05 }}>
            Learn. Recite. Remember.
          </div>
          <div style={{ fontSize: 34, marginTop: 24, opacity: 0.9 }}>
            Gamified Quranic learning - from Alif to full Surahs
          </div>

          <div style={{ display: "flex", gap: 14, marginTop: 30 }}>
            <div
              style={{
                borderRadius: 16,
                padding: "10px 18px",
                background: "rgba(255, 255, 255, 0.2)",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              Level Up Daily
            </div>
            <div
              style={{
                borderRadius: 16,
                padding: "10px 18px",
                background: "rgba(255, 255, 255, 0.2)",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              Keep Your Streak
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
