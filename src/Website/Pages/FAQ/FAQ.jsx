import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import FaqImage from "./Assets/Frame.jpg";
import closeicon from "./Assets/closeicon.png";

function FAQ() {
  const navigate = useNavigate();
  const faqs = [
    {
      question: "What areas do you deliver to?",
      answer:
        "We deliver to a wide range of regions both locally and internationally. Please check our service coverage page for detailed information on specific areas."
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery times depend on the destination and availability of travelers. Local deliveries typically take 1-3 days, while international shipments may vary."
    },
    {
      question: "What items are prohibited from shipping?",
      answer:
        "We do not allow shipping of hazardous materials, firearms, perishable goods, or illegal items. A complete list of restricted items is available on our Shipping Policy page."
    },
    {
      question: "Are you packing materials eco-friendly?",
      answer:
        "Yes, we prioritize using sustainable and eco-friendly packing materials whenever possible to minimize environmental impact."
    },
    {
      question: "Are you packing materials eco-friendly?",
      answer:
        "Yes, we prioritize using sustainable and eco-friendly packing materials whenever possible to minimize environmental impact."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <div className=" px-3 md:px-7 py-4 mt-4">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={closeicon} alt="" className="h-8 md:h-9" />
        <p className="text-xl md:text-2xl font-semibold text-[#333333]">FAQ’s</p>
      </div>
      <div className="  text-center ">
        <div className="  grid md:grid-cols-2 gap-9 mt-1 items-Start">
          <div>
            <div className="space-y-9 mt-8 ">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b-2 border-dashed border-[#c7cad1] pb-6 "
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-center text-[#7d7f85] text-xl focus:outline-none"
                  >
                    {faq.question}
                    <span className="text-2xl text-[#7d7f85] cursor-pointer">
                      {openIndex === index ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-[#333333] text-start">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="  md:pt-6 rounded-2xl">
            <img src={FaqImage} alt="FAQ Illustration" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
