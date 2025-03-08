import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 0.9 }, 
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%", 
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/assets/video/liko-3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;