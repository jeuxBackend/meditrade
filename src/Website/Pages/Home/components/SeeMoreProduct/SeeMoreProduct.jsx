import React, {useState} from "react";
import { CiSearch } from "react-icons/ci";
import { IoCaretDownOutline } from "react-icons/io5";
import bpimg6 from "./Assets/image6.png";
import cartplus from "./Assets/cart-plus.png";
import { Link } from "react-router-dom";
import filter from "./Assets/filter.png";

function SeeMoreProduct() {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="px-3 md:px-9 py-4 mt-[-80px]">
       <div className="w-full relative bg-white rounded-xl ">
      <div>
        <div >
          <input
            type="text"
            placeholder="Search by medicine, category, or brand..."
            className="placeholder:text-[#333333] font-semibold py-4 px-12 w-full outline-0"
          />
          <CiSearch className="absolute top-3 left-3 text-3xl text-[#333333]" />
        </div>

        <div
          className="bg-[#ebf1ff] py-2 px-2 rounded-lg absolute top-1 right-2 cursor-pointer"
          onClick={() => setShowFilters(!showFilters)}
        >
          <img src={filter} alt="" className="w-8 h-8" />
        </div>
      </div>

      {showFilters && (
        <div className="py-3 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="bg-[#ebf1ff] flex items-center justify-between py-4 cursor-pointer px-3 rounded-lg">
            <p className="text-[#333333] font-medium">Country of Origin</p>
            <IoCaretDownOutline className="text-[#777e90]" />
          </div>
          <div className="bg-[#ebf1ff] flex items-center justify-between py-4 cursor-pointer px-3 rounded-lg">
            <p className="text-[#333333] font-medium">Brand</p>
            <IoCaretDownOutline className="text-[#777e90]" />
          </div>
          <div className="bg-[#ebf1ff] flex items-center justify-between py-4 cursor-pointer px-3 rounded-lg">
            <p className="text-[#333333] font-medium">Price Range</p>
            <IoCaretDownOutline className="text-[#777e90]" />
          </div>
          <div className="bg-[#ebf1ff] flex items-center justify-between py-4 cursor-pointer px-3 rounded-lg">
            <p className="text-[#333333] font-medium">Availability</p>
            <IoCaretDownOutline className="text-[#777e90]" />
          </div>
          <div className="bg-[#ebf1ff] flex items-center justify-between py-4 cursor-pointer px-3 rounded-lg">
            <p className="text-[#333333] font-medium">Company</p>
            <IoCaretDownOutline className="text-[#777e90]" />
          </div>
        </div>
      )}
    </div>
      <div>
        <p className="text-2xl font-semibold py-5">BP Apparatus</p>
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
                  <Link to="/MyProductDetails">
                    <div className="flex items-center justify-center px-20 lg:px-11 xl:px-20 bg-[#00427e] cursor-pointer py-2 text-white gap-2 rounded-md">
                      <img src={cartplus} alt="" className="h-5 " />
                      <p className="text-nowrap text-sm lg:text-base">
                        Add To Cart
                      </p>
                    </div>
                  </Link>
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
                  <Link to="/MyProductDetails">
                    <div className="flex items-center justify-center px-20 lg:px-11 xl:px-20 bg-[#00427e] cursor-pointer py-2 text-white gap-2 rounded-md">
                      <img src={cartplus} alt="" className="h-5 " />
                      <p className="text-nowrap text-sm lg:text-base">
                        Add To Cart
                      </p>
                    </div>
                  </Link>
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
                  <Link to="/MyProductDetails">
                    <div className="flex items-center justify-center px-20 lg:px-11 xl:px-20 bg-[#00427e] cursor-pointer py-2 text-white gap-2 rounded-md">
                      <img src={cartplus} alt="" className="h-5 " />
                      <p className="text-nowrap text-sm lg:text-base">
                        Add To Cart
                      </p>
                    </div>
                  </Link>
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
                  <Link to="/MyProductDetails">
                    <div className="flex items-center justify-center px-20 lg:px-11 xl:px-20 bg-[#00427e] cursor-pointer py-2 text-white gap-2 rounded-md">
                      <img src={cartplus} alt="" className="h-5 " />
                      <p className="text-nowrap text-sm lg:text-base">
                        Add To Cart
                      </p>
                    </div>
                  </Link>
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
                  <Link to="/MyProductDetails">
                    <div className="flex items-center justify-center px-20 lg:px-11 xl:px-20 bg-[#00427e] cursor-pointer py-2 text-white gap-2 rounded-md">
                      <img src={cartplus} alt="" className="h-5 " />
                      <p className="text-nowrap text-sm lg:text-base">
                        Add To Cart
                      </p>
                    </div>
                  </Link>
                  <div className="flex items-center justify-center cursor-pointer px-23 lg:px-14 xl:px-23 font-medium bg-[#eaebfc]  py-2 text-black gap-2 rounded-md">
                    <p className="text-sm lg:text-base">View Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeMoreProduct;
