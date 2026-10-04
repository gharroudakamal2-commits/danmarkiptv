import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          borderRadius: 14,
          background: "linear-gradient(135deg, #f43f5e, #be123c)",
          color: "white",
          fontSize: 28,
          fontWeight: 800,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" style={{ marginLeft: 2 }}>
          <path d="M7 4.5v15l12-7.5z" fill="white" />
        </svg>
      </div>
    ),
    size,
  );
}
