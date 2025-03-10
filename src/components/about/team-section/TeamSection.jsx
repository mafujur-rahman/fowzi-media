"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TeamSection = () => {
  const people = [
    { name: "Abdurahman Ali", title: "Photographer/Videographer", img: "/assets/img/inner-about/team/HS2.jpeg" },
    { name: "Joy Sutradhor", title: "Software Engineer", img: "/assets/img/inner-about/team/jon.jpg" },
    { name: "Nazmul Islam", title: "Graphics Designer", img: "/assets/img/inner-about/team/nazmul.png" },
    { name: "Ishak Yasin", title: "Videographer", img: "/assets/img/inner-about/team/new.jpg" },
    { name: "Hussein Noor", title: "Senior Strategist", img: "/assets/img/inner-about/team/noor.jpg" },
    { name: "Shugri Farah", title: "Project Manager", img: "/assets/img/inner-about/team/ShugriFarah.jpg" },
  ];

  const cardsRef = useRef([]);
  const sliderRef = useRef();

  // GSAP Hover Animations
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      const image = card.querySelector("img");
      const overlay = card.querySelector(".name-overlay");

      gsap.set(overlay, { y: "100%" });

      card.addEventListener("mouseenter", () => {
        gsap.to(overlay, { y: "0%", duration: 0.5, ease: "power3.out" });
        gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power3.out" }); // Zoom effect
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(overlay, { y: "100%", duration: 0.5, ease: "power3.in" });
        gsap.to(image, { scale: 1, duration: 0.5, ease: "power3.in" }); // Reset zoom
      });
    });
  }, []);

  // Drag Scroll Functionality
  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("cursor-grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="overflow-hidden px-4 py-10">
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab"
      >
        {people.map((person, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative min-w-[250px] h-[350px] overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={person.img}
              alt={person.name}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
            <div className="name-overlay absolute bottom-0 left-0 w-full text-white text-center py-3 px-2">
              <p className="text-sm">{person.title}</p>
              <p className="text-xl font-bold">{person.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
