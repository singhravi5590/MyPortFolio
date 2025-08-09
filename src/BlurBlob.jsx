import React from "react";

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <>
      {/* Inline keyframes */}
      <style>
        {`
          @keyframes blob {
            0% { transform: scale(1); }
            33% { transform: scale(1.2); }
            66% { transform: scale(0.8); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      <div
        className="absolute"
        style={{
          top: top,
          left: left,
          width: width,
          height: height,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl"
          style={{
            animation: "blob 10s infinite",
          }}
        ></div>
      </div>
    </>
  );
};

export default BlurBlob;
