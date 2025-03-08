import React, { useEffect } from 'react';
import '../WhatWeDo/rotateImage.css';
import { TiArrowRightThick } from 'react-icons/ti';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CreativeStudio = () => {
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
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Main Heading */}
                <p className="text-xl text-[#FF0101] mb-8" style={{ fontFamily: 'Glacial Indifference' }}>(  Our Approach  )</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 flex gap-5 items-center" style={{ fontFamily: 'Glacial Indifference' }}>
                    <span className="animate-text" style={{ fontFamily: 'Glacial Indifference' }}>Creative</span>
                    <img
                        className='rotate-image'
                        style={{ width: "30px", height: "30px" }}
                        src="/assets/img/logo/icon 2.png"
                        alt=""
                    />
                </h1>

                <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-12'>
                    <span className="animate-text" style={{ fontFamily: 'Glacial Indifference' }}> <span className='text-[#FF0101]'>development</span> studio</span>
                </h1>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />

                {/* Product Design Section */}
                <div className="mb-12 flex flex-col sm:flex-row justify-between sm:space-x-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Glacial Indifference' }}>Product design</h2>
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div>
                            <p className="text-lg text-gray-600 mb-6 sm:mb-0" style={{ fontFamily: 'Glacial Indifference' }}>
                                Once we have an idea of your needs, a research and design process <br />
                                begins to gain deep knowledge about the business, users <br />
                                and world content.
                            </p>
                            <div className="flex flex-wrap gap-4 sm:gap-8 mt-5" style={{ fontFamily: 'Glacial Indifference' }}>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">RESEARCH</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">U/LUX</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">PROTOTYPING</span>
                            </div>
                        </div>

                    </div>
                    <button
                       
                        className="mt-6 sm:mt-0 border border-gray-300 rounded-full p-4 text-center text-lg flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                        style={{ fontFamily: "Glacial Indifference" }}
                    >
                        See <br /> Details <br />
                        <TiArrowRightThick className="text-2xl mt-1" />
                    </button>
                </div>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />

                {/* Web/Mobile Section */}
                <div className="mb-12 flex flex-col sm:flex-row justify-between sm:space-x-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Glacial Indifference' }}>Web/Mobile</h2>
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div>
                            <p className="text-lg text-gray-600 mb-6 sm:mb-0" style={{ fontFamily: 'Glacial Indifference' }}>
                                Once we have an idea of your needs, a research and design process <br />
                                begins to gain deep knowledge about the business, users <br />
                                and world content.
                            </p>
                            <div className="flex flex-wrap gap-4 sm:gap-8 mt-5" style={{ fontFamily: 'Glacial Indifference' }}>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">SED</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">CREATIVE DEVELOPMENT</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">WIDEL</span>
                            </div>
                        </div>

                    </div>
                    <button
                        
                        className="mt-6 sm:mt-0 border border-gray-300 rounded-full p-4 text-center text-lg  flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                        style={{ fontFamily: "Glacial Indifference" }}
                    >
                        See <br /> Details <br />
                        <TiArrowRightThick className="text-2xl mt-1" />
                    </button>
                </div>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />

                {/* Consulting Section */}
                <div className='flex flex-col sm:flex-row justify-between sm:space-x-8'>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Glacial Indifference' }}>Consulting</h2>
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div>
                            <p className="text-lg text-gray-600 mb-6 sm:mb-0" style={{ fontFamily: 'Glacial Indifference' }}>
                                Once we have an idea of your needs, a research and design process <br />
                                begins to gain deep knowledge about the business, users <br />
                                and world content.
                            </p>
                            <div className="flex flex-wrap gap-4 sm:gap-8 mt-5" style={{ fontFamily: 'Glacial Indifference' }}>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">CREATIVE</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">DIGITAL STRATEGY</span>
                                <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">MVP</span>
                            </div>
                        </div>

                    </div>
                    <button
                        className="mt-6 sm:mt-0 border border-gray-300 rounded-full p-4 text-center text-lg  flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                        style={{ fontFamily: "Glacial Indifference" }}
                    >
                        See <br /> Details <br />
                        <TiArrowRightThick className="text-2xl mt-1" />
                    </button>
                </div>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />
            </div>
        </div>
    );
};

export default CreativeStudio;