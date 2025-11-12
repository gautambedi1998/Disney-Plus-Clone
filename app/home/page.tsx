import React from "react";
import Carousel from "../components/carousel";
import Viewers from "../components/viewers";

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-[url('/images/home-background.png')] bg-cover bg-no-repeat pt-18">
      <Carousel />
      <Viewers />
    </div>
  );
};

export default HomePage;
