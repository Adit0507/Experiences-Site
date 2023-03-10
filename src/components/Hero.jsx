import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg"
        alt=""
      />
      <div className="bg-black/20 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
            est, id consequuntur sequi ipsum vitae sit non exercitationem.
          </p>
          <button className="text-xl bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
