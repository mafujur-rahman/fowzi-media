import { TiArrowRightThick } from 'react-icons/ti';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import '../WhatWeDo/rotateImage.css';

const TalkSection = () => {
  useEffect(() => {
    // Function to split text into individual characters and wrap them in spans
    const splitText = (element) => {
      const text = element.innerText;
      // Wrap each character in a span with the 'char' class
      element.innerHTML = text.split('').map(char => `<span class="char">${char}</span>`).join('');
    };

    // Apply the splitText function to the specific text elements
    const elements = document.querySelectorAll('.wave-bounce');
    elements.forEach((element) => {
      splitText(element);
    });

    // Apply the GSAP animation for wave bounce on all elements with the class '.char'
    gsap.to('.char', {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: 'power1.inOut',
      stagger: 0.1, // Stagger the animation to create the wave effect
    });

    // Gradient color change every 3 seconds for gradient-text elements
    const gradientColors = ["#FFFF", "#FF0101"];
    let index = 0;
    setInterval(() => {
      gsap.to(".gradient-text", {
        color: gradientColors[index],
        duration: 1,
      });
      index = (index + 1) % gradientColors.length;
    }, 3000);

  }, []);

  return (
    <div className="bg-[#1E1E1E] text-white py-16 px-8  w-full">
      <div className="max-w-6xl mx-auto">
        {/* Main heading with wave bouncing animation */}
        <h1
          className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-4 flex gap-5 items-center  wave-bounce gradient-text"
          style={{ fontFamily: 'Glacial Indifference' }}
        >
          Let's Talk
          <img
            className="rotate-image"
            style={{ width: "30px", height: "30px" }}
            src="/assets/img/logo/icon 1.png"
            alt=""
          />
        </h1>

        {/* "about it" under Let's Talk */}
        <div className='flex gap-8'>

          {/* Get in Touch Button */}
          <div className="relative md:flex items-center justify-center">
            <button
              className="relative bg-[#FF0101] text-white p-6 sm:p-8 h-28 md:h-32 w-28 md:w-32 text-xl sm:text-2xl rounded-2xl flex flex-col items-center justify-center gap-2 border border-[#1E1E1E] shadow-lg transform rotate-45"
              style={{
                fontFamily: "Glacial Indifference",
              }}
            >
              <div className="transform -rotate-45 flex flex-col items-center">
                Get in <br /> Touch <br />
                <TiArrowRightThick className="text-3xl" />
              </div>
            </button>
          </div>
          <div>
            <h2
              className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 wave-bounce gradient-text"
              style={{ fontFamily: 'Glacial Indifference' }}
            >
              about it
            </h2>
            <p
              className=" text-lg sm:text-xl"
              style={{ fontFamily: 'Glacial Indifference' }}
            >
              We will collaborate to find the right answer and bring progress <br />
              to your business and to the world.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TalkSection;
