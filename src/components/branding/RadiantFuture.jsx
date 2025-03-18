"use client";

import gsap from "gsap";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const RadiantFuture = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const textRef = useRef(null);


    // text animation
    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { x: "-100%", opacity: 0 },
            { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
        );
    }, []);

    // Scroll handler to update position
    const handleScroll = () => {
        setScrollPos(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Limit image movement within boundaries (-max, +max)
    const maxMove = 150;
    const move = Math.max(-maxMove, Math.min(maxMove, (scrollPos - 500) * 0.3));

    // process step
    const steps = [
        { number: "01", title: "Consultation" },
        { number: "02", title: "Planning & Concept Development" },
        { number: "03", title: "Photography Session" },
        { number: "04", title: "Editing & Retouching" },
        { number: "05", title: "Review & Revisions" },
        { number: "06", title: "Delivery" },
    ];

    // testimonial
    const testimonials = [
        {
            name: "Liban Yasin",
            message: "They provided me with a high quality work for a friendly price and responded to feedback in a timely way. I will highly recommend using Fowzi Media's services. A very satisfied client. Thanks",
            image: "https://via.placeholder.com/100",
        },
        {
            name: "John Doe",
            message: "Amazing service! The team was professional, and the final results exceeded my expectations. I will definitely be back for more.",
            image: "https://via.placeholder.com/100",
        },
        {
            name: "Jane Smith",
            message: "I loved the creativity and attention to detail. The whole experience was seamless and enjoyable!",
            image: "https://via.placeholder.com/100",
        },
    ];

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="container mx-auto">
            <div className="my-8">
                <h2 ref={textRef} className="font-bold text-5xl md:text-7xl lg:text-8xl overflow-hidden mt-4">
                    <span className="inline-block reveal-text mr-3">Radiant Future</span>
                </h2>
            </div>

            {/* banner details */}
            <div className="w-full max-w-7xl mx-auto h-[500px] relative overflow-hidden">
                {/* Fixed Overlay Content */}
                <div className="absolute top-0 left-0 w-full z-10 p-6"></div>

                {/* Moving Image */}
                <div
                    className="absolute top-0 left-0 w-full h-full transition-transform duration-100 ease-out"
                    style={{
                        transform: `translateY(${move}px)`,
                    }}
                >
                    <Image
                        src="/assets/img/branding/radiant future/branding mockup/logo mockup/logo.png"
                        alt="about-img-1"
                        className="w-full h-full object-cover"
                        layout="fill"
                        priority
                    />
                </div>
            </div>

            {/* project description */}
            <div className="my-16">
                <h2 className="text-5xl font-bold my-8 ">Project <span className="text-[#FF0101]">Description</span></h2>
                <p className="my-6 text-2xl font-semibold">Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.</p>
                <p className="my-6 text-2xl font-semibold">
                    our website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.
                </p>
            </div>

            {/* color typography */}
            <div className="my-20">
                <h2 className="text-5xl font-bold my-8  text-[#FF0101]">Color/Typography</h2>
                <h5 className="font-bold text-2xl">Primary font:</h5>
                <p className="my-2">https://fonts.adobe.com/fonts/retiro</p>

                <div className="grid grid-cols-1 place-items-center w-full">
                    <h1 className="text-[18vh] font-extrabold"><span className="text-[#FF0101]">Retiro</span></h1>
                    <div className="flex justify-around mt-2 w-full">
                        <p>Regular</p>
                        <p className="font-bold">Bold</p>
                    </div>

                    <div className="mt-8 grid grid-cols-4 gap-10 text-center">
                        <p className="w-50 h-50 px-10 py-20 text-gray-800 rounded-3xl border-0 bg-[#ebb898]">#ebb898</p>
                        <p className="w-50 h-50 px-10 py-20 text-white rounded-3xl border-0 bg-[#3b271e]">#3b271e</p>
                        <p className="w-50 h-50 px-10 py-20 text-white rounded-3xl border-0 bg-[#0C0C0C]">#0C0C0C</p>
                        <p className="w-50 h-50 px-10 py-20 text-gray-800 rounded-3xl border border-gray-700 bg-[#FFFFFF]">#FFFFFF</p>
                    </div>
                </div>
            </div>

            {/* project mockup */}
            <div className="mt-16 ">
                <h2 className="text-5xl font-bold my-16">Project <span className="text-[#FF0101]">Mockup</span></h2>
                <div className="grid grid-cols-2 gap-8">
                    <img className="row-span-1 w-full h-[450px] object-cover rounded-2xl"
                        src="/assets/img/branding/radiant future/branding mockup/business card mockup/business-card.png"
                        alt=""
                    />
                    <img className="row-span-2 w-full h-[720px] object-cover rounded-2xl"
                        src="/assets/img/branding/radiant future/branding mockup/flyer mockup/flyer (2).png"
                        alt=""
                    />
                    <img className="row-span-2 w-full h-[720px] object-cover rounded-2xl"
                        src="/assets/img/branding/radiant future/branding mockup/stationary mockup/radiant future.png"
                        alt=""
                    />
                    <img className="row-span-1 w-full h-[450px] object-cover rounded-2xl"
                        src="/assets/img/branding/radiant future/branding mockup/evelope mockup/envelope.png"
                        alt=""
                    />
                </div>
            </div>




            {/* process step */}
            <div className="bg-black rounded-2xl my-10 text-white p-8">
                <h2 className="text-3xl font-semibold mb-6">Our <span className="text-[#FF0101]">Process</span></h2>
                <div className="grid grid-cols-2 gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className="flex items-center">
                            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-800">
                                {step.number}
                            </div>
                            <div className="ml-4 text-lg font-medium">{step.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* testimonial */}

        </div>
    );
};

export default RadiantFuture;
