import React from "react";
import bannerImg from "../../src/assets/images/hero.png"
const Banner = () => {
  return (
    <div className="space-y-8 pt-13">
      <h2 className="text-6xl font-bold text-center">
        We Build <br /> <span className="text-purple-500">Productive</span> Apps
      </h2>
      <p className="text-center text-gray-600">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas <br /> into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-2">
        <button className="btn padding-4">Play Store</button>
        <button className="btn padding-4">App Store</button>
      </div>
      <img className="mx-auto" src={bannerImg} alt="banner image" />
    </div>
  );
};

export default Banner;
