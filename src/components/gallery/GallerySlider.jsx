import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./GallerySlider.css"

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
    <div className="relative overflow-hidden flex-wrap w-full h-auto ">
      {/* Fixed Shape Image on Top */}
      <div className="absolute top-0 left-0 w-full z-50 flex justify-center items-center pointer-events-none">
        <img
          className="bg-no-repeat w-full h-auto"
          src="/assets/img/gallery/gal-shape-1.png"
          alt="Decorative Shape"
        />
      </div>

      {/* Scrolling Image Gallery */}
      <div>
        <div ref={sliderRef} className="flex w-fit h-full bg-cover">
          {/* Gallery Images */}
          <img src="/assets/img/gallery/slide-1.jpg" alt="Slide 1" className="gallery-image" />
          <img src="/assets/img/gallery/slide-2.png" alt="Slide 2" className="gallery-image" />
          <img src="/assets/img/gallery/slide-3.png" alt="Slide 3" className="gallery-image" />
          <img src="/assets/img/gallery/slide-4.jpeg" alt="Slide 4" className="gallery-image" />
          <img src="/assets/img/gallery/slide-5.jpg" alt="Slide 5" className="gallery-image" />
        </div>
      </div>

      {/* Fixed Shape Image on Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-50 flex justify-center items-center pointer-events-none">
        <img
          className="bg-no-repeat w-full h-auto"
          src="/assets/img/gallery/gal-shape-2.png"
          alt="Decorative Shape Bottom"
        />
      </div>

    </div>
  );
};

export default GallerySlider;
