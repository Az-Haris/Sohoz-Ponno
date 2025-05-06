import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import GoToTop from "../components/GoToTop";
import Footer from "../components/Footer";
import { ToastContainer, Slide } from "react-toastify";
import FloatingSocial from "../components/FloatingSocial";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
      <GoToTop />
      <FloatingSocial/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
};

export default Root;
