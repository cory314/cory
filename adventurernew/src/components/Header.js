"use client";

import { FaFacebookF, FaEnvelope, FaBars, FaPhone } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  //add image array state for background

  return (
    <div className="relative h-[600px]">
      {/* Background */}
      <Image
        className="absolute inset-0 opacity-100 object-fit"
        src="/DSCN0133.JPG"
        alt="Background Image"
        layout="fill"
      />

      {/* Logo and Text */}
      <div className="absolute z-1 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-center text-6xl text-lightblue text-bold italic text-shadow">
          Adventurer Florida
        </h1>
        <p className="text-lg text-lightblue text-shadow">Marathon, FL</p>
      </div>

      {/* Icons on the right */}
      <div className="absolute top-4 right-4 z-20 flex space-x-4">
        <a
          href="https://www.facebook.com/adventurer.fla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-2xl text-white" />
        </a>
        <a href="mailto:bookadvfla@outlook.com">
          <FaEnvelope className="text-2xl text-white" />
        </a>
        <a href="tel:6018504357">
          <FaPhone className="text-2xl text-white" />
        </a>
      </div>

      {/* Navigation on the left */}

      <div className="absolute top-4 left-4 z-20">
        <nav className="hidden md:flex space-x-4 text-white">
          <Link className="text-white" href="#adventures" passHref>
            Pricing
          </Link>
          <Link href="mailto:bookadvfla@outlook.com" passHref>
            Booking
          </Link>
          <Link href="#about" passHref>
            About Us
          </Link>
        </nav>
        {/* Mobile Nav */}
        <div className="md:hidden">
          <button onClick={() => setMobileNavOpen(!isMobileNavOpen)}>
            <FaBars className="text-2xl text-white" /> {/* Hamburger Icon */}
          </button>
          {isMobileNavOpen && (
            <div className="bg-lightblue absolute top-full left-0 w-full">
              <nav className="flex flex-col">
                <Link href="#adventures" passHref>
                  Pricing
                </Link>
                <Link href="mailto:bookadvfla@outlook.com" passHref>
                  Booking
                </Link>
                <Link href="#about" passHref>
                  About Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
