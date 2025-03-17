"use client"; // Ensures this component runs on the client side

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'; // Import Image correctly

// Images
import shape from "../../../public/assets/img/inner-about/about/shape-1.png";

const ContactPage = () => {

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

    return (
        <div className='max-w-7xl mx-auto mt-16'>
            <div className="overflow-hidden">
                <p className="font-semibold overflow-hidden">
                    <span className="inline-block reveal-text">Fowzi <span className='text-[#FF0101]'>Media &mdash;</span></span>
                </p>
                <h2 ref={textContainer} className="font-bold text-5xl md:text-7xl lg:text-8xl overflow-hidden mt-4">
                    <span className="inline-block reveal-text mr-3">Get</span>
                    <span className="inline-block reveal-text mr-3">in</span>
                    <span className="inline-block reveal-text">touch</span>
                </h2>
            </div>

            {/* contact form section */}
            <div className='my-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10'>
                    {/* left side */}
                    <div>
                        <h4 className='text-2xl'>SEND A MESSAGE</h4>
                        <div className="w-full md:w-1/3 mb-10 relative">
                            <h4 className=" text-[#FF0101] font-bold leading-snug relative z-10">
                                CONTACT US
                            </h4>
                            {/* Use Image component correctly */}
                            <Image
                                src={shape} // Provide correct src as a path
                                alt="shape" // Provide alt text for accessibility
                                className="absolute md:top-4 md:-right-7 lg:top-5 lg:right-10 w-24 h-24 hidden md:block"
                                width={96} // Provide width
                                height={96} // Provide height
                            />
                        </div>
                    </div>
                    {/* right side */}
                    <div>
                        <form className="w-full max-w-lg">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="border-b border-gray-500  w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Your@email.com"
                                    className="border-b border-gray-500  w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Tell Us About Your Project"
                                    className="border-b border-gray-500  w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline h-32"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-black w-full text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline hover:bg-transparent hover:text-black hover:border hover:border-gray-700"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
