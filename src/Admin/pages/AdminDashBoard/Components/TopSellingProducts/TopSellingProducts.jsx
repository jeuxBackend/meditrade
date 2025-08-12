import React from "react";
import ProductImg from "../Assets/ProductImg.png";

const TopSellingProducts = () => {
  return (
    <div className="bg-[#fafafa] lg:ml-[295px]">
      <div className="md:p-6 p-4">
        <div className="bg-white md:p-4 p-2 rounded-lg flex md:flex-nowrap flex-wrap gap-4">
          
          {/* Left side (fixed width) */}
          <div className="md:w-[180px] w-full flex-shrink-0">
            <img
              src={ProductImg}
              alt="Product"
              className="h-40 w-full rounded-lg object-cover"
            />
          </div>

          {/* Center (flex-grow, auto width) */}
          <div className="flex-grow w-full md:border-r-2 px-4 border-b-2 md:border-b-0 pb-3 border-[#adadad]">
            <p className="text-[21px] font-[400]">
              Advanced Dissection Kit Biology Lab Anatomy Dissecting Set with
              Stainless Steel Scalpel Knife Handle Blades for Medical
            </p>
            <div className="mt-4 grid md:grid-cols-3 grid-cols-1 gap-2">
              <div>
                <p className="text-[18px] font-[400] text-[#999999]">Brand:</p>
                <p className="text-[22px] font-[400]">Rossmax</p>
              </div>
              <div>
                <p className="text-[18px] font-[400] text-[#999999]">
                  Country of Origin:
                </p>
                <p className="text-[22px] font-[400]">America</p>
              </div>
              <div>
                <p className="text-[18px] font-[400] text-[#999999]">
                  Technical sheet:
                </p>
                <p className="text-[22px] font-[400] text-[#007CED]">
                  PDF download
                </p>
              </div>
            </div>
          </div>

          {/* Right side (fixed width) */}
          <div className="md:w-[120px] w-full flex-shrink-0 flex flex-col justify-center items-center">
            <p className="text-[20px] font-[400]">Sold</p>
            <p className="text-[#00427E] text-[28px] font-[500]">10,922</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
