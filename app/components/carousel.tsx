"use client";
import React, { useEffect, useRef, useState } from "react";
import { bannerImages } from "../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Carousel = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideWidth = 100; // vw width per slide
  const gap = 4; // vw gap between slides
  const totalSlides = bannerImages.length;
  const transitionDuration = 2; // seconds
  const holdDuration = 1; // seconds slide stays visible

  const goToSlide = (index: number) => {
    gsap.to("#slider", {
      x: `-${index * slideWidth}vw`,
      duration: transitionDuration,
      ease: "power2.inOut",
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      // onRepeat: () => setCurrentIndex(0),
      onComplete: () => {
        setCurrentIndex(0);
      },
    });

    for (let i = 0; i < totalSlides; i++) {
      tl.to("#slider", {
        x: `-${i * slideWidth}vw`,
        duration: transitionDuration,
        // delay: holdDuration,
        ease: "power2.inOut",
        onStart: () => setCurrentIndex(i),
      });
    }
  });

  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex flex-row gap-4"
        style={{ width: `${bannerImages.length * 100}%` }}
        id="slider"
      >
        {bannerImages.map((element, i) => (
          <>
            <div
              key={element.id}
              className="w-[100vw] h-[22vw] shadow-2xl pt-4 pb-4"
            >
              <img
                src={element.source}
                className="w-full h-full object-cover "
                alt="banner"
              />
            </div>
          </>
        ))}
      </div>
      <div className="flex flex-row a justify-center">
        {bannerImages.map((_, i) => (
          <div
            key={i}
            className={`relative mx-2 w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-gray-400" : "bg-gray-100"
            }`}
            onClick={() => goToSlide(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
