"use client";
import React, { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const bannerRef = useRef([]);

  const [bannerImage, setBannerImage] = useState({
    bannerId: 0,
    isLastBanner: false,
  });

  return (
    <div className="flex flex-row ">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default Carousel;
