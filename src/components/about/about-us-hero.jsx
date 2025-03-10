"use client";
import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import { gsap } from "gsap";
import { FaArrowDown } from "react-icons/fa";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo("about-info", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    gsap.from(".ab-inner-hero-title", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.2,
    });
    gsap.from(".ab-inner-hero-subtitle", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.3,
    });
    gsap.from(".ab-inner-hero-content", {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.4,
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
        <div className="space-y-6 max-w-4xl">
          <span className="text-3xl md:text-4xl font-light text-white ab-inner-hero-subtitle leading-snug">
            Digital <br /> creative agency
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white ab-inner-hero-title leading-tight">
            Building <br /> Digital <br /> Presence
          </h1>
          <p className="text-lg text-white ab-inner-hero-content">
            Digital experiences with maximum emotional impact
          </p>

          {/* Scroll Button */}
          <div
            className="flex items-center space-x-3 mt-6 cursor-pointer text-white text-lg"
            onClick={scrollTo}
          >
            <span>Scroll to explore</span>
            <FaArrowDown className="animate-bounce" />
          </div>
        </div>

        {/* Right Bottom CTA Section */}
        <div className="self-end text-right space-y-4 text-white mt-10 md:mt-0">
          <p className="text-lg ab-inner-hero-content leading-relaxed">
            Liko develops, designs & delivers <br />
            websites & creative campaigns <br />
            that drive results.
          </p>
          <a
            href="#"
            className="bg-white text-black px-8 py-4 inline-block border-2 border-black hover:bg-transparent hover:text-white transition-all duration-300"
          >
            Our Story
          </a>
        </div>
      </div>
    </div>
  );
}
