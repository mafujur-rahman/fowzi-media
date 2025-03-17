"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const BrandingService = () => {
    const sliderRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const currentX = useRef(0); // To track current translateX value smoothly

    const works = [
        { name: "Better Hand", img: "/assets/img/services/branding-works/branding-work-1.jpg" },
        { name: "Inclusive Therapy Center", img: "/assets/img/services/branding-works/branding-work-2.png" },
        { name: "Friday Fashion", img: "/assets/img/services/branding-works/branding-work-3.png" },
        { name: "Wellbeing Home", img: "/assets/img/services/branding-works/branding-work-4.png" },
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

        const totalWidth = slider.scrollWidth / 2;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScrollY = document.body.scrollHeight - window.innerHeight;

            const scrollPercentage = scrollY / maxScrollY;

            const moveX = -scrollPercentage * totalWidth;

            // Smooth scrolling
            gsap.to(slider, {
                x: moveX,
                duration: 0.5,
                ease: "power2.out",
            });

            // Update currentX to keep sync with drag
            currentX.current = moveX;
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
            startX.current = e.pageX;
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
            const x = e.pageX;
            const walk = (x - startX.current) * 1; // Adjust multiplier for sensitivity

            // Apply smooth dragging
            gsap.to(slider, {
                x: currentX.current + walk,
                duration: 0.2,
                ease: "power3.out",
            });
        };

        const onMouseEnd = (e) => {
            if (!isDragging.current) return;
            const x = e.pageX;
            const walk = (x - startX.current) * 1;
            currentX.current += walk; // Update final position for future drags
            isDragging.current = false;
            slider.classList.remove("cursor-grabbing");
        };

        // Touch events
        const onTouchStart = (e) => {
            isDragging.current = true;
            startX.current = e.touches[0].pageX;
        };

        const onTouchMove = (e) => {
            if (!isDragging.current) return;
            const x = e.touches[0].pageX;
            const walk = (x - startX.current) * 1; // Adjust for sensitivity if needed

            gsap.to(slider, {
                x: currentX.current + walk,
                duration: 0.2,
                ease: "power3.out",
            });
        };

        const onTouchEnd = (e) => {
            if (!isDragging.current) return;
            const x = e.changedTouches[0].pageX;
            const walk = (x - startX.current) * 1;
            currentX.current += walk; // Save position
            isDragging.current = false;
        };

        // Add event listeners
        slider.addEventListener("mousedown", onMouseDown);
        slider.addEventListener("mouseleave", onMouseLeave);
        slider.addEventListener("mouseup", onMouseEnd);
        slider.addEventListener("mousemove", onMouseMove);

        slider.addEventListener("touchstart", onTouchStart);
        slider.addEventListener("touchmove", onTouchMove);
        slider.addEventListener("touchend", onTouchEnd);

        // Clean up
        return () => {
            slider.removeEventListener("mousedown", onMouseDown);
            slider.removeEventListener("mouseleave", onMouseLeave);
            slider.removeEventListener("mouseup", onMouseEnd);
            slider.removeEventListener("mousemove", onMouseMove);

            slider.removeEventListener("touchstart", onTouchStart);
            slider.removeEventListener("touchmove", onTouchMove);
            slider.removeEventListener("touchend", onTouchEnd);
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
                        {works.map((work, index) => (
                            <div
                                key={index}
                                className="relative min-w-[250px] h-[350px] overflow-hidden rounded-xl shadow-lg m-3 group"
                            >
                                <img
                                    src={work.img}
                                    alt={work.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Gradient background only at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end text-white text-center p-4 transition-opacity duration-500">
                                    <p className="text-lg font-bold">{work.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default BrandingService;
