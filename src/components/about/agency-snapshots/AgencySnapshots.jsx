"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AgencySnapshots = () => {
  const stats = [
    { number: 511, label: 'Project Challenge' },
    { number: 10.5, label: 'Years of Experience' },
    { number: 5, label: '5 Star Google Review' },
    { number: 14153, label: 'Cups of Coffee' },
  ];

  const numberRefs = useRef([]);

  useEffect(() => {
    numberRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: stats[index].number,
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ease: 'power1.out',
          snap: { innerText: 1 },
          onUpdate: function () {
            if (stats[index].number % 1 !== 0) {
              // If decimal
              el.innerText = parseFloat(el.innerText).toFixed(1);
            } else {
              el.innerText = Math.floor(el.innerText);
            }
          },
          onComplete: function () {
            // Append "+" sign after animation completes
            if (!el.innerText.includes('+')) {
              el.innerText = `${el.innerText}+`;
            }
          },
        }
      );
    });
  }, [stats]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm uppercase text-[#FF0101] mb-4">Fun Facts</h3>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Agency <br /> Snap<span className='text-[#FF0101]'>shots</span>
            </h2>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 w-full max-w-2xl">
            {stats.map((item, index) => (
              <div key={index} className=" border-b border-gray-300 pt-6">
                <h3
                  ref={(el) => (numberRefs.current[index] = el)}
                  className="text-5xl font-extrabold text-gray-900"
                >
                  0
                </h3>
                <p className="mt-2 text-gray-600 uppercase text-sm tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencySnapshots;
