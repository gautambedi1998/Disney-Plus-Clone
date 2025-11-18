import React from "react";
import Carousel from "../components/carousel";
import Viewers from "../components/viewers";

const HomePage = () => {
  return (
    <div className=" w-screen h-screen bg-[url('/images/home-background.png')] bg-cover bg-no-repeat pt-18 mx-auto overflow-y-auto">
      <Carousel />
      <Viewers />
      {/* <div className="w-3xl h-[100%]"> dfaetgfzdg</div> */}
    </div>
  );
};

export default HomePage;
