"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const UnderConstructionModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("portfolio_notice_seen");
    if (!hasSeen) {
      setOpen(true);
      sessionStorage.setItem("portfolio_notice_seen", "true");
    }
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)} // 👈 click on backdrop closes modal
    >
      <div
        className="border-primary/40 w-full max-w-md rounded-xl border bg-neutral-950 p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()} // 👈 prevent inner clicks
      >
        <h2 className="text-xl font-semibold text-white">
          🚧 Portfolio Under Construction
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          This portfolio is currently a{" "}
          <span className="text-white">work in progress</span>. Some sections may
          be incomplete or not fully optimized yet. You may encounter some bugs, if so, 
          please report them. I’m actively improving performance, content,
          and UX.
        </p>

        <div className="mt-5 flex justify-end gap-3">
          <button
            onClick={() => setOpen(false)}
            className={cn(
              "rounded-md bg-white px-4 py-1.5 text-sm font-medium text-black",
              "hover:bg-white/90 transition-colors"
            )}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionModal;