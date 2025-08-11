import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import closeicon from "./Assets/closeicon.png";
import image37 from "./Assets/image37.png";
import image38 from "./Assets/image38.png";
import image39 from "./Assets/image39.png";
import image40 from "./Assets/image40.png";
import image43 from "./Assets/image43.png";
import image41 from "./Assets/image41.png";
import { TfiAngleRight } from "react-icons/tfi";

function PaymentMethod() {
  const navigate = useNavigate();
  return (
    <div className="px-3 md:px-7 py-4 mt-4">
      {/* Back Button */}
      <div
        className="flex items-center gap-3 cursor-pointer"
       
      >
        <img 
         onClick={() => navigate(-1)}
        src={closeicon} alt="" className="h-8 md:h-9" />
        <p className="text-xl md:text-2xl font-semibold">
          Select Payment Method
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* LEFT SIDE - Delivery Form */}
        <div className="col-span-1 lg:col-span-2 space-y-3 mt-5">
             <Link to='/SelectCard'>
          <div className="bg-white py-3 px-3 my-3 flex flex-wrap items-center justify-between gap-3 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="bg-[#ebf1ff] py-3 px-3 rounded-lg">
                <img src={image37} alt="" className="h-8 " />
              </div>
              <p className="text-[#333333] font-semibold text-2xl">PayPal</p>
            </div>
            
            <TfiAngleRight className="text-[#333333] text-xl font-extrabold" />
          </div>
            </Link>
              <Link to='/SelectCard'>
          <div className="bg-white py-3 px-3 my-3 flex flex-wrap items-center justify-between gap-3 rounded-xl">
          <div className="flex items-center gap-3">
              <div className="bg-[#ebf1ff] py-3 px-3 rounded-lg">
              <img src={image38} alt="" className="h-8 " />
            </div>
              <p className="text-[#333333] font-semibold text-2xl">Wire Transfer</p>
          </div>
            <TfiAngleRight className="text-[#333333] text-xl font-extrabold" />
          </div>
          </Link>
           <Link to='/SelectCard'>
          <div className="bg-white py-3 my-3 px-3 flex flex-wrap items-center justify-between gap-3 rounded-xl">
             <div className="flex items-center gap-3">
              <div className="bg-[#ebf1ff] py-3 px-3 rounded-lg">
              <img src={image39} alt="" className="h-8 " />
            </div>
              <p className="text-[#333333] font-semibold text-2xl">Stripe</p>
          </div>

            <TfiAngleRight className="text-[#333333] text-xl font-extrabold" />
          </div>
          </Link>
           <Link to='/SelectCard'>
          <div className="bg-white py-3 px-3 my-3 flex flex-wrap items-center justify-between gap-3 rounded-xl">
             <div className="flex items-center gap-3">
              <div className="bg-[#ebf1ff] py-3 px-3 rounded-lg">
              <img src={image41} alt="" className="h-8 " />
            </div>
              <p className="text-[#333333] font-semibold text-2xl">Google Pay</p>
          </div>
            <TfiAngleRight className="text-[#333333] text-xl font-extrabold" />
          </div>
          </Link>
           <Link to='/SelectCard'>
          <div className="bg-white py-3 px-3 my-3 flex flex-wrap items-center justify-between gap-3 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="bg-[#ebf1ff] py-3 px-3 rounded-lg">
              <img src={image40} alt="" className="h-8 " />
            </div>
              <p className="text-[#333333]  font-semibold text-2xl">Apple Pay</p>
          </div>
            <TfiAngleRight className="text-[#333333] text-xl font-extrabold" />
          </div>
          </Link>
           <Link to='/SelectCard'>
          <div className="bg-white py-3 px-3 my-3 flex flex-wrap items-center justify-between gap-3 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="bg-[#ebf1ff] py-3 px-3 rounded-lg">
              <img src={image43} alt="" className="h-8 " />
            </div>
              <p className="text-[#333333] font-semibold text-2xl">Debit/Credit Card</p>
          </div>
            <TfiAngleRight className="text-[#333333] text-xl font-extrabold " />
          </div>
          </Link>
        </div>

        {/* RIGHT SIDE - Order Summary */}
        <div className="col-span-1 mt-5">
          <div className="bg-white rounded-xl px-5 py-5">
            <p className="font-semibold text-2xl text-[#333333]">
              Order Summary
            </p>
            <div className="border-b-2 border-dashed border-[#a3a3a3] py-3">
              <div className="flex items-center justify-between py-2 text-[#333333]">
                <p className="font-medium">Subtotal (2 items):</p>
                <p className="font-semibold text-xl">$200.00</p>
              </div>
              <div className="flex items-center justify-between text-[#333333]">
                <p className="font-medium">Shipping Fee:</p>
                <p className="font-semibold text-xl">$10.09</p>
              </div>
              <div className="flex items-center py-3 justify-between text-[#333333]">
                <p className="font-medium">Tax:</p>
                <p className="font-semibold text-xl">$10.09</p>
              </div>
            </div>
            <div className="border-b-2 border-dashed border-[#a3a3a3] py-4">
              <div className="flex items-center justify-between py-2 text-[#333333]">
                <p className="font-medium">Total:</p>
                <p className="font-semibold text-xl">$210.00</p>
              </div>
              <div className="flex items-center justify-between text-[#333333]">
                <p className="font-medium">Use Loyalty Points:</p>
                <p className="font-semibold text-xl">-</p>
              </div>
            </div>
            <div className=" py-3">
              <div className="flex items-center justify-between py-2 text-[#333333]">
                <p className="font-medium">Total Payable:</p>
                <p className="font-semibold text-xl text-[#2528ff]">$210.00</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
