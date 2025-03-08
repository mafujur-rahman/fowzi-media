"use client"; // Ensures this component runs only on the client side

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";

// ✅ Disable SSR for GSAP compatibility
const GallerySlider = dynamic(() => Promise.resolve(GallerySliderComponent), { ssr: false });

// ✅ Use relative paths for images inside `public/`
const shape_1 = "/gal-shape-1.png";
const shape_d_1 = "/gal-shape-dark-1.png";
const shape_2 = "/gal-shape-2.png";
const shape_d_2 = "/gal-shape-dark-2.png";
const g_1 = "/gal-1.jpg";
const g_2 = "/gal-2.jpg";
const g_3 = "/gal-3.jpg";
const g_4 = "/gal-4.jpg";
const g_5 = "/gal-5.jpg";

const gallery_images = [g_1, g_2, g_3, g_4, g_5, g_3, g_1, g_2, g_3, g_4, g_5, g_3];

function GallerySliderComponent() {
  const ringRef = useRef(null);
  const draggerRef = useRef(null);
  const sliderRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures component only renders on the client

    if (typeof window !== "undefined") {
      gsap.registerPlugin(Draggable);

      const ring = ringRef.current;
      const dragger = draggerRef.current;
      const images = Array.from(sliderRef.current?.querySelectorAll(".carousel-image") || []);

      // Set initial GSAP properties
      gsap.set(ring, { rotationY: 180 });
      gsap.set(images, {
        rotateY: (i) => i * -18,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backfaceVisibility: "hidden",
      });

      // Draggable functionality
      let xPos = 0;
      Draggable.create(dragger, {
        type: "x",
        bounds: sliderRef.current,
        onDragStart: (e) => {
          if (e.touches) e.clientX = e.touches[0].clientX;
          xPos = Math.round(e.clientX);
        },
        onDrag: (e) => {
          if (e.touches) e.clientX = e.touches[0].clientX;

          gsap.to(ring, {
            rotationY: "-=" + (Math.round(e.clientX) - xPos) / 2,
            onUpdate: () => {
              gsap.set(images, {
                backgroundPosition: (i) => getBgPos(i, ring),
              });
            },
          });

          xPos = Math.round(e.clientX);
        },
      });

      // Function to calculate background position for parallax effect
      const getBgPos = (i, ring) => {
        return (
          (-gsap.utils.wrap(0, 360, gsap.getProperty(ring, "rotationY") - 180 - i * 18) / 360) * 400 +
          "px 0px"
        );
      };
    }
  }, []);

  if (!isClient) return null; // Avoid hydration issues by ensuring rendering only after mount

  return (
    <div className="tp-gallery-area fix p-relative">
      <div className="tp-gallery-shape-1">
        <Image src={shape_1} alt="shape" width={500} height={300} className="object-contain" />
        <Image src={shape_d_1} alt="shape" width={500} height={300} className="object-contain" />
      </div>
      <div className="tp-gallery-shape-2">
        <Image src={shape_2} alt="shape" width={500} height={300} className="object-contain" />
        <Image src={shape_d_2} alt="shape" width={500} height={300} className="object-contain" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div ref={ringRef} className="carousel-slider">
              <div ref={sliderRef} className="carousel-images">
                {gallery_images.map((image, i) => (
                  <div key={i} className="carousel-image">
                    <Image src={image} alt={`gallery-${i}`} width={500} height={300} className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div ref={draggerRef} className="dragger"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySlider;
