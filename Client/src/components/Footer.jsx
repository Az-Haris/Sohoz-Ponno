import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-20 md:mt-36 border-t border-gray-300">
      <Container className="flex flex-col md:flex-row gap-10 justify-between py-10 md:pt-20">
        <div>
          <div className="mb-3 flex justify-center md:justify-start" >
          <Logo />
          </div>
          <p className="max-w-96 mx-auto text-center md:text-left">
          "সহজ পণ্য, সহজ জীবন — ঘরের স্বাদে ঘরোয়া যত্ন। প্রাকৃতিক উপাদানে তৈরি, আমাদের প্রতিটি পণ্য আপনার পরিবারের জন্য নির্ভরযোগ্য।"

          </p>
          <p className="my-2 text-center md:text-left">E-mail: sponno2025@gmail.com</p>
          <p className="text-center md:text-left">Hotline: +880 1885-726272</p>
        </div>
        
        <div className="flex flex-col md:gap-3">
          <strong className="mb-3 text-xl font-semibold text-center">Follow Us</strong>
          <div className="flex items-center justify-center gap-3">
            <Link to="https://www.facebook.com/sohojponno.shop" target="_blank" className="flex items-center justify-center border p-3 rounded-full text-xl text-gray-500 hover:text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out">
              <FaFacebookF />
            </Link>
            
            <Link to="https://www.instagram.com/sohozponno" target="_blank" className="flex items-center justify-center border p-3 rounded-full text-xl text-gray-500 hover:text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out">
              <FaInstagram />
            </Link>
          </div>
          <div className="flex justify-center gap-3 mt-3">
            <Link to={"/"}><img src={assets.apple_store} alt="" /></Link>
            <Link to={"/"}><img src={assets.play_store} alt="" /></Link>
          </div>
        </div>
      </Container>
      <p className="text-center px-4 ">©2025 Sohoz Ponno. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
