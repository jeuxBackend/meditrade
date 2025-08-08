import React, { useState } from "react";
import closeicon from "./Assets/closeicon.png";
import bpimg1 from "./Assets/bpimg1.png";
import bpimg2 from "./Assets/bpimg2.png";
import bpimg3 from "./Assets/bpimg3.png";
import bpimg4 from "./Assets/bpimg4.png";
import bpimg5 from "./Assets/bpimg5.png";
import bpimg6 from "./Assets/image6.png";
import { BiMinus } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import cart from "./Assets/cartimg.png";
import cartplus from "./Assets/cart-plus.png";
import { Link } from "react-router-dom";

function MyOrderProductDetails() {
  const [count, setCount] = useState(3); 

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div className=" px-3 md:px-7 py-4 mt-4">
      <div className="flex items-center gap-3">
        <img src={closeicon} alt="" className="h-9" />
        <p className="text-2xl font-semibold">Product Details</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 pb-4 border-b-2 border-dashed border-[#a3a3a3]">
        <div>
          <div>
            <img src={bpimg1} alt="" className="" />
          </div>
          <div className="grid grid-cols-4 gap-1 md:gap-3 mt-2">
            <img src={bpimg2} alt="" className=" rounded-xl" />
            <img src={bpimg3} alt="" className="  rounded-xl" />
            <img src={bpimg4} alt="" className=" rounded-xl" />
            <div className="relative">
              <img src={bpimg5} alt="" className=" rounded-xl" />
              <p className="absolute  top-[38%] right-[40%] xl:top-[45%] xl:right-[45%] lg:text-2xl text-white rounded-full ">
                +3
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#8f8f8f] font-semibold">Product Title</p>
          <p className="font-semibold text-[#3a2d2d] text-3xl">
            Electrocardiography, Model 14032
          </p>
          <div className="py-3 grid grid-cols-2 items-center border-b-2 border-dashed border-[#a3a3a3] pb-5">
            <p className="text-[#8f8f8f]">
              Price:{" "}
              <span className="text-[#333333] font-semibold text-2xl">
                $100.00
              </span>
            </p>
            <p className="text-[#8f8f8f]">1,238 Sold</p>
          </div>

          <div className="py-5">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-[#8f8f8f]">Brand:</p>
                <p className="font-semibold text-[#333333] text-2xl">Rossmax</p>
              </div>
              <div>
                <p className="text-[#8f8f8f]">Country of Origin:</p>
                <p className="font-semibold text-[#333333] text-2xl">America</p>
              </div>
            </div>
            <div className="py-4">
              <p className="text-[#8f8f8f]">Technical sheet:</p>
              <p className="text-[#6a38ff] font-[700] text-2xl">PDF download</p>
            </div>
            <div>
              <p className="font-bold py-2 text-[#292929] text-xl">
                Description:
              </p>
              <p className="text-[#666666]">
                Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                consetetur sadi pscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna. consetetur sadi pscing
                elitr.<span className="font-medium"> See More....</span>
              </p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-7 mt-5">
              <div className="flex items-center gap-2">
                <div
                  onClick={handleMinus}
                  className="border border-[#a3a3a3] py-2 px-2 rounded-sm cursor-pointer"
                >
                  <BiMinus className="text-lg font-semibold" />
                </div>
                <p className="font-semibold text-xl">{count}</p>

                <div
                  onClick={handlePlus}
                  className="border border-[#a3a3a3] py-2 px-2 rounded-sm cursor-pointer"
                >
                  <PiPlus className="text-lg font-semibold" />
                </div>
              </div>

             <Link to='/MyCart'>
              <div className="flex cursor-pointer flex-nowrap items-center justify-center bg-white py-2 px-20 gap-2 rounded-md">
                <img src={cart} alt="" className="h-8" />
                <p className="font-semibold text-nowrap">Add To Cart</p>
              </div>
             </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl font-semibold py-5">Related Products</p>
        <div className="space-y-2">
          <div className="bg-white flex flex-col lg:flex-row items-start gap-3 lg:gap-6 py-3 px-3 lg:px-4 rounded-lg">
            <img
              src={bpimg6}
              alt="Advanced Dissection Kit"
              className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto lg:mx-0 flex-shrink-0"
            />

            <div className="w-full">
              <div className="py-3 flex flex-col lg:flex-row lg:justify-between gap-4">
                <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight">
                  Advanced Dissection Kit Biology Lab Anatomy Dissecting Set
                  with Stainless Steel Scalpel Knife Handle Blades for Medical
                </p>
                <p className="text-[#00427e] font-semibold text-xl lg:text-2xl lg:py-4 lg:border-l-2 lg:border-[#a3a3a3] lg:px-5 whitespace-nowrap">
                  $100.00
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-6 flex-1">
                  <div>
                    <p className="text-[#8f8f8f] text-sm">Brand:</p>
                    <p className="font-semibold text-[#333333] text-[24px] ">
                      Rossmax
                    </p>
                  </div>

                  <div>
                    <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                    <p className="font-semibold text-[#333333] text-[24px]  ">
                      America
                    </p>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <p className="text-[#8f8f8f] text-sm">Technical sheet:</p>
                    <p className="text-[#007ced] font-[500] text-[24px]  cursor-pointer text-nowrap ">
                      PDF download
                    </p>
                  </div>
                </div>
                <div className=" items-center gap-2 justify-center flex flex-col  sm:flex-row lg:flex-col">
                  <div className="flex items-center justify-center px-20 lg:px-11 xl:px-20 bg-[#00427e] cursor-pointer py-2 text-white gap-2 rounded-md">
                    <img src={cartplus} alt="" className="h-5 " />
                    <p className="text-nowrap text-sm lg:text-base">
                      Add To Cart
                    </p>
                  </div>
                  <div className="flex items-center justify-center cursor-pointer px-23 lg:px-14 xl:px-23 font-medium bg-[#eaebfc]  py-2 text-black gap-2 rounded-md">
                    <p className="text-sm lg:text-base">View Details</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col lg:flex-row items-start gap-3 lg:gap-6 py-3 px-3 lg:px-4 rounded-lg">
            <img
              src={bpimg6}
              alt="Advanced Dissection Kit"
              className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto lg:mx-0 flex-shrink-0"
            />

            <div className="w-full">
              <div className="py-3 flex flex-col lg:flex-row lg:justify-between gap-4">
                <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight">
                  Advanced Dissection Kit Biology Lab Anatomy Dissecting Set
                  with Stainless Steel Scalpel Knife Handle Blades for Medical
                </p>
                <p className="text-[#00427e] font-semibold text-xl lg:text-2xl lg:py-4 lg:border-l-2 lg:border-[#a3a3a3] lg:px-5 whitespace-nowrap">
                  $100.00
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 flex-1">
                  <div>
                    <p className="text-[#8f8f8f] text-sm">Brand:</p>
                    <p className="font-semibold text-[#333333] text-[24px] ">
                      Rossmax
                    </p>
                  </div>

                  <div>
                    <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                    <p className="font-semibold text-[#333333] text-[24px]  ">
                      America
                    </p>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <p className="text-[#8f8f8f] text-sm">Technical sheet:</p>
                    <p className="text-[#007ced] font-[500] text-[24px]  cursor-pointer text-nowrap ">
                      PDF download
                    </p>
                  </div>
                </div>
                <div className=" items-center gap-2 justify-center flex flex-col  sm:flex-row lg:flex-col">
                  <div className="flex items-center justify-center px-20 lg:px-11 xl:px-20 bg-[#00427e] cursor-pointer py-2 text-white gap-2 rounded-md">
                    <img src={cartplus} alt="" className="h-5 " />
                    <p className="text-nowrap text-sm lg:text-base">
                      Add To Cart
                    </p>
                  </div>
                  <div className="flex items-center justify-center cursor-pointer px-23 lg:px-14 xl:px-23 font-medium bg-[#eaebfc]  py-2 text-black gap-2 rounded-md">
                    <p className="text-sm lg:text-base">View Details</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col lg:flex-row items-start gap-3 lg:gap-6 py-3 px-3 lg:px-4 rounded-lg">
            <img
              src={bpimg6}
              alt="Advanced Dissection Kit"
              className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto lg:mx-0 flex-shrink-0"
            />

            <div className="w-full">
              <div className="py-3 flex flex-col lg:flex-row lg:justify-between gap-4">
                <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight">
                  Advanced Dissection Kit Biology Lab Anatomy Dissecting Set
                  with Stainless Steel Scalpel Knife Handle Blades for Medical
                </p>
                <p className="text-[#00427e] font-semibold text-xl lg:text-2xl lg:py-4 lg:border-l-2 lg:border-[#a3a3a3] lg:px-5 whitespace-nowrap">
                  $100.00
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 flex-1">
                  <div>
                    <p className="text-[#8f8f8f] text-sm">Brand:</p>
                    <p className="font-semibold text-[#333333] text-[24px] ">
                      Rossmax
                    </p>
                  </div>

                  <div>
                    <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                    <p className="font-semibold text-[#333333] text-[24px]  ">
                      America
                    </p>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <p className="text-[#8f8f8f] text-sm">Technical sheet:</p>
                    <p className="text-[#007ced] font-[500] text-[24px]  cursor-pointer text-nowrap ">
                      PDF download
                    </p>
                  </div>
                </div>
                <div className=" items-center gap-2 justify-center flex flex-col  sm:flex-row lg:flex-col">
                  <div className="flex items-center justify-center px-20 lg:px-11 xl:px-20 bg-[#00427e] cursor-pointer py-2 text-white gap-2 rounded-md">
                    <img src={cartplus} alt="" className="h-5 " />
                    <p className="text-nowrap text-sm lg:text-base">
                      Add To Cart
                    </p>
                  </div>
                  <div className="flex items-center justify-center cursor-pointer px-23 lg:px-14 xl:px-23 font-medium bg-[#eaebfc]  py-2 text-black gap-2 rounded-md">
                    <p className="text-sm lg:text-base">View Details</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col lg:flex-row items-start gap-3 lg:gap-6 py-3 px-3 lg:px-4 rounded-lg">
            <img
              src={bpimg6}
              alt="Advanced Dissection Kit"
              className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto lg:mx-0 flex-shrink-0"
            />

            <div className="w-full">
              <div className="py-3 flex flex-col lg:flex-row lg:justify-between gap-4">
                <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight">
                  Advanced Dissection Kit Biology Lab Anatomy Dissecting Set
                  with Stainless Steel Scalpel Knife Handle Blades for Medical
                </p>
                <p className="text-[#00427e] font-semibold text-xl lg:text-2xl lg:py-4 lg:border-l-2 lg:border-[#a3a3a3] lg:px-5 whitespace-nowrap">
                  $100.00
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 flex-1">
                  <div>
                    <p className="text-[#8f8f8f] text-sm">Brand:</p>
                    <p className="font-semibold text-[#333333] text-[24px] ">
                      Rossmax
                    </p>
                  </div>

                  <div>
                    <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                    <p className="font-semibold text-[#333333] text-[24px]  ">
                      America
                    </p>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <p className="text-[#8f8f8f] text-sm">Technical sheet:</p>
                    <p className="text-[#007ced] font-[500] text-[24px]  cursor-pointer text-nowrap ">
                      PDF download
                    </p>
                  </div>
                </div>
                <div className=" items-center gap-2 justify-center flex flex-col  sm:flex-row lg:flex-col">
                  <div className="flex items-center justify-center px-20 lg:px-11 xl:px-20 bg-[#00427e] cursor-pointer py-2 text-white gap-2 rounded-md">
                    <img src={cartplus} alt="" className="h-5 " />
                    <p className="text-nowrap text-sm lg:text-base">
                      Add To Cart
                    </p>
                  </div>
                  <div className="flex items-center justify-center cursor-pointer px-23 lg:px-14 xl:px-23 font-medium bg-[#eaebfc]  py-2 text-black gap-2 rounded-md">
                    <p className="text-sm lg:text-base">View Details</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col lg:flex-row items-start gap-3 lg:gap-6 py-3 px-3 lg:px-4 rounded-lg">
            <img
              src={bpimg6}
              alt="Advanced Dissection Kit"
              className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto lg:mx-0 flex-shrink-0"
            />

            <div className="w-full">
              <div className="py-3 flex flex-col lg:flex-row lg:justify-between gap-4">
                <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight">
                  Advanced Dissection Kit Biology Lab Anatomy Dissecting Set
                  with Stainless Steel Scalpel Knife Handle Blades for Medical
                </p>
                <p className="text-[#00427e] font-semibold text-xl lg:text-2xl lg:py-4 lg:border-l-2 lg:border-[#a3a3a3] lg:px-5 whitespace-nowrap">
                  $100.00
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 flex-1">
                  <div>
                    <p className="text-[#8f8f8f] text-sm">Brand:</p>
                    <p className="font-semibold text-[#333333] text-[24px] ">
                      Rossmax
                    </p>
                  </div>

                  <div>
                    <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                    <p className="font-semibold text-[#333333] text-[24px]  ">
                      America
                    </p>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <p className="text-[#8f8f8f] text-sm">Technical sheet:</p>
                    <p className="text-[#007ced] font-[500] text-[24px]  cursor-pointer text-nowrap ">
                      PDF download
                    </p>
                  </div>
                </div>
                <div className=" items-center gap-2 justify-center flex flex-col  sm:flex-row lg:flex-col">
                  <div className="flex items-center justify-center px-20 lg:px-11 xl:px-20 bg-[#00427e] cursor-pointer py-2 text-white gap-2 rounded-md">
                    <img src={cartplus} alt="" className="h-5 " />
                    <p className="text-nowrap text-sm lg:text-base">
                      Add To Cart
                    </p>
                  </div>
                  <div className="flex items-center justify-center cursor-pointer px-23 lg:px-14 xl:px-23 font-medium bg-[#eaebfc]  py-2 text-black gap-2 rounded-md">
                    <p className="text-sm lg:text-base">View Details</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
         
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 w-full">
        <button className="border-[#d6dbe8] border py-3 text-center w-[50%] lg:w-[20%] text-[#333333] rounded-full font-medium cursor-pointer"> See more</button>
      </div>
    </div>
  );
}

export default MyOrderProductDetails;
