"use client";

import { useEffect, useState } from "react";

export function MarketingScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollHeight <= 0 ? 0 : Math.min(scrollTop / scrollHeight, 1);

      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="h-[3px] w-full bg-[rgba(255,255,255,0.03)]">
      <div
        className="h-full rounded-r-full bg-[linear-gradient(90deg,#ff005c_0%,#ff2a75_60%,#ff6aa2_100%)] shadow-[0_0_22px_rgba(255,0,92,0.42)] transition-[width,opacity] duration-200 ease-out"
        style={{
          width: `${progress * 100}%`,
          opacity: progress <= 0.002 ? 0 : 1,
        }}
      />
    </div>
  );
}
