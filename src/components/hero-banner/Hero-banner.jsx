'use client';
import { TiArrowRightThick } from "react-icons/ti";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroBanner() {
    const textRef = useRef(null);
    const subTextRef = useRef(null);
    const sectionRef = useRef(null);
    const circleRef = useRef(null);
    let hoverAnimation = useRef(null);

    useLayoutEffect(() => {
        // Animate heading text
        gsap.fromTo(
            textRef.current.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 1.5,
                ease: "power3.out",
            }
        );

        // Fade-in effect for subtext
        gsap.fromTo(
            subTextRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                delay: 0.5,
                duration: 1.2,
                ease: "power3.out",
            }
        );

        // Scroll animation for section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
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
        <section ref={sectionRef} className="text-center px-5 lg:px-20 mt-6 py-20 relative flex flex-col justify-center items-center">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-green-300 to-red-300 blur-3xl opacity-20"></div>

            {/* Hero Content */}
            <h2 ref={textRef} className="text-6xl lg:text-8xl font-bold" >
                <span>We're a <span className="text-[#FF0101]">high-end</span></span> <br /> <span><span className="text-[#FF0101]">digital</span> agency</span>
            </h2>

            {/* Subtext */}
            <p ref={subTextRef} className="mt-8 text-lg text-gray-600" style={{ fontFamily: 'Glacial Indifference' }}>
                UX/UI DESIGN / MOTION DESIGN / BRANDING / DEVELOPMENT
            </p>

            {/* Button */}
            <div className="mt-8 text-center ">
                <button
                    style={{ fontFamily: "Glacial Indifference" }}
                    className="px-8 py-3 bg-black text-white  rounded-full text-lg shadow-lg transition-all flex items-center justify-center"
                >
                    Say Hello
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