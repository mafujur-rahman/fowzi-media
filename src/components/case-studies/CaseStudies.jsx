"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    title: "Awad For Puntland",
    link: "https://fowzimedia.com/awad.pdf",
    description:
      "Case study for Amb. Ahmed Isse Awad, Puntland Presidential Candidate, 2024.",
    image: "/assets/img/case-studies/blogOne.png",
  },
  {
    title: "Jannah Fitwear",
    description:
      "Jannah Fitwear, a modern fitness and lifestyle brand for Muslim women.",
    image: "/assets/img/case-studies/blogTwo.jpg",
  },
  {
    title: "2020 Census",
    description: "Official case study for the City of Minneapolis 2020 Census.",
    image: "/assets/img/case-studies/importanceOfUsing.jpg",
  },
];

const CaseStudies = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%", // animate when top of card hits 90% of viewport
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div id="case-studies" className="max-w-7xl mx-auto py-24 px-5 sm:px-8 lg:px-20">
      <h1 className="text-black text-4xl md:text-5xl font-bold mb-16 ">
        Featured <span className="text-[#ff0101]">Case Studies</span>
      </h1>

      <div className="case-grid grid gap-10 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)} // Set ref for each card
            className="case-card bg-[#111] rounded-3xl overflow-hidden shadow-2xl group transition-all duration-500 hover:scale-[1.04] border border-[#222]"
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0  bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="p-6 flex flex-col gap-4 h-60">
              <h2 className="text-white text-2xl font-semibold leading-snug group-hover:text-[#ff0101] transition-colors duration-300">
                {study.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm line-clamp-3">
                {study.description}
              </p>

              <button className="mt-auto inline-flex items-center gap-2 text-[#ff0101] hover:text-white transition-colors duration-300 font-semibold">
                <a href={study.link}>
                Read More
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
