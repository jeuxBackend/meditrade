import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import closeicon from "./Assets/closeicon.png";
import deleteimg from "./Assets/deleteimg.png";
import { Checkbox } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import image6 from "./Assets/image6.png";
import image7 from "./Assets/image7.png";
import image8 from "./Assets/image8.png";
import { BiMinus } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import bpimg4 from "./Assets/bpimg4.png";

function MyCart() {
  const [count, setCount] = useState(3);
   const navigate = useNavigate();

  const handleMinus = () => {
    if (count > 0) setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div className="px-3 md:px-7 py-4 mt-4">
      <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <img src={closeicon} alt="" className="h-8 md:h-9" />
      <p className="text-xl md:text-2xl font-semibold text-[#333333]">My Cart</p>
    </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
        <div className="col-span-1 lg:col-span-2 space-y-3 mt-5">
          <div className="bg-white py-3 px-4 flex flex-wrap items-center justify-between gap-3 rounded-xl">
            <div className="flex items-center gap-3">
              <Checkbox
                icon={
                  <span className="w-5 h-5 border border-[#333333] rounded-sm" />
                }
                checkedIcon={
                  <span className="w-5 h-5 bg-white flex items-center justify-center border border-[#333333] rounded-sm">
                    <CheckIcon sx={{ fontSize: 16, color: "black" }} />
                  </span>
                }
              />
              <p className="text-[#333333] text-sm md:text-base font-medium">
                Select All (2 selected)
              </p>
            </div>
            <div className="flex items-center cursor-pointer gap-2">
              <img src={deleteimg} alt="" className="h-6 md:h-7" />
              <p className="text-[#c7493e] text-sm md:text-base font-medium">
                Remove
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white py-3 px-4 flex flex-col sm:flex-row items-start justify-between gap-4 rounded-xl">
              <div className="flex items-start sm:items-center">
                <Checkbox
                  icon={
                    <span className="w-5 h-5 border border-[#333333] rounded-sm" />
                  }
                  checkedIcon={
                    <span className="w-5 h-5 bg-white flex items-center justify-center border border-[#333333] rounded-sm">
                      <CheckIcon sx={{ fontSize: 16, color: "black" }} />
                    </span>
                  }
                />
                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap ">
                  <img src={image6} alt="" className="w-40 h-40 " />
                  <div className="mx-auto">
                    <p className="text-[#333333] py-1 font-semibold text-lg md:text-2xl">
                      Automatic Blood Pressure
                    </p>
                    <div className="flex flex-wrap justify-between gap-4">
                      <div>
                        <p className="text-[#8f8f8f] text-sm">Brand:</p>
                        <p className="font-semibold text-[#333333] text-base md:text-lg">
                          Rossmax
                        </p>
                      </div>
                      <div>
                        <p className="text-[#8f8f8f] text-sm">
                          Country of Origin:
                        </p>
                        <p className="font-semibold text-[#333333] text-base md:text-lg">
                          America
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-nowrap items-center mx-auto sm:mx-0 text-sm md:text-base">
                <p className="text-[#8f8f8f] py-2">
                  Total Price:{" "}
                  <span className="text-[#333333] font-semibold text-lg md:text-2xl">
                    $100.00
                  </span>
                </p>
                <div className="flex flex-row  sm:flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      onClick={handleMinus}
                      className="bg-[#ebf1ff] p-2 rounded-sm cursor-pointer"
                    >
                      <BiMinus className="text-base md:text-lg" />
                    </div>
                    <p className="font-semibold text-lg">{count}</p>
                    <div
                      onClick={handlePlus}
                      className="bg-[#ebf1ff] p-2 rounded-sm cursor-pointer"
                    >
                      <PiPlus className="text-base md:text-lg" />
                    </div>
                  </div>
                  <div className="flex items-center cursor-pointer gap-2">
                    <img src={deleteimg} alt="" className="h-6 md:h-7" />
                    <p className="text-[#c7493e] font-medium">Remove</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white py-3 px-4 flex flex-col sm:flex-row items-start justify-between gap-4 rounded-xl">
              <div className="flex items-start sm:items-center">
                <Checkbox
                  icon={
                    <span className="w-5 h-5 border border-[#333333] rounded-sm" />
                  }
                  checkedIcon={
                    <span className="w-5 h-5 bg-white flex items-center justify-center border border-[#333333] rounded-sm">
                      <CheckIcon sx={{ fontSize: 16, color: "black" }} />
                    </span>
                  }
                />
                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap ">
                  <img src={bpimg4} alt="" className="w-40 h-40 " />
                  <div className="mx-auto">
                    <p className="text-[#333333] py-1 font-semibold text-lg md:text-2xl">
                      Automatic Blood Pressure
                    </p>
                    <div className="flex flex-wrap justify-between gap-4">
                      <div>
                        <p className="text-[#8f8f8f] text-sm">Brand:</p>
                        <p className="font-semibold text-[#333333] text-base md:text-lg">
                          Rossmax
                        </p>
                      </div>
                      <div>
                        <p className="text-[#8f8f8f] text-sm">
                          Country of Origin:
                        </p>
                        <p className="font-semibold text-[#333333] text-base md:text-lg">
                          America
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-nowrap  items-center mx-auto sm:mx-0 text-sm md:text-base">
                <p className="text-[#8f8f8f] py-2">
                  Total Price:{" "}
                  <span className="text-[#333333] font-semibold text-lg md:text-2xl">
                    $100.00
                  </span>
                </p>
                <div className="flex flex-row  sm:flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      onClick={handleMinus}
                      className="bg-[#ebf1ff] p-2 rounded-sm cursor-pointer"
                    >
                      <BiMinus className="text-base md:text-lg" />
                    </div>
                    <p className="font-semibold text-lg">{count}</p>
                    <div
                      onClick={handlePlus}
                      className="bg-[#ebf1ff] p-2 rounded-sm cursor-pointer"
                    >
                      <PiPlus className="text-base md:text-lg" />
                    </div>
                  </div>
                  <div className="flex items-center cursor-pointer gap-2">
                    <img src={deleteimg} alt="" className="h-6 md:h-7" />
                    <p className="text-[#c7493e] font-medium">Remove</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white py-3 px-4 flex flex-col sm:flex-row items-start justify-between gap-4 rounded-xl">
              <div className="flex items-start sm:items-center">
                <Checkbox
                  icon={
                    <span className="w-5 h-5 border border-[#333333] rounded-sm" />
                  }
                  checkedIcon={
                    <span className="w-5 h-5 bg-white flex items-center justify-center border border-[#333333] rounded-sm">
                      <CheckIcon sx={{ fontSize: 16, color: "black" }} />
                    </span>
                  }
                />
                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap ">
                  <img src={image7} alt="" className="w-40 h-40 " />
                  <div className="mx-auto">
                    <p className="text-[#333333] py-1 font-semibold text-lg md:text-2xl">
                      Automatic Blood Pressure
                    </p>
                    <div className="flex flex-wrap justify-between gap-4">
                      <div>
                        <p className="text-[#8f8f8f] text-sm">Brand:</p>
                        <p className="font-semibold text-[#333333] text-base md:text-lg">
                          Rossmax
                        </p>
                      </div>
                      <div>
                        <p className="text-[#8f8f8f] text-sm">
                          Country of Origin:
                        </p>
                        <p className="font-semibold text-[#333333] text-base md:text-lg">
                          America
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-nowrap items-center mx-auto sm:mx-0 text-sm md:text-base">
                <p className="text-[#8f8f8f] py-2">
                  Total Price:{" "}
                  <span className="text-[#333333] font-semibold text-lg md:text-2xl">
                    $100.00
                  </span>
                </p>
                <div className="flex flex-row  sm:flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      onClick={handleMinus}
                      className="bg-[#ebf1ff] p-2 rounded-sm cursor-pointer"
                    >
                      <BiMinus className="text-base md:text-lg" />
                    </div>
                    <p className="font-semibold text-lg">{count}</p>
                    <div
                      onClick={handlePlus}
                      className="bg-[#ebf1ff] p-2 rounded-sm cursor-pointer"
                    >
                      <PiPlus className="text-base md:text-lg" />
                    </div>
                  </div>
                  <div className="flex items-center cursor-pointer gap-2">
                    <img src={deleteimg} alt="" className="h-6 md:h-7" />
                    <p className="text-[#c7493e] font-medium">Remove</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white py-3 px-4 flex flex-col sm:flex-row items-start justify-between gap-4 rounded-xl">
              <div className="flex items-start sm:items-center">
                <Checkbox
                  icon={
                    <span className="w-5 h-5 border border-[#333333] rounded-sm" />
                  }
                  checkedIcon={
                    <span className="w-5 h-5 bg-white flex items-center justify-center border border-[#333333] rounded-sm">
                      <CheckIcon sx={{ fontSize: 16, color: "black" }} />
                    </span>
                  }
                />
                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap ">
                  <img src={image8} alt="" className="w-40 h-40 " />
                  <div className="mx-auto">
                    <p className="text-[#333333] py-1 font-semibold text-lg md:text-2xl">
                      Automatic Blood Pressure
                    </p>
                    <div className="flex flex-wrap justify-between gap-4">
                      <div>
                        <p className="text-[#8f8f8f] text-sm">Brand:</p>
                        <p className="font-semibold text-[#333333] text-base md:text-lg">
                          Rossmax
                        </p>
                      </div>
                      <div>
                        <p className="text-[#8f8f8f] text-sm">
                          Country of Origin:
                        </p>
                        <p className="font-semibold text-[#333333] text-base md:text-lg">
                          America
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-nowrap items-center mx-auto sm:mx-0 text-sm md:text-base">
                <p className="text-[#8f8f8f] py-2">
                  Total Price:{" "}
                  <span className="text-[#333333] font-semibold text-lg md:text-2xl">
                    $100.00
                  </span>
                </p>
                <div className="flex flex-row  sm:flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      onClick={handleMinus}
                      className="bg-[#ebf1ff] p-2 rounded-sm cursor-pointer"
                    >
                      <BiMinus className="text-base md:text-lg" />
                    </div>
                    <p className="font-semibold text-lg">{count}</p>
                    <div
                      onClick={handlePlus}
                      className="bg-[#ebf1ff] p-2 rounded-sm cursor-pointer"
                    >
                      <PiPlus className="text-base md:text-lg" />
                    </div>
                  </div>
                  <div className="flex items-center cursor-pointer gap-2">
                    <img src={deleteimg} alt="" className="h-6 md:h-7" />
                    <p className="text-[#c7493e] font-medium">Remove</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-5">
          <div className="bg-white rounded-xl px-5 py-5">
            <p className="font-semibold text-2xl text-[#333333]">
              Order Summery
            </p>
            <div className="border-b-2 border-dashed border-[#a3a3a3] py-3">
              <div className="flex items-center justify-between py-2 text-[#333333]">
                <p className="font-medium">Subtotal (2 items):</p>
                <p className="font-semibold text-xl">$200.00</p>
              </div>
              <div className="flex items-center justify-between text-[#333333] ">
                <p className="font-medium">Shipping Fee:</p>
                <p className="font-semibold text-xl">$10.09</p>
              </div>
            </div>
            <div className="border-b-2 border-dashed border-[#a3a3a3] py-3">
              <div className="flex items-center justify-between py-2 text-[#333333]">
                <p className="font-medium">Total:</p>
                <p className="font-semibold text-xl">$210.00</p>
              </div>
              <div className="flex items-center justify-between text-[#333333] ">
                <p className="font-medium">Use Loyalty Points:</p>
                <p className="font-semibold text-xl bg-[#ebf1ff] py-1 px-7 rounded-md">
                  00
                </p>
              </div>
            </div>
            <div className="border-b-2 border-dashed border-[#a3a3a3] py-3">
              <div className="flex items-center justify-between py-2 text-[#333333]">
                <p className="font-medium">Total Payable:</p>
                <p className="font-semibold text-xl">$210.00</p>
              </div>
            </div>
            <div className="mt-5 px-5">
            <Link to="/DeliveryInformation">
              <div className="flex items-center my-3 justify-center w-[100%]  bg-[#00427e] cursor-pointer py-3 text-white gap-2 rounded-md">
                <p className="text-nowrap text-sm lg:text-base">
                  Proceed To Checkout (2)
                </p>
              </div>
            </Link>
              <div className="flex items-center justify-center cursor-pointer w-[100%]  font-medium bg-[#eaebfc]  py-3 text-[#333333] gap-2 rounded-md">
                <p className="text-sm lg:text-base">Request a Quote</p>
              </div>
              <p className="text-center py-2 text-[#333333] font-medium">
                Submit a Quote Request for Bulk Purchase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
