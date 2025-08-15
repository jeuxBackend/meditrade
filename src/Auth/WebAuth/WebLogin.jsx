import React, { useState } from "react";
import { motion } from 'framer-motion';
import LoginbgImage from "./Assets/LoginbgImage.png";
import { Link } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";

function WebLogin() {
  const [showPasswords, setShowPasswords] = useState(false);

  const handlerPassword = () => {
    setShowPasswords(!showPasswords);
  };

  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-top"
        style={{
          backgroundImage: `url(${LoginbgImage})`,
        }}
      >

        <div className="flex gap-5  right-6 top-5 absolute z-20">
          <motion.button
            whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="text-white custom-border-button w-[90px] bg-black/10 bg-opacity-50 py-2.5 px-2">
            EN
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="text-white custom-border-button w-[90px] rounded-[8px] bg-black/10 bg-opacity-50 py-2.5 px-2">
            USD ($)
          </motion.button>
        </div>



        <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center overflow-y-auto pt-10">
          <div className="w-full md:w-auto my-auto px-4 z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-3xl p-0.5 custom-border-box">
              <div className="md:w-[600px] w-full bg-black/10 bg-opacity-50 rounded-3xl py-4 px-4 md:p-8">
                <h1 className="text-4xl text-white font-[500] text-center">
                  Welcome back!
                </h1>

                <form className="mt-4">
                  <div className="mt-2">
                    <p className="text-white font-[400]">Email</p>
                    <input
                      type="text"
                      placeholder="hi@example.com"
                      className="placeholder:text-[15px] mt-2 placeholder:text-white py-3 px-3 w-full text-white border border-white rounded-[8px] outline-0 bg-transparent"
                    />
                  </div>

                  <div className="relative mt-2">
                    <p className="text-white font-[400]">Password</p>
                    <input
                      type={showPasswords ? "text" : "password"}
                      placeholder="***********"
                      className="placeholder:text-[15px] placeholder:text-white mt-2 py-3 px-3 pr-12 w-full border border-white text-white rounded-[8px] outline-0 bg-transparent"
                    />
                    {showPasswords ? (
                      <IoEyeOutline
                        onClick={handlerPassword}
                        className="text-white absolute right-4 top-12 text-[19px] cursor-pointer"
                      />
                    ) : (
                      <IoEyeOffOutline
                        onClick={handlerPassword}
                        className="text-white absolute right-4 top-12 text-[19px] cursor-pointer"
                      />
                    )}
                  </div>

                  <Link to="/Forgot">
                    <div className="text-right pt-2 text-white cursor-pointer">
                      <p>Forgot Password?</p>
                    </div>
                  </Link>

                  <Link to="/Home">
                    <button
                      type="submit"
                      className="mt-3 rounded-[8px] bg-[#00427E] text-white cursor-pointer mx-auto block py-3 md:w-3/4 w-full"
                    >
                      Login
                    </button>
                  </Link>

                  {/* Optional: Go to login/home */}
                  {/* <Link to="/">
                  <div className="mt-4 rounded-[10px] bg-white flex items-center justify-center gap-x-2 font-bold text-black cursor-pointer py-4 w-full">
                    <FaArrowLeftLong />
                    <span>Go to Login</span>
                  </div>
                </Link> */}
                </form>

                <div className="text-center mt-4">
                  <p className="text-white">
                    Don't have an account?{" "}
                    <Link to="/Signup" className="text-[#00427E] font-bold text-lg">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebLogin;
