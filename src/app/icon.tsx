import { ImageResponse } from "next/og";

// Replaces the default Next.js favicon with the brand mark — Hostinger
// violet rounded square + white chat-square glyph — matching the
// sidebar logo in `src/components/layout/sidebar.tsx`. Next.js renders
// this at build time and auto-injects <link rel="icon"> into <head>.
//
// This route takes precedence over src/app/favicon.ico, which is the
// Next.js default and can stay on disk harmlessly (or be removed).

export const runtime = "edge";
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
          background: "transparent",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M50 0C55 20 70 35 90 40C70 45 55 60 50 80C45 60 30 45 10 40C30 35 45 20 50 0Z" fill="#22c55e" />
          <path d="M50 20C52 32 60 40 72 42C60 44 52 52 50 64C48 52 40 44 28 42C40 40 48 32 50 20Z" fill="#16a34a" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
