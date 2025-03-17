"use client"; // Ensures this runs in the client-side

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // Ensure you've installed Lenis

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // Customize options as required
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });

    function animate(time) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy(); // Cleanup on component unmount
    };
  }, []);

  return null;
}
