import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`py-3 w-full z-20 fixed transition-all duration-500 ease-in-out transform ${
        isSticky
          ? "top-0 backdrop-blur-2xl shadow-md opacity-100"
          : "-top-20 fixed opacity-100 translate-y-20"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap gap-3 justify-between items-center text-center">
          <Logo />


        {/* Right Side Buttons */}
        <div className="flex items-center gap-10">

          <Button to="https://wa.me/message/SFZHCR7Z4IUAO1" size="md" target="_blank">
            <FiPhoneCall className="text-xl" /> হেল্পলাইন
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
