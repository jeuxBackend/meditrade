import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import key from "./Assets/forgotkeyIcon.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import forgotsideImage from "./Assets/SignupImage.png";

function WebForgot() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen py-2 lg:h-[100vh] bg-white text-black w-full  flex justify-center items-center">
      <div className="w-1/2 h-screen hidden lg:block relative overflow-hidden">
        <motion.img
          src={forgotsideImage}
          alt="Background"
          className="w-full h-full p-3 object-cover rounded-[40px]"
        />

      </div>

      {/* Right side form */}
      <div className="w-full lg:w-[50%] mt-12  flex flex-col items-center justify-center  md:px-6">
        <motion.img
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src={key} alt="Logo" className="h-[90px]" />
        <div className="py-4 text-center">
          <h1 className="md:text-[36px] text-[24px] font-[700]">Forgot your password?</h1>
          <p className="text-[#333333] text-[12px] md:pr-6 font-[400] px-3">
            Enter your email address below and we'll send you password
            <br className="md:block hidden" />
            reset instructions.
          </p>
        </div>

        {/* Form */}
        <form className="w-full px-3 md:px-5 2xl:px-30">
          <label>
            <p className="text-left text-[16px] pt-2 pl-1 text-[#333333]  font-[400]">Email</p>
            <input
              type="email"
              placeholder="hi@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#333333] mt-2 py-3 px-3 w-full  bg-[#EBF1FF] rounded-[10px] outline-0"
            />
          </label>
          <div className="flex items-center  justify-center">
            <div>
              {/* Submit Button */}
              <Link to="/ResetPassword">
                <div className="text-center py-3 mt-15">
                  <button
                    type="button"
                    className="cursor-pointer text-[16px] text-white w-3/4 xl:w-[422px] bg-[#00427E] px-3 py-3 font-[400] rounded-[8px] transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    Send Reset Email
                  </button>
                </div>
              </Link>

              {/* Go Back */}
              <Link to="/Login">
                <div className="my-2 flex items-center justify-center">
                  <button className="bg-[#EFF2F6]   text-[#333333] font-[400] text-[16px]  w-3/4 xl:w-[422px] flex items-center justify-center px-4 py-3 cursor-pointer  rounded-[8px] transition-all duration-300 ease-in-out hover:scale-105">
                    <FaArrowLeftLong className="mr-3 my-1 text-[#333333] transition-all duration-300 ease-in-out hover:scale-105" />
                    Go to Login
                  </button>
                </div>
              </Link>

              <div className="flex items-center justify-center">
                <p className="text-[#8D9299] border-t-[1px] border-[#e6e6e8] my-3 py-3  w-3/4 md:w-[422px] text-[14px] text-center font-[400] mx-auto">
                  If you don't see your reset email be sure to check your spam filter for an email from{" "}
                  <span className="text-[#333333] font-bold">
                    support@meditradeinc.com
                  </span>
                </p>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WebForgot;

