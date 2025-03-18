"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const BrandingService = () => {
    const sliderRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const currentX = useRef(0);

    const works = [
        { name: "Better Hand", link: "/branding/better-hand", img: "/assets/img/branding/betterhand community/branding mockup/logo mockup/logo.png" },
        { name: "Radiant Future", link: "/branding/radiant-future", img: "/assets/img/branding/radiant future/branding mockup/logo mockup/logo.png" },
        { name: "Friday Fashion", link: "/branding/friday-fashion", img: "/assets/img/branding/friday fashion/branding/logo mokcup/logo mockup.png" },
        { name: "Optimal Home HealthCare", link: "/branding/optimal", img: "/assets/img/branding/optimal/branding mockup/business card mockup/business card@2x.png" },
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

    return (
        <div className="relative overflow-hidden w-full flex items-center py-8">
            <div className="overflow-hidden w-full">
                <div
                    ref={sliderRef}
                    className="flex w-max cursor-grab transition-transform duration-300 ease-out"
                >
                    {works.map((work, index) => (
                        <a
                            key={index}
                            href={work.link}
                            className="relative min-w-[250px] h-[350px] overflow-hidden rounded-xl shadow-lg m-3 group"
                        >
                            <img
                                src={work.img}
                                alt={work.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end text-white text-center p-4 transition-opacity duration-500">
                                <p className="text-lg font-bold">{work.name}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandingService;
