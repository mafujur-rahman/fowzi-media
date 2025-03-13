"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { PiHandWaving } from "react-icons/pi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images
import shape from "../../../public/assets/img/inner-about/about/shape-1.png";
import ab_1 from "../../../public/assets/img/inner-about/about/about-1.jpg";
import ab_2 from "../../../public/assets/img/inner-about/about/about-2.png";
import ab_3 from "../../../public/assets/img/inner-about/about/about-3.jpg";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function AboutUsArea() {
  const aboutContentRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const imageRef = useRef(null);
  const image3Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    //  About Content Scroll Animation
    if (aboutContentRef.current) {
      gsap.fromTo(
        aboutContentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: aboutContentRef.current,
            start: "top 85%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    //  What We Do Section Scroll Animation
    if (whatWeDoRef.current) {
      gsap.fromTo(
        whatWeDoRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: whatWeDoRef.current,
            start: "top 85%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    //  Image Scroll Animation
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -200, 
        scrollTrigger: {
          trigger: imageRef.current,
          start: "bottom top", 
          end: "top bottom", 
          scrub: 1, 
        },
      });
    }
    //  Image 2 Scroll Animation
    if (image2Ref.current) {
      gsap.to(image2Ref.current, {
        y: -200, 
        scrollTrigger: {
          trigger: image2Ref.current,
          start: "-10% bottom", 
          end: "bottom -10%", 
          scrub: 1, 
        },
      });
    }
    //  Image 3 Scroll Animation
    if (image3Ref.current) {
      gsap.to(image3Ref.current, {
        y: -100, 
        scrollTrigger: {
          trigger: image3Ref.current,
          start: "bottom 5%", 
          end: "5% bottom", 
          scrub: 1, 
        },
      });
    }

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="md:relative pt-20 pb-24 z-10">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* =================== Image Section =================== */}
        <div className="flex justify-between gap-10 relative">
          {/* Left Image Container */}
          <div className="w-full -top-40  md:w-1/2 relative h-[550px] overflow-hidden">
            <div ref={imageRef} className=" w-full max-w-[500px]">
              <Image
                src={ab_1}
                alt="about-img-1"
                className="rounded-lg w-full min-h-auto"
              />
            </div>
          </div>

          {/* Right Image Container */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 relative">
            {/*  Main Image with Animation */}
            <div ref={image3Ref} className="relative z-10">
              <Image
                src={ab_2}
                alt="about-img-2"
                className="rounded-lg object-cover w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
              />
            </div>

            {/*  Overlapping Image with Animation */}
            <div ref={image2Ref} className="absolute -right-20 -bottom-40 w-2/3 md:w-1/2 lg:w-auto z-20">
              <Image
                src={ab_3}
                alt="about-img-3"
                className="rounded-lg object-cover w-full h-auto max-h-[300px] md:max-h-[350px] lg:max-h-[400px] shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* =================== About Content =================== */}
        <div id="about-info" ref={aboutContentRef} className="mb-20 ">
          <div className="max-w-4xl">
            <div className="relative space-y-6">
              <span className="inline-flex items-center gap-2 text-xl absolute -rotate-30 bg-black text-white p-3 rounded-lg font-semibold">
                <PiHandWaving />
                Hi!
              </span>
              <p className="text-lg pt-8 leading-relaxed text-gray-700">
                <span className="text-[#FF0101] ml-20 text-2xl">Fowzi Media</span>, A leading
                branding and marketing agency specializing in video production, photography, and
                strategic communications. Our unique perspective as a minority-immigrant-owned firm
                drives compelling digital storytelling that engages audiences and catalyzes social
                change. We excel at bridging communication gaps between public, nonprofit, and
                private sector leaders and immigrant and minority communities. Grounded in
                trust-building, our approach fosters meaningful relationships essential for
                successful marketing and branding campaigns. With a dedicated team of five experts,
                we collaborate with diverse independent contractors to deliver innovative marketing
                solutions. From powerful video commercials to comprehensive strategies, Fowzi Media
                is your partner for success.
              </p>
            </div>
          </div>
        </div>

        {/* =================== What We Do Section =================== */}
        <div ref={whatWeDoRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Title */}
          <div className="w-full md:w-1/3 mb-10 relative">
            <h4 className="text-2xl text-[#FF0101] font-bold leading-snug relative z-10">
              WHAT WE DO
            </h4>
            <Image
              src={shape}
              alt="shape"
              className="absolute top-5 -right-5 w-24 h-24 hidden md:block"
            />
          </div>

          {/* Left List */}
          <div className="w-full md:w-1/3 mb-8">
            <ul className="space-y-3 text-gray-800 text-lg">
              <li><span className="mr-2 text-[#FF0101]">■</span>Video & music Production</li>
              <li><span className="mr-2 text-[#FF0101]">■</span>Photography</li>
              <li><span className="mr-2 text-[#FF0101]">■</span>Strategic Communications</li>
            </ul>
          </div>

          {/* Right List */}
          <div className="w-full md:w-1/3 mb-8">
            <ul className="space-y-3 text-gray-800 text-lg">
              <li><span className="mr-2 text-[#FF0101]">■</span>Branding & Marketing</li>
              <li><span className="mr-2 text-[#FF0101]">■</span>Visual Storytelling</li>
              <li><span className="mr-2 text-[#FF0101]">■</span>Building Communities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}