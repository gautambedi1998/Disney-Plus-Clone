"use client";
import React, { useEffect, useRef, useState } from "react";
import { bannerImages } from "../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Carousel = () => {
  const bannerRef = useRef<HTMLDivElement[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [bannerImage, setBannerImage] = useState({
    bannerId: 0,
    isLastBanner: false,
  });

  // useGSAP(() =>
  //   gsap.to(sliderRef.current, {
  //     x: `-${100 * 1}%`,
  //     duration: 2,
  //     ease: "power2.inOut",
  //   })
  // );

  return (
    <div
      className="flex flex-row"
      style={{ width: `${bannerImages.length * 100}%` }}
    >
      {bannerImages.map((element, i) => (
        <div key={element.id} id="slider" className="w-[80vw]">
          {element.id}
          <img src={element.source} className="w-full h-full object-cover" />
          <span className="absolute h-full w-full rounded-full caret-amber-200 "></span>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
