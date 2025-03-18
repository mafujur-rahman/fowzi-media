"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'; 
import gsap from 'gsap';
import Link from 'next/link';
import VideoService from './VideoServiceWork';

const VideoDetails = () => {

    // top text animation
    const textContainer = useRef(null);

    useEffect(() => {
        const spans = textContainer.current.querySelectorAll('.reveal-text'); // Select all elements with reveal-text class

        gsap.fromTo(
            spans,
            { x: -150, opacity: 0 }, // Start state
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2, // Wave effect between each span
                ease: 'power3.out',
            }
        );
    }, []);

    // subtitle text animation
    const textRef = useRef(null);

    useEffect(() => {
        const paragraphs = textRef.current.querySelectorAll('.reveal-paragraph');

        gsap.fromTo(
            paragraphs,
            { y: -100, opacity: 0 }, // Start above and invisible
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.3, // Delay between each paragraph for better effect
                ease: 'power3.out',
            }
        );
    }, []);


    //   p tag text animation
    const PheadingRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            PheadingRef.current,
            { y: -100, opacity: 0 }, // Start above and invisible
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power3.out',
            }
        );
    }, []);


    // hero-image animation
    const [scrollPos, setScrollPos] = useState(0);

    // Scroll handler to update position
    const handleScroll = () => {
        const pos = window.scrollY;
        setScrollPos(pos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Limit image movement within boundaries (-max, +max)
    const maxMove = 150; // You can adjust how much image moves up/down
    const move = Math.max(-maxMove, Math.min(maxMove, (scrollPos - 500) * 0.3)); // Adjust 500 as offset when effect starts


    const headingRef = useRef(null);
    const text = "GET IN TOUCH";

    useEffect(() => {
        const spans = headingRef.current.querySelectorAll('.reveal-text'); // Select all span letters

        gsap.fromTo(
            spans,
            { y: '100%', opacity: 0 }, // Start from below and hidden
            {
                y: '0%',
                opacity: 1,
                duration: 1.2,
                stagger: 0.08, // Wave effect between each letter
                ease: 'power3.out',
            }
        );
    }, []);

    return (
        <div className='max-w-7xl mx-auto mt-16'>
            <div>
                <div ref={textContainer} className="overflow-hidden">
                    <p className="font-semibold overflow-hidden">
                        <span className="inline-block reveal-text">Video Studio</span>
                    </p>
                    <h2 className="font-bold text-5xl md:text-7xl lg:text-8xl overflow-hidden mt-4">
                        <span className="inline-block reveal-text mr-3">Videography</span>
                    </h2>
                </div>


                <div ref={textRef} className='my-6 ml-20 md:mx-60 lg:mx-96 overflow-hidden'>
                    <p className="reveal-paragraph">
                    Branding is essential to establishing a strong and lasting presence in the market. At Riveal, we understand the power of visual storytelling. Our goal is to capture your brand’s essence and bring it to life through compelling videography.
                    </p>
                    <p className='my-6 reveal-paragraph'>
                    Explore our portfolio and see how we bring brands to life online!
                    </p>
                </div>

                {/* banner details */}
                <div className="w-full max-w-7xl mx-auto h-[500px] relative overflow-hidden">
                    {/* Fixed Overlay Content */}
                    <div className="absolute top-0 left-0 w-full z-10 p-6"></div>

                    {/* Moving Image */}
                    <div
                        className="absolute top-0 left-0 w-full h-full transition-transform duration-100 ease-out"
                        style={{
                            transform: `translateY(${move}px)`, // Image moves up/down
                        }}
                    >
                        <Image
                            src="/assets/img/services/video-service.jpeg"
                            alt="about-img-1"
                            className="w-full h-full object-cover"
                            fill // ✅ Use "fill" instead of layout="fill" (Next.js 13+)
                            priority
                        />
                    </div>
                </div>

                {/* Middle part with design */}
                <div className='flex flex-col lg:flex-row justify-between items-start gap-10 my-16 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto'>

                    {/* Left side */}
                    <div className='flex-1'>
                        <h3
                            ref={PheadingRef}
                            className='text-2xl mb-6 leading-relaxed overflow-hidden'
                        >
                            A well-crafted video engages your audience, evokes emotion, and leaves a lasting impression. From concept to execution, we create high-quality visuals that resonate with your target audience.
                        </h3>
                        <p className='mb-6 text-gray-700 leading-relaxed'>
                        Great videography keeps viewers engaged, guiding them through the story while sparking emotion — all without unnecessary distractions.
                        </p>
                        <ul className='list-disc pl-5 space-y-3 mb-6 text-gray-700'>
                            <li>Creative direction and concept development</li>
                            <li>Professional filming and editing</li>
                            <li>Integration of brand elements for consistency</li>
                            <li>Delivery in multiple formats for various platforms</li>
                        </ul>
                        <div className='md:flex gap-5'>
                            <img src="/assets/img/services/sv-details-2.webp" alt="Design Sample 1" className='w-70 h-auto object-cover rounded-xl mb-4 md:mb-0' />
                            <img src="/assets/img/services/sv-details-3.webp" alt="Design Sample 2" className='w-70 h-auto object-cover rounded-xl' />
                        </div>
                        <p className='mt-10'>Great videography draws viewers in, keeps them focused on the story, and stirs emotion — all without unnecessary distractions. And when it’s beautifully shot and visually appealing? Even better!</p>
                    </div>

                    {/* Right side */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="bg-gray-100 p-8 rounded-xl shadow-md">
                            <div className='grid grid-cols-1 gap-4 mb-10'>
                                <button className='rounded-3xl w-fit py-3 px-5 border border-gray-700 hover:bg-black hover:text-white transition'><Link href={'/services/branding-service'}>BRANDING</Link></button>
                                <button className='rounded-3xl w-fit py-3 px-5 border border-gray-700 hover:bg-black hover:text-white transition'><Link href={'/services/web-service'}>DEVELOPMENT</Link></button>
                                <button className='rounded-3xl w-fit py-3 px-5 border bg-black text-white border-gray-700'><Link href={'/services/video-service'}>VIDEOGRAPHY</Link></button>

                            </div>
                            <h1 className="text-3xl font-extrabold text-black mb-4">VIDEOGRAPHY</h1>
                            <p className="text-lg text-gray-700 leading-relaxed">
                            Great videography doesn’t just capture moments—it tells a story, connects with your audience, and enhances your brand’s impact. Let’s create something remarkable together!
                            </p>
                            <button className="mt-8 py-2 px-6 rounded-2xl bg-black text-white hover:bg-transparent hover:border hover:border-gray-700 hover:text-black transition">
                                <Link href={"/contact"}>Let's Talk</Link>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
            {/* Our works */}
            <div className="mt-16">
                <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src="/assets/img/logo/icon 2.png" alt="" />
                    <h4 className="text-[#FF0101] text-3xl font-semibold">Our Works</h4>
                </div>
                <VideoService />
            </div>

            {/* Get in touch */}
            <div className="bg-white py-12 w-full overflow-hidden">
                <div className="flex justify-between items-center px-10 max-w-7xl mx-auto">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        DIGITAL DESIGN EXPERIENCE
                    </p>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        FOWZI MEDIA
                    </p>
                </div>

                <h2
                    ref={headingRef}
                    className="font-bold text-black mt-8 text-center w-full text-[16vw] md:text-[10vw] leading-none"
                >
                    {text.split('').map((char, index) => (
                        <span
                            key={index}
                            className="inline-block overflow-hidden reveal-text"
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h2>
            </div>
        </div>
    );
};

export default VideoDetails;
