import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Button from "./Button";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  const goToBtn = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className={`fixed right-5 transition-all duration-500 ease-in-out z-50 ${visible ? "bottom-5" : "-bottom-10 opacity-0"}`}>
      
        <Button
          className="!p-3 sm:p-4"
          onClick={goToBtn}
        >
          <FaArrowUp className="sm:text-xl" />
        </Button>
    </div>
  );
};

export default GoToTop;
