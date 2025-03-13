"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TeamSection = () => {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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

  // Mouse/Touch drag functionality
  useEffect(() => {
    const slider = sliderRef.current;

    const onMouseDown = (e) => {
      isDragging.current = true;
      slider.classList.add("cursor-grabbing");
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.offsetLeft;
    };

    const onMouseLeave = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
    };

    const onMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) ; // Adjust the scroll sensitivity
      gsap.to(slider, {
        x: `+=${walk}`,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Touch events for mobile
    const onTouchStart = (e) => {
      isDragging.current = true;
      startX.current = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft.current = slider.offsetLeft;
    };

    const onTouchEnd = () => {
      isDragging.current = false;
    };

    const onTouchMove = (e) => {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      gsap.to(slider, {
        x: `+=${walk}`,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add event listeners
    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);

    slider.addEventListener("touchstart", onTouchStart);
    slider.addEventListener("touchend", onTouchEnd);
    slider.addEventListener("touchmove", onTouchMove);

    // Clean up
    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);

      slider.removeEventListener("touchstart", onTouchStart);
      slider.removeEventListener("touchend", onTouchEnd);
      slider.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full flex items-center py-8">
      {/* Scroll Controlled + Draggable Team Slider */}
      <div className="overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex w-max cursor-grab transition-transform duration-300 ease-out"
        >
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
