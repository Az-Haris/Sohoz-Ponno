import React from "react";
import Container from "../Container";
import Accordion, { AccordionItem } from "../Accordion";

const Faq = () => {
  return (
    <Container className="mt-36">
      <h2 className="text-center text-3xl max-w-96 mx-auto mb-12 font-black text-primary">
      সচরাচর জিজ্ঞাস্য প্রশ্নাবলি
      </h2>

      {/* Accordion */}
      <Accordion>
        <AccordionItem value="1" trigger="“সহজ পন্য” কী ধরনের আচার তৈরি করে?
">
        আমরা ঘরোয়া রেসিপিতে তৈরি বিভিন্ন ধরনের আচার তৈরি করি—যেমন নাগা মরিচ, পাকা আম, জলপাই, বরই, মিক্সড ফল ও নারকেল মসলা আচার।
        </AccordionItem>
        <AccordionItem
          value="2"
          trigger="আপনার আচারগুলো কি হোমমেইড?"
        >
          হ্যাঁ, আমাদের প্রতিটি আচার ঘরে তৈরি এবং সম্পূর্ণ প্রাকৃতিক উপাদানে প্রস্তুত। কোনো প্রিজারভেটিভ বা কেমিক্যাল ব্যবহার করা হয় না।
        </AccordionItem>
        <AccordionItem
          value="3"
          trigger="কিভাবে অর্ডার করতে পারি?"
        >
          আমাদের ওয়েবসাইটে বা ফেসবুক পেইজে ইনবক্স করে অর্ডার করতে পারবেন। আমরা সারা বাংলাদেশে ক্যাশ-অন হোম ডেলিভারি দিয়ে থাকি।
        </AccordionItem>
        <AccordionItem
          value="4"
          trigger="ডেলিভারি চার্জ ও সময়সীমা কেমন?"
        >
          ঢাকার ভিতরে সাধারণত ১-২ দিন, ঢাকার বাইরে ২-৩ দিন লাগে। ডেলিভারি চার্জ অর্ডারের পরিমাণ ও লোকেশন অনুযায়ী নির্ধারিত হয়।
        </AccordionItem>
        <AccordionItem
          value="5"
          trigger="কতদিন পর্যন্ত আচার সংরক্ষণ করা যাবে?"
        >
          আমাদের আচারগুলো সঠিকভাবে (ঠান্ডা ও শুষ্ক স্থানে) সংরক্ষণ করলে ৩ থেকে ৬ মাস পর্যন্ত ভালো থাকে।
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Faq;
