import React from "react";
import banner from "../images/banner.png";

export default function Banner() {
  return (
    <div className="mb-4 w-full max-w-[1620px] h-[400px]">
      <img src={banner} alt="banner" className="w-full h-full object-cover" />
    </div>
  );
}
