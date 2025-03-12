"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TeamSection = () => {
  const sliderRef = useRef(null);

  const people = [
    { name: "Abdurahman Ali", title: "Photographer/Videographer", img: "/assets/img/inner-about/team/HS2.jpeg" },
    { name: "Joy Sutradhor", title: "Software Engineer", img: "/assets/img/inner-about/team/jon.jpg" },
    { name: "Nazmul Islam", title: "Graphics Designer", img: "/assets/img/inner-about/team/nazmul.png" },
    { name: "Ishak Yasin", title: "Videographer", img: "/assets/img/inner-about/team/new.jpg" },
    { name: "Hussein Noor", title: "Senior Strategist", img: "/assets/img/inner-about/team/noor.jpg" },
    { name: "Shugri Farah", title: "Project Manager", img: "/assets/img/inner-about/team/ShugriFarah.jpg" },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    const cards = Array.from(slider.children);

    if (cards.length === 0) return;

    // Duplicate cards for infinite loop effect
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      slider.appendChild(clone);
    });

    const totalWidth = slider.scrollWidth / 2; // Since duplicated

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScrollY = document.body.scrollHeight - window.innerHeight;

      const scrollPercentage = scrollY / maxScrollY;

      const moveX = -scrollPercentage * totalWidth;

      // Apply GSAP animation for smooth horizontal scrolling
      gsap.to(slider, {
        x: moveX,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden w-full flex items-center py-8">
      {/* Scroll Controlled Team Slider */}
      <div className="overflow-hidden w-full">
        <div ref={sliderRef} className="flex w-max">
          {people.map((person, index) => (
            <div
              key={index}
              className="relative min-w-[250px] h-[350px] overflow-hidden rounded-xl shadow-lg m-3 group"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-end text-white text-center p-4 transition-opacity duration-500">
                <p className="text-sm">{person.title}</p>
                <p className="text-lg font-bold">{person.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
