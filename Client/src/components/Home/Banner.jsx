import React from "react";
import { assets } from "../../assets/assets";
import Container from "../Container";
import Button from "../Button";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${assets.intro_bg})` }}
      className="bg-no-repeat bg-cover bg-top pt-24"
    >
      <Container className="flex flex-col md:flex-row gap-10 md:gap-5 justify-between">
        <div className="md:pt-20 space-y-7 sm:space-y-10 text-center sm:text-left">
            <h1 className="text-3xl sm:text-[44px] font-bold text-[#212529] leading-12 sm:leading-15">We Deliver <br /> Parcel on Time with <br /> no Hassle</h1>
          <p>Easy Tracking, fast Payment, and safe Delivery across country.</p>
          <Button size="lg" to={"/register"}>
            Become a Merchant
          </Button>
        </div>
        <div >
          <img src={assets.rider} alt="" />
        </div>
        <div className="hidden lg:flex flex-col gap-8 pt-20 ">
          <div className="flex items-center gap-4">
            <img
              className="border-2 p-3 rounded-sm border-white bg-white/40"
              src={assets.sm_merchant}
              alt=""
            />
            <div>
              <h3 className="text-3xl font-semibold">300k+</h3>
              <p className="text-sm text-neutral-400">Registered Merchant</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="border-2 p-3 rounded-sm border-white bg-white/40"
              src={assets.sm_rider}
              alt=""
            />
            <div>
              <h3 className="text-3xl font-semibold">10k+</h3>
              <small className="text-sm text-neutral-400">Delivery Man</small>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="border-2 p-3 rounded-sm border-white bg-white/40"
              src={assets.sm_hub}
              alt=""
            />
            <div>
              <h3 className="text-3xl font-semibold">500+</h3>
              <small className="text-sm text-neutral-400">Delivery Point</small>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
