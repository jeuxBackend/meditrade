import React from "react";
import { useNavigate } from "react-router-dom";
import closeicon from "../Assets/closeicon.png";
import bpimg6 from "../Assets/image6.png";
import pointimg from '../Assets/pointimg.png'

function OrderDetails() {
  const navigate = useNavigate();
  return (
    <div className="px-3 md:px-7 py-4 mt-4">
      {/* Back Button */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={closeicon} alt="" className="h-8 md:h-9" />
        <p className="text-xl md:text-2xl font-semibold text-[#333333]">
          Order Details
        </p>
      </div>

     <div className="mt-5 space-y-4">
         <div className="bg-white py-3 px-3 rounded-lg">
        {/* Product Info */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-3 lg:gap-6">
          <img
            src={bpimg6}
            alt="Advanced Dissection Kit"
            className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto xl:mx-0 flex-shrink-0"
          />

          <div className="w-full flex flex-col xl:flex-row items-start xl:justify-center gap-6 ">
            <div className="flex-1 ">
              <div className="py-3 flex flex-col lg:flex-row gap-4">
                <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight pr-6 text-center xl:text-left">
                  Automatic Blood Pressure
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6 ">
                <div>
                  <p className="text-[#8f8f8f] text-sm">Brand:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    Rossmax
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    America
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Total Price:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    $100.00
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Quantity:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    6
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 flex items-center gap-2">
            <p className="font-semibold text-[#333333] text-4xl">120</p>
            <img src={pointimg} alt="" className="w-8 " />
          </div>
        </div>
      </div>
         <div className="bg-white  py-3 px-3 rounded-lg">
        {/* Product Info */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-3 lg:gap-6">
          <img
            src={bpimg6}
            alt="Advanced Dissection Kit"
            className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto xl:mx-0 flex-shrink-0"
          />

          <div className="w-full flex flex-col xl:flex-row items-center xl:justify-center gap-6 ">
            <div className="flex-1 ">
              <div className="py-3 flex flex-col lg:flex-row gap-4">
                <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight pr-6 text-center xl:text-left">
                  Automatic Blood Pressure
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6 ">
                <div>
                  <p className="text-[#8f8f8f] text-sm">Brand:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    Rossmax
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    America
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Total Price:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    $100.00
                  </p>
                </div>
               <div>
                  <p className="text-[#8f8f8f] text-sm">Quantity:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    6
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 flex items-center gap-2">
            <p className="font-semibold text-[#333333] text-4xl">120</p>
            <img src={pointimg} alt="" className="w-8 " />
          </div>
        </div>
      </div>
         <div className="bg-white  py-3 px-3 rounded-lg">
        {/* Product Info */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-3 lg:gap-6">
          <img
            src={bpimg6}
            alt="Advanced Dissection Kit"
            className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto xl:mx-0 flex-shrink-0"
          />

          <div className="w-full flex flex-col xl:flex-row items-center xl:justify-center gap-6 ">
            <div className="flex-1 ">
              <div className="py-3 flex flex-col lg:flex-row gap-4">
                <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight pr-6 text-center xl:text-left">
                  Automatic Blood Pressure
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6 ">
                <div>
                  <p className="text-[#8f8f8f] text-sm">Brand:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    Rossmax
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    America
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Total Price:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    $100.00
                  </p>
                </div>
               <div>
                  <p className="text-[#8f8f8f] text-sm">Quantity:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    6
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 flex items-center gap-2">
            <p className="font-semibold text-[#333333] text-4xl">120</p>
            <img src={pointimg} alt="" className="w-8 " />
          </div>
        </div>
      </div>
         <div className="bg-white  py-3 px-3 rounded-lg">
        {/* Product Info */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-3 lg:gap-6">
          <img
            src={bpimg6}
            alt="Advanced Dissection Kit"
            className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto xl:mx-0 flex-shrink-0"
          />

          <div className="w-full flex flex-col xl:flex-row items-center xl:justify-center gap-6 ">
            <div className="flex-1 ">
              <div className="py-3 flex flex-col lg:flex-row gap-4">
                <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight pr-6 text-center xl:text-left">
                  Automatic Blood Pressure
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6 ">
                <div>
                  <p className="text-[#8f8f8f] text-sm">Brand:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    Rossmax
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    America
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Total Price:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    $100.00
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Status:</p>
                  <p className="font-[500] text-[24px] text-[#007ced] cursor-pointer text-nowrap">
                    Pending
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 flex items-center gap-2">
            <p className="font-semibold text-[#333333] text-4xl">120</p>
            <img src={pointimg} alt="" className="w-8 " />
          </div>
        </div>
      </div>
         <div className="bg-white  py-3 px-3 rounded-lg">
        {/* Product Info */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-3 lg:gap-6">
          <img
            src={bpimg6}
            alt="Advanced Dissection Kit"
            className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto xl:mx-0 flex-shrink-0"
          />

          <div className="w-full flex flex-col xl:flex-row items-center xl:justify-center gap-6 ">
            <div className="flex-1 ">
              <div className="py-3 flex flex-col lg:flex-row gap-4">
                <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight pr-6 text-center xl:text-left">
                  Automatic Blood Pressure
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6 ">
                <div>
                  <p className="text-[#8f8f8f] text-sm">Brand:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    Rossmax
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    America
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Total Price:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    $100.00
                  </p>
                </div>
               <div>
                  <p className="text-[#8f8f8f] text-sm">Quantity:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    6
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 flex items-center gap-2">
            <p className="font-semibold text-[#333333] text-4xl">120</p>
            <img src={pointimg} alt="" className="w-8 " />
          </div>
        </div>
      </div>
         <div className="bg-white  py-3 px-3 rounded-lg">
        {/* Product Info */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-3 lg:gap-6">
          <img
            src={bpimg6}
            alt="Advanced Dissection Kit"
            className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto xl:mx-0 flex-shrink-0"
          />

          <div className="w-full flex flex-col xl:flex-row items-center xl:justify-center gap-6 ">
            <div className="flex-1 ">
              <div className="py-3 flex flex-col lg:flex-row gap-4">
                <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight pr-6 text-center xl:text-left">
                  Automatic Blood Pressure
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6 ">
                <div>
                  <p className="text-[#8f8f8f] text-sm">Brand:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    Rossmax
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    America
                  </p>
                </div>
                <div>
                  <p className="text-[#8f8f8f] text-sm">Total Price:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    $100.00
                  </p>
                </div>
               <div>
                  <p className="text-[#8f8f8f] text-sm">Quantity:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    6
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 flex items-center gap-2">
            <p className="font-semibold text-[#333333] text-4xl">120</p>
            <img src={pointimg} alt="" className="w-8 " />
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default OrderDetails;
