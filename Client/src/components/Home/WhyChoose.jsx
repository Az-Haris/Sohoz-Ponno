import React from "react";
import { assets } from "../../assets/assets";
import Container from "../Container";

const WhyChoose = () => {
  return (
    <Container className="mt-20 md:mt-36">
      <h2 className="text-center text-3xl max-w-96 mx-auto mb-8 md:mb-12 font-black text-primary">
        সেরা পণ্য, সহজ সমাধান
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
        <div className="group text-center flex flex-col items-center">
          <img
            className="p-5 group-hover:bg-slate-100 transition-all ease-in-out duration-300 rounded-lg w-20"
            src={assets.authentic}
            alt=""
          />
          <h2 className="text-xl font-semibold mt-5 mb-3 text-gray-700 group-hover:text-primary transition-all ease-in-out duration-300">
            আসল ঘরের স্বাদের প্রতিশ্রুতি
          </h2>
          <p className="text-gray-500">
            আমাদের তৈরি প্রতিটি আচারেই রয়েছে মায়ের হাতের ছোঁয়া—খাঁটি ঘরের মশলা
            আর যত্নে বানানো সহজ পণ্যের হোমমেড আচার এখন ঘরেই পাবেন!
          </p>
        </div>

        <div className="group text-center flex flex-col items-center">
          <img
            className="p-5 group-hover:bg-slate-100 transition-all ease-in-out duration-300 rounded-lg w-20"
            src={assets.premium}
            alt=""
          />
          <h2 className="text-xl font-semibold mt-5 mb-3 text-gray-700 group-hover:text-primary transition-all ease-in-out duration-300">
            মানের কোনো আপস নেই
          </h2>
          <p className="text-gray-500">
            আমরা দিচ্ছি বাছাইকৃত কাঁচামাল দিয়ে তৈরি করা প্রিমিয়াম কোয়ালিটির
            আচার—নেই কোনো কেমিক্যাল বা প্রিজারভেটিভ!
          </p>
        </div>

        <div className="group text-center flex flex-col items-center">
          <img
            className="p-5 group-hover:bg-slate-100 transition-all ease-in-out duration-300 rounded-lg w-20"
            src={assets.refund}
            alt=""
          />
          <h2 className="text-xl font-semibold mt-5 mb-3 text-gray-700 group-hover:text-primary transition-all ease-in-out duration-300">
            নিশ্চিন্তে কিনুন—রিফান্ড সুবিধাসহ
          </h2>
          <p className="text-gray-500">
            পণ্য নিয়ে কোনো অসুবিধা? দুশ্চিন্তার কিছু নেই—ত্রুটিপূর্ণ পণ্যে আমরা
            দিচ্ছি সম্পূর্ণ রিফান্ড বা রিপ্লেসমেন্ট সুবিধা।
          </p>
        </div>

        <div className="group text-center flex flex-col items-center">
          <img
            className="p-5 group-hover:bg-slate-100 transition-all ease-in-out duration-300 rounded-lg w-20"
            src={assets.delivery}
            alt=""
          />
          <h2 className="text-xl font-semibold mt-5 mb-3 text-gray-700 group-hover:text-primary transition-all ease-in-out duration-300">
            আগে পণ্য, তারপর টাকা
          </h2>
          <p className="text-gray-500">
            বিশ্বাসের জায়গা থেকেই সহজ পণ্যে রয়েছে ক্যাশ অন ডেলিভারি—পণ্য হাতে
            পেয়ে তারপর মূল্য পরিশোধ করুন।
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
