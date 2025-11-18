import React from "react";

const Viewers = () => {
  return (
    <div className="mt-10 pl-10 pr-10 flex flex-col md:flex-row  gap-8 ">
      <div className="aspect-[16/9] w-full lg:aspect-[16/9] border-4 border-gray-600 rounded-2xl cursor-pointer overflow-hidden relative shadow-2xl hover:border-white hover:scale-105 hover:transition-all duration-300 ease-in-out group md:py-0 ">
        <img
          className=" absolute w-full h-full inset-0 z-10 object-cover"
          src="/images/viewers-disney.png"
          alt=""
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          className="absolute inset-0  top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out w-full h-full object-cover bg-cover z-0"
        >
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div className=" aspect-[16/9] w-full  lg:aspect-[16/9] border-4 border-gray-600 rounded-2xl cursor-pointer overflow-hidden relative shadow-2xl hover:border-white hover:scale-105 hover:transition-all duration-300 ease-in-out group md:py-0 ">
        <img
          className=" absolute w-full h-full inset-0 z-10 object-cover"
          src="/images/viewers-pixar.png"
          alt=""
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          className="absolute inset-0  top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out w-full h-full object-cover bg-cover z-0"
        >
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="aspect-[16/9] w-full  lg:aspect-[16/9] border-4 border-gray-600 rounded-2xl cursor-pointer overflow-hidden relative shadow-2xl hover:border-white hover:scale-105 hover:transition-all duration-300 ease-in-out group md:py-0 ">
        <img
          className=" absolute w-full h-full inset-0 z-10 object-cover"
          src="/images/viewers-marvel.png"
          alt=""
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          className="absolute inset-0  top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out w-full h-full object-cover bg-cover z-0"
        >
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="aspect-[16/9] w-full  lg:aspect-[16/9] border-4 border-gray-600 rounded-2xl cursor-pointer overflow-hidden relative shadow-2xl hover:border-white hover:scale-105 hover:transition-all duration-300 ease-in-out group md:py-0 ">
        <img
          className=" absolute w-full h-full inset-0 z-10 object-cover"
          src="/images/viewers-starwars.png"
          alt=""
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          className="absolute inset-0  top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out w-full h-full object-cover bg-cover z-0"
        >
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="aspect-[16/9] w-full  lg:aspect-[16/9] border-4 border-gray-600 rounded-2xl cursor-pointer overflow-hidden relative shadow-2xl hover:border-white hover:scale-105 hover:transition-all duration-300 ease-in-out group md:py-0 ">
        <img
          className=" absolute w-full h-full inset-0 z-10 object-cover"
          src="/images/viewers-national.png"
          alt=""
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          className="absolute inset-0  top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out w-full h-full object-cover bg-cover z-0"
        >
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Viewers;
