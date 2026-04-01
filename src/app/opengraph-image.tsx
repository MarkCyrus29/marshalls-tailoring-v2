import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Marshalls Tailoring — Lipa City";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1b3fa6 0%, #122980 60%, #0e1f6b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* decorative top line */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            right: 80,
            height: 2,
            background: "rgba(255,255,255,0.25)",
          }}
        />
        {/* decorative bottom line */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            height: 2,
            background: "rgba(255,255,255,0.25)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* Monogram */}
          <div
            style={{
              fontSize: 120,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            MT
          </div>

          {/* Brand name */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "8px",
              textTransform: "uppercase",
            }}
          >
            MARSHALLS
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            TAILORING
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginTop: 8,
            }}
          >
            Lipa City, Batangas
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
