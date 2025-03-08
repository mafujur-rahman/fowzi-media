import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GallerySlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const images = Array.from(slider.children);

    if (images.length === 0) return;

    // Duplicate images dynamically to create an infinite loop
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      slider.appendChild(clone);
    });

    gsap.to(slider, {
      x: "-50%",
      duration: 50,
      ease: "linear",
      repeat: -1,
    });

  }, []);

  return (
    <div className="relative overflow-hidden w-full h-80 min-h-screen">
      {/* Fixed Shape Image on Top */}
      <div className="absolute top-0 left-0 w-full z-50 flex justify-center items-center pointer-events-none">
        <img 
          className="bg-no-repeat w-full h-auto max-w-[350px] sm:max-w-[300px] md:max-w-full" 
          src="/assets/img/home-03/gallery/gal-shape-1.png" 
          alt="Decorative Shape" 
        />
      </div>

      {/* Scrolling Image Gallery */}
      <div>
        <div ref={sliderRef} className="flex w-max bg-cover">
          {/* Gallery Images */}
          <img src="/assets/img/home-03/gallery/gal-1.jpg" alt="Slide 1" className="w-1/4 h-auto mx-2" />
          <img src="/assets/img/home-03/gallery/gal-2.jpg" alt="Slide 2" className="w-1/4 h-auto mx-2" />
          <img src="/assets/img/home-03/gallery/gal-3.jpg" alt="Slide 3" className="w-1/4 h-auto mx-2" />
          <img src="/assets/img/home-03/gallery/gal-4.jpg" alt="Slide 4" className="w-1/4 h-auto mx-2" />
          <img src="/assets/img/home-03/gallery/gal-5.jpg" alt="Slide 5" className="w-1/4 h-auto mx-2" />
        </div>
      </div>

      {/* Fixed Shape Image on Bottom */}
      <div className="absolute bottom-42 left-0 w-full z-50 flex justify-center items-center pointer-events-none">
        <img 
          className="bg-no-repeat w-full h-auto max-w-[350px] sm:max-w-[300px] md:max-w-full" 
          src="/assets/img/home-03/gallery/gal-shape-2.png" 
          alt="Decorative Shape" 
        />
      </div>
    </div>
  );
};

export default GallerySlider;
