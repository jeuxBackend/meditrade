import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import closeicon from "./Assets/closeicon.png";
import cardimg1 from "./Assets/cardimg1.png";
import cardimg2 from "./Assets/cardimg2.png";
import addcardimg from "./Assets/addcardimg.png";
import AddCardModal from "./Modal/AddCardModal";

function SelectCard() {
  const navigate = useNavigate();

   const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);

  const openAddCardModal = () => {
    setIsAddCardModalOpen(true);
  };

  const closeAddCardModal = () => {
    setIsAddCardModalOpen(false);
  };
  return (
    <div className="px-3 md:px-7 py-4 mt-4">
         <AddCardModal
        openAddCardModal={isAddCardModalOpen}
        closeAddCardModal={closeAddCardModal}
      />
      {/* Back Button */}
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          onClick={() => navigate(-1)}
          src={closeicon}
          alt=""
          className="h-8 md:h-9"
        />
        <p className="text-xl md:text-2xl font-semibold">
          Select Payment Method
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  md:gap-x-4">
        {/* LEFT SIDE - Delivery Form */}
        <div className="col-span-1 space-y-3 mt-5">
          <div>
            <img src={cardimg1} alt="" />
          </div>
          <div>
            <img src={cardimg2} alt="" />
          </div>
          <div className="flex items-center justify-center border-2 border-dashed rounded-xl h-45 bg-white border-[#f0f0f0] ">
            <div 
            onClick={openAddCardModal}
            className="cursor-pointer">
              <img src={addcardimg} alt="" className="h-8 mx-auto" />
              <p className="text-[#999999]">Add Card</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Order Summary */}
        <div className="col-span-2 mt-5">
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
      <div className="mt-15 px-5 w-full flex items-center justify-center">
        <div className="flex items-center my-3 justify-center w-[60%] sm:w-[50%] md:w-[30%] bg-[#00427e] cursor-pointer py-3 text-white gap-2 rounded-md">
          <p className="text-nowrap text-sm lg:text-base">Confirm Order</p>
        </div>
      </div>
    </div>
  );
}

export default SelectCard;
