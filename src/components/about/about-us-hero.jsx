"use client";
import { FaArrowDown } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutUsHero() {
  const heroRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    // Animate the text and arrow on component mount
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });

    // Bounce animation for the arrow
    gsap.to(arrowRef.current, {
      y: -10,
      repeat: -1, // Infinite repeat
      yoyo: true, // Bounce back and forth
      ease: "power1.inOut",
      duration: 0.8,
    });

    // Scroll-triggered animation for the right CTA section
    gsap.from(".cta-section", {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%", // Start animation when the element is 80% in view
        toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
      },
    });
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/assets/img/inner-about/hero/hero-1.jpg)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between min-h-screen py-16">
        {/* Left Side Content */}
        <div ref={heroRef} className="space-y-6 max-w-4xl mt-16 md:mt-0">
          <span className="text-3xl md:text-4xl font-light text-white leading-snug">
            Visionary <br /> <span className="text-[#FF0101]">Digital</span> Studio
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
            Crafting <span className="text-[#FF0101]">Iconic Digital</span> Identities
          </h1>
          <p className="text-lg text-white max-w-xl">
            Digital experiences with maximum emotional impact.
          </p>

          {/* Scroll Button */}
          <div className="flex items-center space-x-3 mt-8 cursor-pointer text-white text-lg group">
            <span>Scroll to unveil</span>
            <FaArrowDown ref={arrowRef} className="text-[#FF0101]" />
          </div>
        </div>

        {/* Right CTA Section */}
        <div className="cta-section self-end md:text-right space-y-6 text-white mt-20 md:mt-0">
          <p className="text-2xl md:text-3xl font-semibold text-start leading-relaxed">
            <span className="text-[#FF0101]">Fowzi Media</span> seamlessly merges creativity <br /> with cutting-edge technology, crafting <br /> digital experiences that engage, inspire, <br /> and deliver results.
          </p>
          <a
            href="#"
            className="bg-white flex justify-start w-fit text-black px-8 py-4 border-2 border-white rounded-md hover:bg-[#FF0101] hover:text-white transition-all duration-300"
          >
            Explore Our Story
          </a>
        </div>
      </div>
    </div>
  );
}