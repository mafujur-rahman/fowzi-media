'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Control speed of scroll
      smooth: true, // Enable smooth scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing for smooth effect
      direction: 'vertical', // Vertical scrolling
      gestureDirection: 'vertical',
    });

    // Animation Frame
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
