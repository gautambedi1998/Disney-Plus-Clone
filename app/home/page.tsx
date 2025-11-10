import React from "react";
import Carousel from "../components/carousel";

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-[url('/images/home-background.png')] bg-cover bg-no-repeat pt-25">
      <Carousel />
    </div>
  );
};

export default HomePage;
