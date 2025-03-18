"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ServicesMain = () => {
    const imageRef = useRef(null);
    const cardsRef = useRef([]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        // Image animation
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                y: 300, // Move the image down by 300px
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }

        // Cards animation
        const cards = cardsRef.current;

        cards.forEach((card, index) => {
            // Pin only the first and second cards
            if (index < cards.length - 1) {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                });
            }

            // Animate the next card to scroll over the pinned card
            if (index < cards.length - 1) {
                gsap.to(cards[index + 1], {
                    scrollTrigger: {
                        trigger: card,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            }
        });
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



    // services name and logo animation
    const gridRef = useRef(null);

    useEffect(() => {
        const items = gridRef.current.querySelectorAll(".service-item");

        // GSAP animation for each item
        gsap.fromTo(
            items,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(1.7)", // Smooth popping effect
                stagger: 0.2, // Delay between each item for sequence effect
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%", // When top of grid hits 80% of viewport height
                },
            }
        );

        // Cleanup on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);



    // get in touch animation
    const headingRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            { scale: 0, opacity: 0, transformOrigin: "center center" },
            {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.5,
            }
        );
    }, []);



    // upper text animation
    const h1Ref = useRef(null);
    const pRef = useRef(null);

    useEffect(() => {
        const h1Lines = h1Ref.current.querySelectorAll(".line"); // Select each line

        // GSAP timeline for smooth sequence
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Wave animation for h1 lines
        tl.fromTo(
            h1Lines,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2, // delay between lines for wave effect
            }
        );

        // p tag animation
        tl.fromTo(
            pRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=0.5" // starts 0.5s before h1 finishes for smoother overlap
        );
    }, []);




    return (
        <div className=" px-4">
            <div className="w-full max-w-6xl my-16 mx-auto px-4 md:px-0">
                <h1 ref={h1Ref} className="text-5xl md:text-7xl font-semibold leading-tight overflow-hidden">
                    <span className="block line">Experience</span>
                    <span className="block line text-[#FF0101]">the best services.</span>
                </h1>
                <p
                    ref={pRef}
                    className="text-lg md:text-xl text-gray-700 mb-8 mt-4 max-w-3xl leading-relaxed"
                >
                    Discover top-notch solutions that meet your needs and exceed expectations.
                </p>
            </div>

            {/* Hero image container */}
            <div className="w-full max-w-7xl mx-auto h-[500px] relative overflow-hidden">

                {/* Fixed Overlay Content */}
                <div className="absolute top-0 left-0 w-full z-10 p-6">
                </div>

                {/* Moving Image */}
                <div
                    className="absolute top-0 left-0 w-full h-full transition-transform duration-100 ease-out"
                    style={{
                        transform: `translateY(${move}px)`, // Image moves up/down
                    }}
                >
                    <Image
                        src="/assets/img/services/services-banner.jpg"
                        alt="about-img-1"
                        className="w-full h-full object-cover"
                        layout="fill"
                        priority
                    />
                </div>
            </div>



            {/* services layout */}
            <div className="mt-20 ">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src="/assets/img/logo/icon 2.png" alt="" />
                        <h4 className="text-[#FF0101] text-2xl font-semibold">Services</h4>
                    </div>
                    <p className="text-3xl md:text-5xl my-8">From web development to branding, videography, and photography-unlock the power of seamless creativity with our integrated solutions.</p>
                </div>

                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-4 gap-20 w-fit my-16 max-w-7xl mx-auto"
                >
                    <div></div>
                    {/* Branding */}
                    <div className="my-8 service-item">
                        <img
                            src="/assets/img/services/branding-icon.png"
                            alt="Branding"
                            className="w-16 h-16 mb-5"
                        />
                        <div>
                            <h2 className="text-3xl font-bold">Branding</h2>
                            <p className="text-gray-600">
                                We specialize in crafting captivating brand identities that resonate with your audience and leave a lasting impression.
                            </p>
                        </div>
                    </div>
                    {/* Website */}
                    <div className="my-8 service-item">
                        <img
                            src="/assets/img/services/web-icon.png"
                            alt="Website"
                            className="w-16 h-16 mb-5"
                        />
                        <div>
                            <h2 className="text-3xl font-bold">Website</h2>
                            <p className="text-gray-600">
                                We specialize in creating stunning websites that captivate your audience and drive results.
                            </p>
                        </div>
                    </div>
                    {/* Videography */}
                    <div className="my-8 service-item">
                        <img
                            src="/assets/img/services/video-icon.webp"
                            alt="Videography"
                            className="w-16 h-16 mb-5"
                        />
                        <div>
                            <h2 className="text-3xl font-bold">Videography</h2>
                            <p className="text-gray-600">
                                Elevate your brand with captivating video content that tells your story and engages your audience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* services cards */}
                <div ref={wrapperRef} className="cards">
                    {/* branding */}
                    <div ref={el => cardsRef.current[0] = el} className="card card1 min-h-screen md:card-side bg-[#424242] items-center">
                        <figure className="w-full md:w-1/2">
                            <img
                                src="/assets/img/services/brandingLeft.png"
                                alt="Album"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        {/* Content Section */}
                        <div className="md:w-1/2 p-8 md:mt-10 md:ml-10">
                            <h2 className="text-xl font-semibold text-gray-300">01 &mdash;&mdash; Design Studio</h2>
                            <h3 className="text-5xl font-bold mt-2 text-white">Branding</h3>
                            <p className="mt-6 lg:pl-32 text-gray-300">
                                At Fowzi Media, we specialize in crafting captivating brand identities that resonate with your audience and leave a lasting impression. From logo design to website development, our comprehensive branding services are designed to propel your business forward and help you stand out in a crowded marketplace.
                            </p>
                            <ul className="list-disc list-inside mt-8 lg:pl-32 text-white">
                                <li>Brand Strategy</li>
                                <li>Logo and Visual Identity</li>
                                <li>Brand Collateral</li>
                                <li>Website Design</li>
                                <li>Content Creation</li>
                                <li>Social Media Branding</li>
                                <li>Brand Guidelines</li>
                            </ul>
                            <button className="mt-6 lg:ml-32  px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#FF0101] transition">
                                <Link href={"/services/branding-service"}>See Details →</Link>
                            </button>
                        </div>
                    </div>
                    {/* website development */}
                    <div ref={el => cardsRef.current[1] = el} className="card card2 min-h-screen md:card-side bg-[#424242] items-center">
                        <figure className="w-full md:w-1/2">
                            <img
                                src="/assets/img/services/web-left.jpg"
                                alt="Album"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        {/* Content Section */}
                        <div className="md:w-1/2 p-8 md:mt-10 md:ml-10">
                            <h2 className="text-xl font-semibold text-gray-300">02 &mdash;&mdash; Development Studio</h2>
                            <h3 className="text-5xl font-bold mt-2 text-white">Web Development</h3>
                            <p className="mt-6 lg:pl-32 text-gray-300">
                                Transform your online presence with Fowzi Media expert website development services. We specialize in creating stunning websites that captivate your audience and drive results. With our streamlined process and personalized approach, achieving your online goals has never been easier.
                            </p>
                            <ul className="list-disc list-inside mt-8 lg:pl-32 text-white">
                                <li>Responsive Website</li>
                                <li>Real Estate</li>
                                <li>Health Care</li>
                                <li>Transport</li>
                                <li>Travel</li>
                                <li>Media & Entertainment</li>
                                <li>Restaurant</li>
                                <li>E - Learning</li>
                                <li>Custom Proactive Solutions</li>
                            </ul>
                            <button className="mt-6 lg:ml-32  px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#FF0101] transition">
                                <Link href={"/services/web-service"}>See Details →</Link>
                            </button>
                        </div>
                    </div>
                    {/* videography */}
                    <div ref={el => cardsRef.current[2] = el} className="card card3 min-h-screen md:card-side bg-[#424242] items-center">
                        <figure className="w-full md:w-1/2">
                            <img
                                src="/assets/img/services/videoR1.png"
                                alt="Album"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        {/* Content Section */}
                        <div className="md:w-1/2 p-8 md:mt-10 md:ml-10">
                            <h2 className="text-xl font-semibold text-gray-300">03 &mdash;&mdash; Video Studio</h2>
                            <h3 className="text-5xl font-bold mt-2 text-white">Videography</h3>
                            <p className="mt-6 lg:pl-32 text-gray-300">
                                Elevate your brand with captivating video content that tells your story and engages your audience. Fowzi Media specializes in professional videography services that bring your vision to life and leave a lasting impression. From corporate videos to promotional content, we're here to help you stand out in a crowded digital landscape.
                            </p>
                            <ul className="list-disc list-inside mt-8 lg:pl-32 text-white">
                                <li>Corporate Videos</li>
                                <li>Promotional Videos</li>
                                <li>Brand Storytelling</li>
                                <li>Event Coverage</li>
                                <li>Product Demonstrations</li>
                                <li>Testimonials & Interviews</li>
                            </ul>
                            <button className="mt-6 lg:ml-32  px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#FF0101] transition">
                                <Link href={"/services/video-service"}>See Details →</Link>
                            </button>
                        </div>
                    </div>
                </div>
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
                    GET IN TOUCH
                </h2>
            </div>
        </div>
    );
};

export default ServicesMain;