import React from "react";
import { Link, useLocation } from "react-router";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";
  return (
    <div className="flex items-center">
      {pathnames.length > 0 && (
        <Link to={"/"}>
          <AiOutlineHome className="text-xl text-primary" />
        </Link>
      )}
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={breadcrumbPath} className="flex items-center"><IoMdArrowDropright className="ml-1" /> <span>{name}</span></span>
        ) : (
          <span key={breadcrumbPath} className="flex items-center text-primary">
            <IoMdArrowDropright className="ml-1" /> <Link to={breadcrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
