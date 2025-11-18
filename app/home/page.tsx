import React from "react";
import Carousel from "../components/carousel";
import Viewers from "../components/viewers";
import Recommendations from "../components/recommendations";

const HomePage = () => {
  return (
    <div className=" w-screen h-screen bg-[url('/images/home-background.png')] bg-cover bg-no-repeat pt-18 mx-auto overflow-y-auto">
      <Carousel />
      <Viewers />
      <Recommendations />
    </div>
  );
};

export default HomePage;
