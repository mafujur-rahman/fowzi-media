"use client"
import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import { gsap } from "gsap";
import { FaArrowDown } from "react-icons/fa";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
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
      className="relative bg-cover bg-center p-0"
      style={{ backgroundImage: "url(/assets/img/inner-about/hero/hero-1.jpg)" }}
    >
      <div className="hidden">
        <h6>About Us</h6>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-white text-xl">
        <a onClick={scrollTo} className="flex items-center space-x-2">
          <span>Scroll to explore</span>
          <FaArrowDown />
        </a>
      </div>

      <div className="container mx-auto px-5 py-20">
        <div className="flex flex-wrap">
          <div className="xl:w-2/3 w-full">
            <div className="space-y-5">
              <span className="text-4xl font-light text-white">
                Digital <br /> creative agency
              </span>
              <h1 className="text-5xl font-bold text-white">
                Building Digital Presence
              </h1>
              <p className="text-lg text-white">
                Digital experiences with maximum emotional impact
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 w-full flex justify-end">
            <div className="space-y-4">
              <p className="text-lg text-white">
                Liko develops, designs & delivers websites & creative campaigns
                that drive results
              </p>
              <a className="bg-white text-black px-6 py-3 inline-block border-2 border-black hover:bg-transparent hover:text-white transition-all duration-300">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
