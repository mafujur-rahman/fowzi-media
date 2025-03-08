'use client';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LatestProjects.css"; 

gsap.registerPlugin(ScrollTrigger);

const LatestProjects2 = () => {
  const containerRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;
    const text = textRef.current;

    // ScrollTrigger to move images 
    gsap.fromTo(
      [image1, image2],
      { x: 0 }, 
      {
        x: (i) => (i === 0 ? "-40vw" : "40vw"), 
        scale: 0.7, 
        scrollTrigger: {
          trigger: container,
          start: "top center", 
          end: "bottom center",
          scrub: true, 
        },
      }
    );

    // ScrollTrigger to fade in text when images separate
    gsap.fromTo(
      text,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: container,
          start: "top center", 
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="creative-project py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-full mx-auto relative h-screen flex items-center justify-center overflow-hidden">
        {/* Images */}
        <img
          ref={image1Ref}
          src="/assets/img/home-03/portfolio/port-3.jpg"
          alt="Project 1"
          className="absolute top-0 left-0 w-2/5 rounded-2xl h-4/5 object-cover z-20 " 
        />
        <img
          ref={image2Ref}
          src="/assets/img/home-03/portfolio/port-4.jpg"
          alt="Project 2"
          className="absolute top-0 right-0 w-2/5 h-4/5 rounded-2xl object-cover z-20" 
        />

        {/* Text between images */}
        <div
          ref={textRef}
          className="absolute text-center text-white z-0 px-6 py-4 rounded-lg"
        >
          <h2 className="text-xl mb-16">NOV 2024 - CREATIVE</h2>
          <p className="text-6xl font-bold mb-10">Chania <br /> tourism</p>
          <button className="hover:bg-white border border-gray-400 hover:text-black py-2 px-6 rounded-2xl  transition duration-300">
            SEE PROJECT
          </button>
          <p className="mt-16 h-2 border-0 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl"></p>


        </div>
      </div>
    </div>
  );
};

export default LatestProjects2;