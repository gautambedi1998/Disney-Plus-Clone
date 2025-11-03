"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "@/app/Firebase/firebase";

import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignoutState,
} from "../features/user/userSlice";

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
    <nav className="flex gap-6">
      <Link className="flex flex-row align-middle gap-1.5" href="/home">
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
      <button
        className="px-12 py-3 border-2 border-white hover:bg-white hover:text-[#040714] hover:cursor-pointer"
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </nav>
  );
};

const LoginButton = () => {
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          console.log(token);
          const user = result.user;
        })
        .catch((error) => {
          console.log("Error in handleLogin" + error);
        });
    } catch (error) {
      return "Error in Handle Login" + error;
    }
  };
  return (
    <button
      onClick={() => handleLogin()}
      className="px-12 py-3 border-2 border-white hover:bg-white hover:text-[#040714] hover:cursor-pointer"
    >
      Login
    </button>
  );
};
