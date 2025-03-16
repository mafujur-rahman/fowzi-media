'use client';
import { TiArrowRightThick } from "react-icons/ti";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroBanner() {
    const textRef = useRef(null);
    const sectionRef = useRef(null);
    const circleRef = useRef(null);
    let hoverAnimation = useRef(null);

    // Split text into spans of letters only, keeping inner styles
    const splitText = (element) => {
        const nodes = Array.from(element.childNodes);
        nodes.forEach((node) => {
            if (node.nodeType === 3) {
                const letters = node.textContent.split('').map((letter) => {
                    return `<span class="letter inline-block">${letter === ' ' ? '&nbsp;' : letter}</span>`;
                }).join('');
                const tempDiv = document.createElement('span');
                tempDiv.innerHTML = letters;
                node.replaceWith(...tempDiv.childNodes);
            } else if (node.nodeType === 1) {
                splitText(node); // Recursive for styled spans
            }
        });
    };

    useLayoutEffect(() => {
        // Split and animate
        if (textRef.current) {
            splitText(textRef.current);
        }

        // Wave animation
        gsap.fromTo(
            textRef.current.querySelectorAll(".letter"),
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                stagger: {
                    each: 0.04,
                    from: "start",
                },
            }
        );

        // Section scroll animation
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    // Hover animation for icon
    useLayoutEffect(() => {
        if (!circleRef.current) return;

        hoverAnimation.current = gsap.to(circleRef.current, {
            backgroundColor: "#FF0101",
            color: "#fff",
            scale: 1.1,
            duration: 0.3,
            ease: "power2.inOut",
            paused: true,
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="text-center px-5 lg:px-20 mt-6 py-20 relative flex flex-col justify-center items-center"
        >
            {/* Hero Content */}
            <h2 ref={textRef} className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                FOWZI <span className="text-[#FF0101]">MEDIA</span> 
            </h2>

            {/* Subtext */}
            <p
                className="mt-8 text-[10px] md:text-lg text-gray-600"
                style={{ fontFamily: 'Glacial Indifference' }}
            >
                We combine artistry with strategy, <br /> creating digital solutions.
            </p>

            {/* Button */}
            <div className="mt-8 text-center">
                <button
                    style={{ fontFamily: "Glacial Indifference" }}
                    className="px-8 py-3 bg-black text-white rounded-full text-lg shadow-lg transition-all flex items-center justify-center"
                >
                    Hire Us
                    <span
                        ref={circleRef}
                        className="bg-white p-2 ml-2 rounded-full hover:bg-red-600 text-black transition-all duration-300 ease-in-out"
                        onMouseEnter={() => hoverAnimation.current.play()}
                        onMouseLeave={() => hoverAnimation.current.reverse()}
                    >
                        <TiArrowRightThick />
                    </span>
                </button>
            </div>
        </section>
    );
}
