"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsHero() {
  useEffect(() => {
    // Left side animation
    gsap.from(".hero-content-left", {
      x: -100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".hero-content-left",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    // Right side animation
    gsap.from(".hero-content-right", {
      x: 100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".hero-content-right",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    // Individual hero title and subtitle (on load effect)
    gsap.from(".ab-inner-hero-title", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.2,
    });
    gsap.from(".ab-inner-hero-subtitle", {
      opacity: 0,
      y: -30,
      duration: 1,
      delay: 0.3,
    });
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/assets/img/inner-about/hero/hero-1.jpg)" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content Wrapper */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between min-h-screen py-16">
        {/* Left Content (Hero Text) */}
        <div className="space-y-6 max-w-4xl hero-content-left">
          <span className="text-3xl md:text-4xl font-light text-white ab-inner-hero-subtitle leading-snug">
            Visionary <br /> <span className="text-[#FF0101]">Digital</span> Studio
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white ab-inner-hero-title leading-tight">
            Crafting <br /> Iconic Digital Identities
          </h1>
          <p className="text-lg text-white">
            Digital experiences with maximum emotional impact
          </p>

          {/* Scroll Button */}
          <div className="flex items-center space-x-3 mt-6 cursor-pointer text-white text-lg">
            <span>Scroll to explore</span>
            <FaArrowDown className="animate-bounce" />
          </div>
        </div>

        {/* Right Bottom CTA Section */}
        <div className="self-end text-right space-y-4 text-white mt-10 md:mt-0 hero-content-right">
          <p className="text-4xl font-bold leading-relaxed">
            <span className="text-[#FF0101]">Fowzi Media</span> develops, designs & delivers <br />
            websites & creative campaigns <br />
            that drive results.
          </p>
          <a
            href="#"
            className="bg-white text-black px-8 py-4 inline-block border-2 hover:bg-[#FF0101] hover:text-white transition-all duration-300"
          >
            Our Story
          </a>
        </div>
      </div>
    </div>
  );
}
