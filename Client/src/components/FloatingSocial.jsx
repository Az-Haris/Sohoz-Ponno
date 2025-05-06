import React from "react";
import { assets } from "../assets/assets";

const FloatingSocial = () => {
  return (
    <div className="fixed left-5 flex flex-col gap-3 bottom-5 z-50">
      <a
        href="https://www.facebook.com/messages/t/532263166640017"
        target="_blank"
      >
        <img className="w-10" src={assets.messenger} alt="" />
      </a>
      <a href="https://wa.me/message/SFZHCR7Z4IUAO1" target="_blank">
        <img className="w-10" src={assets.whatsapp} alt="" />
      </a>
    </div>
  );
};

export default FloatingSocial;
