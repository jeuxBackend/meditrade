import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import reseticon from "./Assets/ResetIcon.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import resetsideImage from "./Assets/SignupImage.png";

function WebResetPassword() {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  return (
    <div className="h-[100vh] bg-white text-black w-full inter flex items-center justify-center">
      <div className="w-1/2 h-screen hidden lg:block relative overflow-hidden">
        <img
          src={resetsideImage}
          alt="Background"
          className="w-full h-full p-3 object-cover rounded-[40px]"
        />
      </div>

      <div className="w-full lg:w-[50%] mt-6 flex flex-col items-center justify-center px-6">
        <motion.img
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src={reseticon} alt="Reset Icon" className="h-[90px]" />
        <div className="py-4 text-center">
          <h1 className="md:text-[36px] text-[24px] font-[700]">Reset Password</h1>
          <p className="text-[#333333] text-[12px] font-[400] px-3">
            Create a new password for your account by filling out
            <br className="md:block hidden" />
            the form below
          </p>
        </div>

        <form className="w-full md:px-5 2xl:px-30" >
          <div className="relative">
            <label>
              <p className="text-left py-2 text-[#333333]  text-[16px] font-[400]">New Password</p>
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="************"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="placeholder:text-[15px] placeholder:text-black py-3 bg-[#EBF1FF] pr-10 px-3 w-full rounded-[10px] outline-0"
              />

              {showNewPassword ? (
                <IoEyeOutline
                  onClick={handleShowNewPassword}
                  className="absolute right-3 top-14 text-lg text-[#777e90] cursor-pointer"
                />
              ) : (
                <IoEyeOffOutline
                  onClick={handleShowNewPassword}
                  className="absolute right-3 top-14 text-lg text-[#777e90] cursor-pointer"
                />
              )}
            </label>
          </div>

          <div className="relative mt-4">
            <label>
              <p className="text-left py-2 text-[#333333] text-[16px] font-[400]">Confirm Password</p>

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="************"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="placeholder:text-[15px] placeholder:text-black  py-3 bg-[#EBF1FF] pr-10 px-3 w-full  rounded-[10px] outline-0"
              />
              {showConfirmPassword ? (
                <IoEyeOutline
                  onClick={handleShowConfirmPassword}
                  className="absolute right-3 top-14 text-lg text-[#777e90] cursor-pointer"
                />
              ) : (
                <IoEyeOffOutline
                  onClick={handleShowConfirmPassword}
                  className="absolute right-3 top-14 text-lg text-[#777e90] cursor-pointer"
                />
              )}
            </label>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full">
              <div className="text-center py-3 mt-6">
                <button
                  type="button"
                  className="cursor-pointer text-[16px] text-white w-3/4 xl:w-[422px] bg-[#00427E] px-3 py-3 font-[400] rounded-[8px] transition-all duration-300 ease-in-out hover:scale-105"

                >
                  Reset Password
                </button>
              </div>

              <Link to="/Login">
                <div className="my-2 flex items-center justify-center">
                  <button className="bg-[#EFF2F6]   text-[#333333] font-[400] text-[16px]  w-3/4 xl:w-[422px] flex items-center justify-center px-4 py-3 cursor-pointer  rounded-[8px] transition-all duration-300 ease-in-out hover:scale-105">
                    <FaArrowLeftLong className="mr-3 my-1 text-[#333333] transition-all duration-300 ease-in-out hover:scale-105" />
                    Go to Login
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WebResetPassword;
