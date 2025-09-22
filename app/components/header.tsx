import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-[#090b13] h-18 flex flex-row justify-between items-center  px-5 md:px-10">
      <img className="w-25" src={"/images/logo.svg"} alt="" />
    </div>
  );
};

export default Header;
