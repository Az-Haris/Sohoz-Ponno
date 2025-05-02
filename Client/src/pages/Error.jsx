import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-gray-500 text-lg">
        <span className="pr-4 border-r border-gray-500">404</span>{" "}
        <span className="pl-4 -ml-1">NOT FOUND</span>
        <div className="flex justify-center mt-3">
          <Link to={"/"}>
            <AiOutlineHome className="text-2xl hoverEffect" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
