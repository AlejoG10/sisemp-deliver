import React from "react";
// import banner from "../images/banner.png";
import banner from "../images/banner.jpeg";

export default function Banner() {
  return (
    <div className="mb-4 w-full max-w-[1620px] h-[450px]">
      <img src={banner} alt="banner" className="w-full h-full object-cover" />
    </div>
  );
}
