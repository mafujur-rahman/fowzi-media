
import React, { useEffect, useRef } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./brandsSlyder.css";
import "./rotateImage.css";
import "./WhatWeDo.css"
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { color: "gray" },
      {
        color: "black",
        duration: 2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { color: "gray" },
      {
        color: "black",
        duration: 2,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  // 🔄 Infinite Scrolling Animation
  useGSAP(() => {
    gsap.to(sliderRef.current, {
      x: "-50%",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <div id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold  mb-8 text-[#FF0101]" style={{ fontFamily: 'Glacial Indifference' }}>
          ( WHAT WE DO )
        </h2>
        <p ref={subtitleRef} className="text-6xl text-gray-700 font-bold mb-8" style={{ fontFamily: 'Glacial Indifference' }}>
          We are <span className="text-[#FF0101]">Fowzi Media</span>
        </p>
        <div className="flex pt-8">
          <div className="flex-1 flex justify-center items-center rotate-image">
            <img className="w-36 h-auto" src="/assets/img/logo/icon 2.png" alt="" />
          </div>
          <div className="flex-1">
            <p className="text-gray-600" style={{ fontFamily: 'Glacial Indifference' }}>
              Welcome to <span className="text-[#FF0101]">Fowzi Media</span>, where Creativity Meets Digital Excellence. We're more than just a service provider; we're dedicated to crafting experiences that make a lasting impact. With a foundation built on a passion for storytelling and a drive for innovation, our team is committed to elevating your digital presence. Specializing in branding, web design, videography, marketing, and communications, we excel in creating compelling narratives, captivating audiences, and driving success for your business.
            </p>
            <div className="mt-8 text-center justify-center">
              <button >
                <Link className="px-8 py-3 bg-black text-white rounded-full text-lg shadow-lg hover:bg-[#FF0101] transition-all justify-center flex items-center" style={{ fontFamily: 'Glacial Indifference' }} href={"/about-us"}>
                  About Us
                  <p className="bg-white p-2 ml-2 rounded-full border-opacity-50 text-black">
                    <TiArrowRightThick />
                  </p>
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* INFINITE SCROLLING SLIDER */}
        <div className="slider-container mt-14">
          <div className="image-slider">
            {/* Duplicate images to create a seamless effect */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <img src="/tONe.png" alt="brand-1" />
                <img src="/tChair.png" alt="brand-2" />
                <img src="/tRisingImpact.png" alt="brand-3" />
                <img src="/trustedLogoFour.png" alt="brand-4" />
                <img src="/trustedLogoThree.png" alt="brand-5" />
                <img src="/trustedLogoSeven.png" alt="brand-6" />
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatWeDo;
