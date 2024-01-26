import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-200 shadow-md py-5 ">
      <div className="container grid grid-cols-3 relative">
        <Link href="/" className="relative flex items-center h-10 my-auto">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            fill
            objectFit="contain"
            objectPosition="left"
            alt="logo-img"
          />
        </Link>
        <Searchbar />
        <Navbar />
      </div>
    </header>
  );
}
