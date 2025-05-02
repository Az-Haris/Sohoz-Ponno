import React from "react";
import Container from "../Container";
import { assets } from "../../assets/assets";
import Button from "../Button";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandMessenger } from "react-icons/tb";

const Help = () => {
  return (
    <Container className="rounded-lg bg-cover bg-center py-20 px-5 flex flex-col items-center justify-center gap-5 text-center mt-36" style={{ backgroundImage: `url(${assets.cta_banner})` }}>
      <h2 className="text-3xl font-black text-text">সাহায্য প্রয়োজন?</h2>
      <p className="max-w-2xl">
        যেকোন জিজ্ঞাসা ও অর্ডারজনিত সমস্যায় কল করুন আমাদের হেল্পলাইনে অথবা নক
        করুন আমাদের হোয়াটসঅ্যাপ বা ফেসবুক পেজে। আমরা আছি সকাল ১০ টা থেকে রাত ৮
        টা পর্যন্ত আপনার সেবায়।
      </p>
      <div className="flex gap-3">
        <Button size="lg" to="https://wa.me/message/SFZHCR7Z4IUAO1" target="_blank">
        <FiPhoneCall className="text-2xl" /> হেল্পলাইন
        </Button>
        <Button to="https://wa.me/message/SFZHCR7Z4IUAO1" target="_blank"><FaWhatsapp className="text-3xl" /></Button>
        <Button to="https://www.facebook.com/messages/t/532263166640017" target="_blank"><TbBrandMessenger className="text-3xl" /></Button>
      </div>
    </Container>
  );
};

export default Help;
