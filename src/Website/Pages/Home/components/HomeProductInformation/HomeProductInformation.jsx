import React from 'react'
import homeimg1 from "../../Assets/homeimg1.png";
import homeimg2 from "../../Assets/homeimg2.png";
import homeimg3 from "../../Assets/homeimg3.png";
import homeimg4 from "../../Assets/homeimg4.png";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

function HomeProductInformation() {
  return (
    <>
     <div className="px-3 md:px-9 py-4 mt-[-80px]">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search by medicine, category, or brand..."
                className=" placeholder:text-[#333333] font-semibold rounded-xl py-4 bg-white px-12 w-full outline-0 "
              />
              <CiSearch className="absolute top-3.5 left-3 text-3xl text-[#333333] " />
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white py-4 px-3  rounded-xl border-[#e4e4e4] border ">
                  <p className="font-semibold text-nowrap text-lg sm:text-2xl pb-2">
                    Automatic Blood Pressure
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 md:gap-3 ">
                    <img src={homeimg1} alt="" className="rounded-xl" />
                    <img src={homeimg2} alt="" className="rounded-xl" />
                    <img src={homeimg3} alt="" className="rounded-xl" />
                    <img src={homeimg4} alt="" className="rounded-xl" />
                  </div>
                  <Link to="/SeeMoreProduct">
                    <div className="flex items-center  mt-3 justify-center  ">
                      <button className="py-3 w-[80%] md:w-[50%] border border-[#e4e4e4] rounded-full font-medium cursor-pointer text-[#333333]">
                        See More
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="bg-white py-4 px-3 rounded-xl border-[#e4e4e4] border ">
                  <p className="font-semibold text-2xl pb-2">
                    Automatic Blood Pressure
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 md:gap-3">
                    <img src={homeimg1} alt="" className="rounded-xl" />
                    <img src={homeimg2} alt="" className="rounded-xl" />
                    <img src={homeimg3} alt="" className="rounded-xl" />
                    <img src={homeimg4} alt="" className="rounded-xl" />
                  </div>
                  <Link to="/SeeMoreProduct">
                    <div className="flex items-center mt-3 justify-center  ">
                      <button className="py-3 w-[80%] md:w-[50%] border border-[#e4e4e4] rounded-full font-medium cursor-pointer text-[#333333]">
                        See More
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="bg-white py-4 px-3 rounded-xl border-[#e4e4e4] border ">
                  <p className="font-semibold text-2xl pb-2">
                    Automatic Blood Pressure
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 md:gap-3">
                    <img src={homeimg1} alt="" className="rounded-xl" />
                    <img src={homeimg2} alt="" className="rounded-xl" />
                    <img src={homeimg3} alt="" className="rounded-xl" />
                    <img src={homeimg4} alt="" className="rounded-xl" />
                  </div>
                   <Link to="/SeeMoreProduct">
                    <div className="flex items-center mt-3 justify-center  ">
                      <button className="py-3 w-[80%] md:w-[50%] border border-[#e4e4e4] rounded-full font-medium cursor-pointer text-[#333333]">
                        See More
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="bg-white py-4 px-3 rounded-xl border-[#e4e4e4] border ">
                  <p className="font-semibold text-2xl pb-2">
                    Automatic Blood Pressure
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 md:gap-3">
                    <img src={homeimg1} alt="" className="rounded-xl" />
                    <img src={homeimg2} alt="" className="rounded-xl" />
                    <img src={homeimg3} alt="" className="rounded-xl" />
                    <img src={homeimg4} alt="" className="rounded-xl" />
                  </div>
                  <Link to="/SeeMoreProduct">
                    <div className="flex items-center mt-3 justify-center  ">
                      <button className="py-3 w-[80%] md:w-[50%] border border-[#e4e4e4] rounded-full font-medium cursor-pointer text-[#333333]">
                        See More
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="bg-white py-4 px-3 rounded-xl border-[#e4e4e4] border ">
                  <p className="font-semibold text-2xl pb-2">
                    Automatic Blood Pressure
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 md:gap-3">
                    <img src={homeimg1} alt="" className="rounded-xl" />
                    <img src={homeimg2} alt="" className="rounded-xl" />
                    <img src={homeimg3} alt="" className="rounded-xl" />
                    <img src={homeimg4} alt="" className="rounded-xl" />
                  </div>
                <Link to="/SeeMoreProduct">
                    <div className="flex items-center mt-3 justify-center  ">
                      <button className="py-3 w-[80%] md:w-[50%] border border-[#e4e4e4] rounded-full font-medium cursor-pointer text-[#333333]">
                        See More
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="bg-white py-4 px-3 rounded-xl border-[#e4e4e4] border ">
                  <p className="font-semibold text-2xl pb-2">
                    Automatic Blood Pressure
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 md:gap-3">
                    <img src={homeimg1} alt="" className="rounded-xl" />
                    <img src={homeimg2} alt="" className="rounded-xl" />
                    <img src={homeimg3} alt="" className="rounded-xl" />
                    <img src={homeimg4} alt="" className="rounded-xl" />
                  </div>
                  <Link to="/SeeMoreProduct">
                    <div className="flex items-center mt-3 justify-center  ">
                      <button className="py-3 w-[80%] md:w-[50%] border border-[#e4e4e4] rounded-full font-medium cursor-pointer text-[#333333]">
                        See More
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default HomeProductInformation