'use client';
import React, { useEffect, useRef } from 'react';
import { TiArrowRightThick } from 'react-icons/ti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LatestProjects1 from './LatestProject-1';
import LatestProjects2 from './LatestProjects-2';
import LatestProjects3 from './LatestProjects-3';
import LatestProjects4 from './LatestProjects-4';


gsap.registerPlugin(ScrollTrigger);

const LatestProjectsHome = () => {
    const latestRef = useRef(null);
    const projectsRef = useRef(null);

    useEffect(() => {
        // Wave animation effect
        const waveAnimation = (target) => {
            gsap.fromTo(
                target.children,
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 1.2,
                    stagger: {
                        amount: 0.8, // Makes the wave effect smoother
                        from: "start", // Start animation from the first letter
                    },
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: target,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    }
                }
            );
        };

        // Apply wave animation to both headings
        waveAnimation(latestRef.current);
        waveAnimation(projectsRef.current);
    }, []);

    return (
        <div className='bg-[#1E1E1E] w-full'>
            <div className='grid justify-center pt-16'>
                <div className='text-white flex gap-5 items-center'>
                    {/* "Latest" with wave effect */}
                    <h1 ref={latestRef} className='text-9xl flex ' >
                        {"Latest".split("").map((letter, i) => (
                            <span key={i} className="inline-block">{letter}</span>
                        ))}
                    </h1>

                    {/* Rhombus Button */}
                    <button
                        className="bg-[#FF0101] text-white p-6 w-32 h-32 flex flex-col items-center rounded-2xl ml-5 justify-center border border-[#1E1E1E] shadow-lg"
                        style={{ transform: "rotate(45deg)" }}
                    >
                        <div style={{ transform: "rotate(-45deg)" }} className="flex flex-col items-center">
                            See All <br /> Projects <br /> <TiArrowRightThick />
                        </div>
                    </button>
                </div>

                {/* "Projects" with wave effect */}
                <h1 ref={projectsRef} className=' text-9xl ml-16 flex text-[#FF0101]' >
                    {"Projects".split("").map((letter, i) => (
                        <span key={i} className="inline-block">{letter}</span>
                    ))}
                </h1>
            </div>

            <LatestProjects1 />
            <LatestProjects2 />
            <LatestProjects3 />
            <LatestProjects4 />
        </div>
    );
};

export default LatestProjectsHome;