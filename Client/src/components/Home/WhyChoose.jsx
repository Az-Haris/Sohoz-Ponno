import React from "react";
import { assets } from "../../assets/assets";
import Container from "../Container";

const WhyChoose = () => {
  return (
    <Container className="mt-36">
      <h2 className="text-center text-3xl max-w-96 mx-auto mb-12 font-black text-primary">
        আমরাই সেরা
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="group text-center flex flex-col items-center">
          <img
            className="p-5 group-hover:bg-slate-100 transition-all ease-in-out duration-300 rounded-lg w-20"
            src={assets.authentic}
            alt=""
          />
          <h2 className="text-xl font-semibold mt-5 mb-3 text-gray-700 group-hover:text-primary transition-all ease-in-out duration-300">
            অথেন্টিক প্রোডাক্ট
          </h2>
          <p className="text-gray-500">
            আমাদের কাছেই পাচ্ছেন সেরা স্বাদ যুক্ত খুলনার অথেন্টিক দেশীয় চুইঝাল
          </p>
        </div>

        <div className="group text-center flex flex-col items-center">
          <img
            className="p-5 group-hover:bg-slate-100 transition-all ease-in-out duration-300 rounded-lg w-20"
            src={assets.premium}
            alt=""
          />
          <h2 className="text-xl font-semibold mt-5 mb-3 text-gray-700 group-hover:text-primary transition-all ease-in-out duration-300">
            প্রিমিয়াম কোয়ালিটি
          </h2>
          <p className="text-gray-500">
            রেগুলার বা অপরিপক্ক নয়, আমরাই দিচ্ছি বাছাইকৃত প্রিমিয়াম কোয়ালিটির
            চুইঝাল
          </p>
        </div>

        <div className="group text-center flex flex-col items-center">
          <img
            className="p-5 group-hover:bg-slate-100 transition-all ease-in-out duration-300 rounded-lg w-20"
            src={assets.refund}
            alt=""
          />
          <h2 className="text-xl font-semibold mt-5 mb-3 text-gray-700 group-hover:text-primary transition-all ease-in-out duration-300">
            রিফান্ড পলিসি
          </h2>
          <p className="text-gray-500">
            যেকোন ত্রুটিপূর্ণ পণ্যের ক্ষেত্রে থাকছে পণ্য অথবা টাকা রিফান্ডের
            সুবিধা
          </p>
        </div>

        <div className="group text-center flex flex-col items-center">
          <img
            className="p-5 group-hover:bg-slate-100 transition-all ease-in-out duration-300 rounded-lg w-20"
            src={assets.delivery}
            alt=""
          />
          <h2 className="text-xl font-semibold mt-5 mb-3 text-gray-700 group-hover:text-primary transition-all ease-in-out duration-300">
            ক্যাশ অন ডেলিভারী
          </h2>
          <p className="text-gray-500">
            আমাদের রয়েছে পন্য হাতে পেয়ে তারপর টাকা পরিশোধ করার সুব্যবস্থা
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
