"use client";

import gsap from "gsap";
import Image from "next/image";
import {  useEffect, useRef } from "react";

const BetterHand = () => {
    const textRef = useRef(null);


    // text animation
    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { x: "-100%", opacity: 0 },
            { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
        );
    }, []);


    // process step
    const steps = [
        { number: "01", title: "Consultation" },
        { number: "02", title: "Planning & Concept Development" },
        { number: "03", title: "Photography Session" },
        { number: "04", title: "Editing & Retouching" },
        { number: "05", title: "Review & Revisions" },
        { number: "06", title: "Delivery" },
    ];





    return (
        <div className="container mx-auto">
            <div className="my-8">
                <h2 ref={textRef} className="font-bold text-5xl md:text-7xl lg:text-8xl overflow-hidden mt-4">
                    <span className="inline-block reveal-text mr-3">Better Hand</span>
                </h2>
            </div>

            {/* banner details */}
            <div className="w-full max-w-7xl mx-auto h-[500px] relative overflow-hidden">
                {/* Fixed Overlay Content */}
                <div className="absolute top-0 left-0 w-full z-10 p-6"></div>

                {/* Moving Image */}
                <div
                    className="absolute top-0 left-0 w-full h-full transition-transform duration-100 ease-out"
                >
                    <Image
                        src="/assets/img/branding/betterhand community/branding mockup/logo mockup/logo.png"
                        alt="better-hand-logo"
                        className="w-full h-full object-cover"
                        layout="fill"
                        priority
                    />
                </div>
            </div>

            {/* project description */}
            <div className="my-16">
                <h2 className="text-5xl font-bold my-8 ">Project <span className="text-[#FF0101]">Description</span></h2>
                <p className="my-6 text-2xl font-semibold">At the Better Hand Community, our approach is centered around providing exceptional care for each client. We believe that every individual deserves to receive compassionate care that promotes independence, dignity, and a high quality of life.</p>
                <p className="my-6 text-2xl font-semibold">
                    To achieve this, we take a client-centered approach, where we collaborate with our clients, their families, and healthcare professionals to create a personalized care plan that meets their specific needs and preferences.
                </p>
                <p className="my-6 text-2xl font-semibold">
                    Our team of experienced and dedicated caregivers are trained to deliver care with empathy, respect, and professionalism while ensuring the safety and comfort of our clients. We believe that clear and consistent communication is key to building trust and establishing long-lasting relationships.
                </p>
            </div>

            {/* color typography */}
            <div className="my-20">
                <h2 className="text-5xl font-bold my-8  text-[#FF0101]">Color/Typography</h2>
                <h5 className="font-bold text-2xl">Primary font:</h5>
                <p className="my-2">https://fonts.adobe.com/fonts/brandon-grotesque</p>

                <div className="grid grid-cols-1 place-items-center w-full">
                    <h1 className="text-[18vh] font-extrabold">Brandon <span className="text-[#FF0101]">Grotesque</span></h1>
                    <div className="flex justify-around mt-2 w-full">
                        <p>Regular</p>
                        <p className="font-bold">Bold</p>
                    </div>

                    <div className="mt-8 grid grid-cols-4 gap-10">
                        <p className="w-50 h-50 rounded-3xl border-0 bg-[#48B7AF]"></p>
                        <p className="w-50 h-50 rounded-3xl border-0 bg-[#0C0C0C]"></p>
                        <p className="w-50 h-50 rounded-3xl border-0 bg-[#F02870]"></p>
                        <p className="w-50 h-50 rounded-3xl border border-gray-700 bg-white"></p>
                    </div>
                </div>
            </div>

            {/* project mockup */}
            <div className="mt-16 ">
                <h2 className="text-5xl font-bold my-16">Project <span className="text-[#FF0101]">Mockup</span></h2>
                <div className="grid grid-cols-2 gap-8">
                    <img className="row-span-1 w-full h-[450px] object-cover rounded-2xl"
                        src="/assets/img/branding/betterhand community/branding mockup/envelope mockup/envelope@2x.png"
                        alt=""
                    />
                    <img className="row-span-2 w-full h-[720px] object-cover rounded-2xl"
                        src="/assets/img/branding/betterhand community/branding mockup/flyer mockup/flyer1.png"
                        alt=""
                    />
                    <img className="row-span-2 w-full h-[720px] object-cover rounded-2xl"
                        src="/assets/img/branding/betterhand community/branding mockup/t shirt mockup/Front.jpg"
                        alt=""
                    />
                    <img className="row-span-1 w-full h-[450px] object-cover rounded-2xl"
                        src="/assets/img/branding/betterhand community/branding mockup/borchure mockup/borchure.png"
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

export default BetterHand;
