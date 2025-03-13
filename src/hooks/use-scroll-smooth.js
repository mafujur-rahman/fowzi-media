"use client"; // Ensure this file is client-side only

import { gsap } from "gsap";
import { useState, useEffect } from "react";

// ScrollSmoother is part of the gsap package, you need to register it first
import { ScrollSmoother } from "gsap/all"; // You can use gsap/all to access all plugins

gsap.registerPlugin(ScrollSmoother);

export default function useScrollSmooth() {
  const [isScrollSmooth, setIsScrollSmooth] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && isScrollSmooth) {
      const smoothWrapper = document.getElementById("smooth-wrapper");
      const smoothContent = document.getElementById("smooth-content");

      if (smoothWrapper && smoothContent) {
        gsap.config({
          nullTargetWarn: false,
        });

        // Create the ScrollSmoother instance
        ScrollSmoother.create({
          smooth: 2,
          effects: true,
          smoothTouch: 0.1,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      }
    }
  }, [isScrollSmooth]);

  return {
    setIsScrollSmooth,
  };
}
