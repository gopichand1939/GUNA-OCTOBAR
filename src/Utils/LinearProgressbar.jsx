import React from "react";

export default function LinearProgressbar() {
  return (
    <div role="status" className="w-full">
      <div className="h-1 w-full bg-slate-100 rounded overflow-hidden">
        <div className="h-full w-1/3 animate-[progress_1.2s_linear_infinite] bg-sky-500" />
      </div>
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
