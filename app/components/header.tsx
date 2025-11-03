"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "@/app/Firebase/firebase";
import { HiMenu, HiX } from "react-icons/hi";

import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignoutState,
} from "../features/user/userSlice";
import { GiToken } from "react-icons/gi";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    const authChange = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        router.push("./home");
      } else {
        dispatch(setSignoutState());
        router.push("./");
      }
    });
    return () => {
      console.log("---------->" + userName);
      authChange();
    };
  }, [dispatch]);

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-[#090b13] h-18 flex flex-row justify-between items-center  px-5 md:px-10">
      <img className="w-25" src={"/images/logo.svg"} alt="Disney +" />
      {userName ? <Navigation /> : <LoginButton />}
    </div>
  );
};

export default Header;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth).then(() => {
        console.log("Signout Successful");
      });
    } catch (error) {
      return "Error in Handle Logout" + error;
    }
  };

  return (
    <nav>
      <div className="hidden gap-20 lg:flex flex-row">
        <Link className="flex flex-row gap-1.5 items-center" href="/home">
          <img className="w-8" src="/images/home-icon.svg" alt="HOME" />
          <span className="text-[1.2rem] tracking-wider">HOME</span>
        </Link>
        <Link
          className="flex flex-row align-middle gap-1.5 justify-center items-center"
          href="/search"
        >
          <img className="w-8" src="/images/search-icon.svg" alt="SEARCH" />
          <span className="text-[1.2rem] tracking-wider">SEARCH</span>
        </Link>
        <Link
          className="flex flex-row align-middle gap-1.5 justify-center items-center"
          href="/watchlist"
        >
          <img
            className="w-8"
            src="/images/watchlist-icon.svg"
            alt="WATCHLIST"
          />
          <span className="text-[1.2rem] tracking-wider">WATCHLIST</span>
        </Link>
        <Link
          className="flex flex-row align-middle gap-1.5 justify-center items-center"
          href="/movies"
        >
          <img className="w-8" src="/images/movie-icon.svg" alt="MOVIES" />
          <span className="text-[1.2rem] tracking-wider">MOVIES</span>
        </Link>
        <Link
          className="flex flex-row align-middle gap-1.5 justify-center items-center"
          href="/series"
        >
          <img className="w-8" src="/images/series-icon.svg" alt="SERIES" />
          <span className="text-[1.2rem] tracking-wider">SERIES</span>
        </Link>
        <button
          className="px-12 py-3 border-2 border-white hover:bg-white hover:text-[#040714] hover:cursor-pointer text-[1.2rem] tracking-wider"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </div>

      <div className="flex flex-col h-full w-full lg:hidden">
        <button
          className="absolute top-4 right-4 z-50"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
        {isOpen && (
          <div className="fixed inset-x-0 mt-8 p-5 z-10 flex flex-col items-center justify-center gap-6 bg-[#090b13] ">
            <Link className="flex flex-row gap-1.5 items-center" href="/home">
              <img className="w-8" src="/images/home-icon.svg" alt="HOME" />
              <span className="text-[1.2rem] tracking-wider">HOME</span>
            </Link>
            <Link
              className="flex flex-row align-middle gap-1.5 justify-center items-center"
              href="/search"
            >
              <img className="w-8" src="/images/search-icon.svg" alt="SEARCH" />
              <span className="text-[1.2rem] tracking-wider">SEARCH</span>
            </Link>
            <Link
              className="flex flex-row align-middle gap-1.5 justify-center items-center"
              href="/watchlist"
            >
              <img
                className="w-8"
                src="/images/watchlist-icon.svg"
                alt="WATCHLIST"
              />
              <span className="text-[1.2rem] tracking-wider">WATCHLIST</span>
            </Link>
            <Link
              className="flex flex-row align-middle gap-1.5 justify-center items-center"
              href="/movies"
            >
              <img className="w-8" src="/images/movie-icon.svg" alt="MOVIES" />
              <span className="text-[1.2rem] tracking-wider">MOVIES</span>
            </Link>
            <Link
              className="flex flex-row align-middle gap-1.5 justify-center items-center"
              href="/series"
            >
              <img className="w-8" src="/images/series-icon.svg" alt="SERIES" />
              <span className="text-[1.2rem] tracking-wider">SERIES</span>
            </Link>
            <button
              className="px-12 py-3 border-2 border-white hover:bg-white hover:text-[#040714] hover:cursor-pointer text-[1.2rem] tracking-wider"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

const LoginButton = () => {
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      console.log(token);

      await fetch("/api/access_token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        credentials: "include",
      });
    } catch (error) {
      return "Error in Handle Login" + error;
    }
  };
  return (
    <button
      onClick={() => handleLogin()}
      className="px-12 py-3 border-2 border-white hover:bg-white hover:text-[#040714] hover:cursor-pointer text-[1.2rem] tracking-wider"
    >
      Login
    </button>
  );
};
