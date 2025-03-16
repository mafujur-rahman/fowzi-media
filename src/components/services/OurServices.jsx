import React, { useEffect } from 'react';
import '../WhatWeDo/rotateImage.css';
import { TiArrowRightThick } from 'react-icons/ti';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
    useEffect(() => {
        // GSAP Animation for text color change and image color change on scroll
        gsap.fromTo(
            ".animate-text",
            {
                color: "gray",
            },
            {
                color: "black",
                scrollTrigger: {
                    trigger: ".animate-text",
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".rotate-image",
            {
                filter: "grayscale(100%)",
            },
            {
                filter: "grayscale(0%)",
                scrollTrigger: {
                    trigger: ".rotate-image",
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
            }
        );
    }, []);



    return (
        <div id='services' className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Main Heading */}
                <p className="text-xl text-[#FF0101] mb-8" style={{ fontFamily: 'Glacial Indifference' }}>(  Our Services  )</p>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 flex gap-5 items-center" style={{ fontFamily: 'Glacial Indifference' }}>
                    <span className="animate-text" style={{ fontFamily: 'Glacial Indifference' }}>Thoughtful</span>
                    <img
                        className='rotate-image'
                        style={{ width: "30px", height: "30px" }}
                        src="/assets/img/logo/icon 2.png"
                        alt=""
                    />
                </h1>

                <h1 className=' font-bold text-gray-900 mb-12'>
                    <span className="animate-text" style={{ fontFamily: 'Glacial Indifference' }}> <span className='text-[#FF0101] text-4xl sm:text-5xl md:text-6xl'>Process</span> <span className='h-[20px] w-auto'>We Think a lot</span></span>
                </h1>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />

                {/* Product Design Section */}
                <div className="mb-12 flex flex-col sm:flex-row justify-between sm:space-x-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Glacial Indifference' }}>Branding</h2>
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div>
                            <p className="text-lg text-gray-600 mb-6 sm:mb-0" style={{ fontFamily: 'Glacial Indifference' }}>
                            We specialize in crafting captivating brand identities that resonate with <br /> your audience and leave a lasting impression.
                            </p>
                            <div className="flex flex-wrap gap-4 sm:gap-8 mt-5" style={{ fontFamily: 'Glacial Indifference' }}>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">Brand Strategy</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">Social Media Branding</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">Brand Guidelines</span>
                            </div>
                        </div>

                    </div>
                    <button
                       
                        className="mt-6 sm:mt-0 border border-gray-300 rounded-full p-4 text-center text-lg flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl  hover:bg-[#FF0101] hover:text-white"
                        style={{ fontFamily: "Glacial Indifference" }}
                    >
                       <Link href={'/services'}> See <br /> Details <br />
                       <TiArrowRightThick className="text-2xl mt-1" /></Link>
                    </button>
                </div>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />

                {/* Web/Mobile Section */}
                <div className="mb-12 flex flex-col sm:flex-row justify-between sm:space-x-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Glacial Indifference' }}>Web Development</h2>
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div>
                            <p className="text-lg text-gray-600 mb-6 sm:mb-0" style={{ fontFamily: 'Glacial Indifference' }}>
                            We specialize in creating stunning websites that captivate your audience and drive results.
                            </p>
                            <div className="flex flex-wrap gap-4 sm:gap-8 mt-5" style={{ fontFamily: 'Glacial Indifference' }}>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">SEO</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">CREATIVE DEVELOPMENT</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">Custom Proactive Solutions</span>
                            </div>
                        </div>

                    </div>
                    <button
                       
                        className="mt-6 sm:mt-0 border border-gray-300 rounded-full p-4 text-center text-lg flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl  hover:bg-[#FF0101] hover:text-white"
                        style={{ fontFamily: "Glacial Indifference" }}
                    >
                       <Link href={'/services'}> See <br /> Details <br />
                       <TiArrowRightThick className="text-2xl mt-1" /></Link>
                    </button>
                </div>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />

                {/* Consulting Section */}
                <div className='flex flex-col sm:flex-row justify-between sm:space-x-8'>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Glacial Indifference' }}>Videography</h2>
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div>
                            <p className="text-lg text-gray-600 mb-6 sm:mb-0" style={{ fontFamily: 'Glacial Indifference' }}>
                            We specializes in professional videography services that bring your vision to life and <br /> leavea lasting impression.
                            </p>
                            <div className="flex flex-wrap gap-4 sm:gap-8 mt-5" style={{ fontFamily: 'Glacial Indifference' }}>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">Creative</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">Brand Storytelling</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">Promotional Videos</span>
                            </div>
                        </div>

                    </div>
                    <button
                       
                        className="mt-6 sm:mt-0 border border-gray-300 rounded-full p-4 text-center text-lg flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl  hover:bg-[#FF0101] hover:text-white"
                        style={{ fontFamily: "Glacial Indifference" }}
                    >
                       <Link href={'/services'}> See <br /> Details <br />
                       <TiArrowRightThick className="text-2xl mt-1" /></Link>
                    </button>
                </div>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />
            </div>
        </div>
    );
};

export default OurServices;