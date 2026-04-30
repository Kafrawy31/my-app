"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const LoadingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".af-path",
      {
        strokeDasharray: 300,
        strokeDashoffset: 300,
        opacity: 1,
      },
      {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      ".logo-name",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 1.0 }
    );

    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.7,
        delay: 2.6,
        onComplete: () => setIsLoaded(true),
      }
    );
  }, []);

  if (isLoaded) return null;

  return (
    <div className="loading-page fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950">
      {/* AF outline logo */}
      <svg
        className="w-36 h-28 text-white mb-3"
        viewBox="0 0 240 130"
        fill="none"
      >
        {/* A */}
        <path
          className="af-path"
          d="M35 105 L70 25 L105 105"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          className="af-path"
          d="M52 72 H88"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* F */}
        <path
          className="af-path"
          d="M145 105 V25"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          className="af-path"
          d="M145 25 H205"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          className="af-path"
          d="M145 63 H190"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Name */}
      <div className="logo-name text-white text-xl font-extralight tracking-[0.35em] uppercase">
        Adel Farah
      </div>
    </div>
  );
};

export default LoadingPage;