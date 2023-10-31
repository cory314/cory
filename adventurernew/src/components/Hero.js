/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Hero = () => {
  return (
    <section id="about" className=" bg-gradient-to-b from-blue-200 via-blue-400 to-blue-500 flex flex-col justify-start items-center text-white relative pb-20">
      
      <div className=" flex flex-col md:flex-row p-4 pt-20 font-georgia">
        <div className=" md:w-3/6 mb-8 md:mb-0 pr-4">
          <h1 className="text-gray-800 text-4xl md:text-5xl font-extrabold mb-16 text-center">
            Welcome Aboard!
          </h1>
          <p className="text-gray-800 text-lg text-center leading-loose">
            Ahoy, ocean adventurers! Set sail with us on a breathtaking voyage
            off the coast of beautiful Marathon, Florida. Led by our Coast
            Guard-certified captain, we offer an array of sailing experiences
            you'll treasure for a lifetime. Discover the mesmerizing underwater
            world of Sombrero Reef, one of Florida's premier snorkeling
            destinations. Or take in the awe-inspiring hues of a Marathon sunset
            on our relaxing evening cruise. Special events, weddings, engagements? 
            Let us know how we can help! We're committed to making your time
            with us a safe, thrilling, and truly unforgettable adventure. Hop
            aboard and let's make some waves together!

          </p>
        </div>
        <div className=" w-full md:w-3/6 h-60 md:h-auto relative">
          {" "}
          {/* Explicitly set width and height for mobile screens */}
          <Image
            src="/logo.png" // Update with your image path
            alt="Description of your image"
            layout="fill" // This will make the image responsive
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
