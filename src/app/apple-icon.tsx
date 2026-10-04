import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f43f5e, #be123c)",
          color: "white",
          fontSize: 76,
          fontWeight: 800,
        }}
      >
        <svg width="84" height="84" viewBox="0 0 24 24" style={{ marginLeft: 7 }}>
          <path d="M7 4.5v15l12-7.5z" fill="white" />
        </svg>
      </div>
    ),
    size,
  );
}
