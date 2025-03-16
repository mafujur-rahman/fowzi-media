"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"; // Assuming you're using Next.js Image component

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

    return (
        <div className="mx-auto px-4">
            <div className="ml-32 pt-10">
                <h1 className="text-5xl md:text-7xl font-semibold">
                    Experience <br />{" "}
                    <span className="text-4xl md:text-7xl text-[#FF0101]">the best services.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                    Discover top-notch solutions that meet your needs and exceed expectations.
                </p>
            </div>

            {/* Hero image container */}
            <div className="w-full md:w-1/2 relative h-[550px] overflow-hidden">
                {/* Image inside container */}
                <div
                    ref={imageRef}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform ease-in-out"
                >
                    <Image
                        src="/assets/img/services/hero-1.webp"
                        alt="about-img-1"
                        className="rounded-lg w-full h-full object-cover"
                        layout="intrinsic"
                        width={1200} // Set your image width here
                        height={800} // Set your image height here
                    />
                </div>
            </div>

            {/* services layout */}
            <div className="mt-20">
                <div>
                    <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src="/assets/img/logo/icon 2.png" alt="" />
                        <h4 className="text-[#FF0101] font-semibold">Services</h4>
                    </div>
                    <p className="text-5xl my-8">From web development to branding, videography, and photography-unlock the power of seamless creativity with our integrated solutions.</p>
                </div>

                {/* services logo and name */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-20 w-fit my-16'>
                    <div></div>
                    {/* branding */}
                    <div className='my-8'>
                        <img src="/assets/img/services/brand-icon.webp" alt="" className="w-16 h-16 mb-5" />
                        <div>
                            <h2 className='text-3xl font-bold'>Branding</h2>
                            <p className='text-gray-600'>We specialize in crafting captivating brand identities that resonate with your audience and leave a lasting impression.</p>
                        </div>
                    </div>
                    {/* Website */}
                    <div className='my-8'>
                        <img src="/assets/img/services/web-icon.webp" alt="" className="w-16 h-16 mb-5" />
                        <div>
                            <h2 className='text-3xl font-bold'>Website</h2>
                            <p className='text-gray-600'>We specialize in creating stunning websites that captivate your audience and drive results.</p>
                        </div>
                    </div>
                    {/* videography */}
                    <div className='my-8'>
                        <img src="/assets/img/services/video-icon.webp" alt="" className="w-16 h-16 mb-5" />
                        <div>
                            <h2 className='text-3xl font-bold'>Videography</h2>
                            <p className='text-gray-600'>Elevate your brand with captivating video content that tells your story and engages your audience.</p>
                        </div>
                    </div>
                </div>

                {/* services cards */}
                <div ref={wrapperRef} className="cards">
                    {/* branding */}
                    <div ref={el => cardsRef.current[0] = el} className="card card1 min-h-screen lg:card-side bg-[#424242] items-center">
                        <figure className="w-full md:w-1/2">
                            <img
                                src="/assets/img/services/brandingLeft.png"
                                alt="Album"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        {/* Content Section */}
                        <div className="md:w-1/2 p-8 mt-20 ml-16">
                            <h2 className="text-xl font-semibold text-gray-300">01 &mdash;&mdash; Design Studio</h2>
                            <h3 className="text-5xl font-bold mt-2 text-white">Logos and branding</h3>
                            <p className="mt-6 px-32 text-gray-300">
                                At Fowzi Media, we specialize in crafting captivating brand identities that resonate with your audience and leave a lasting impression. From logo design to website development, our comprehensive branding services are designed to propel your business forward and help you stand out in a crowded marketplace.
                            </p>
                            <ul className="list-disc list-inside mt-8 px-32 text-white">
                                <li>Brand Strategy</li>
                                <li>Logo and Visual Identity</li>
                                <li>Brand Collateral</li>
                                <li>Website Design</li>
                                <li>Content Creation</li>
                                <li>Social Media Branding</li>
                                <li>Brand Guidelines</li>
                            </ul>
                            <button className="mt-6 ml-32  px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#FF0101] transition">
                                See Details →
                            </button>
                        </div>
                    </div>
                    {/* website development */}
                    <div ref={el => cardsRef.current[1] = el} className="card card2 min-h-screen lg:card-side bg-[#424242] items-center">
                        <figure className="w-full md:w-1/2">
                            <img
                                src="/assets/img/services/web-left.jpg"
                                alt="Album"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        {/* Content Section */}
                        <div className="md:w-1/2 p-8 mt-20 ml-16">
                            <h2 className="text-xl font-semibold text-gray-300">02 &mdash;&mdash; Design Studio</h2>
                            <h3 className="text-5xl font-bold mt-2 text-white">Web Development</h3>
                            <p className="mt-6 px-32 text-gray-300">
                                Transform your online presence with Fowzi Media expert website development services. We specialize in creating stunning websites that captivate your audience and drive results. With our streamlined process and personalized approach, achieving your online goals has never been easier.
                            </p>
                            <ul className="list-disc list-inside mt-8 px-32 text-white">
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
                            <button className="mt-6 ml-32  px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#FF0101] transition">
                                See Details →
                            </button>
                        </div>
                    </div>
                    {/* videography */}
                    <div ref={el => cardsRef.current[2] = el} className="card card3 min-h-screen lg:card-side bg-[#424242] items-center">
                        <figure className="w-full md:w-1/2">
                            <img
                                src="/assets/img/services/videoR1.png"
                                alt="Album"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        {/* Content Section */}
                        <div className="md:w-1/2 p-8 mt-20 ml-16">
                            <h2 className="text-xl font-semibold text-gray-300">03 &mdash;&mdash; Design Studio</h2>
                            <h3 className="text-5xl font-bold mt-2 text-white">Videography</h3>
                            <p className="mt-6 px-32 text-gray-300">
                                Elevate your brand with captivating video content that tells your story and engages your audience. Fowzi Media specializes in professional videography services that bring your vision to life and leave a lasting impression. From corporate videos to promotional content, we're here to help you stand out in a crowded digital landscape.
                            </p>
                            <ul className="list-disc list-inside mt-8 px-32 text-white">
                                <li>Corporate Videos</li>
                                <li>Promotional Videos</li>
                                <li>Brand Storytelling</li>
                                <li>Event Coverage</li>
                                <li>Product Demonstrations</li>
                                <li>Testimonials & Interviews</li>
                            </ul>
                            <button className="mt-6 ml-32  px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#FF0101] transition">
                                See Details →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesMain;