"use client";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-[#090b13] h-18 flex flex-row justify-between items-center  px-5 md:px-10">
      <img className="w-25" src={"/images/logo.svg"} alt="Disney +" />
      <Navigation />
      <LoginButton />
    </div>
  );
};

export default Header;

const Navigation = () => {
  const handleLogin = () => {};

  return (
    <nav className="flex gap-6">
      <Link className="flex flex-row align-middle gap-1.5" href="/">
        <img src="/images/home-icon.svg" alt="HOME" />
        <span>HOME</span>
      </Link>
      <Link href="/search">
        <img src="/images/search-icon.svg" alt="SEARCH" />
        <span>SEARCH</span>
      </Link>
      <Link href="/watchlist">
        <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
        <span>WATCHLIST</span>
      </Link>
      <Link href="/movies">
        <img src="/images/movie-icon.svg" alt="MOVIES" />
        <span>MOVIES</span>
      </Link>
      <Link href="/series">
        <img src="/images/series-icon.svg" alt="SERIES" />
        <span>SERIES</span>
      </Link>
    </nav>
  );
};

const LoginButton = () => {
  return (
    <button className="px-12 py-3 border-2 border-white hover:bg-white hover:text-[#040714] hover:cursor-pointer">
      Login
    </button>
  );
};
