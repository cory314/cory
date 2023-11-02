"use client";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";


const Info = () => {
    const images = ["/DSCN0115.JPG", "/boat.jpg", "/DSCN0186.JPG", "/DSCN0133.JPG"];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [images]);
  
    return (
      <section id="adventures"className="bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 flex flex-col justify-start items-center text-white relative mx-auto pt-20 pb-10">
        <div className="flex flex-col md:flex-row p-4 pt-20 font-georgia">
          <div className="relative w-full md:w-[500px] max-w-full h-[384px] flex-shrink-0 rounded-md overflow-hidden mt-8 md:mt-0">
            <Image src={images[currentIndex]} alt="Service Image" layout="fill" objectFit="cover" className="absolute top-0 left-0" />
          </div>
  
          <div className="flex-1 p-4 md:p-8 flex flex-col justify-center">
            <h2 className="text-gray-800 text-2xl md:text-4xl font-bold mb-4 text-center">Adventures:</h2>
            <ul className="text-center space-y-2">
              <li className="text-gray-800 text-lg md:text-xl"><span className="font-medium">Sunset Cruises:</span> $129.95 per person (up to 6 people)</li>
              <li className="text-gray-800 text-lg md:text-xl"><span className="font-medium">Snorkel Trips to Sombrero Reef:</span> Contact for Pricing (up to 6 people)</li>
              <li className="text-gray-800 text-lg md:text-xl"><span className="font-medium">Choose your own Adventure:</span> Contact for Pricing (up to 6 people)</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
export default Info;
