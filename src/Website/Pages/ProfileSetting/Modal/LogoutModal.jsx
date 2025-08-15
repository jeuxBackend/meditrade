import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import closeicon from "./Assets/closeicon.png";
import logout from "./Assets/logout.png";
import { Link } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";

function LogoutModal({ openLogoutModal, closeLogoutModal }) {
  if (!openLogoutModal) return null;

  return (
    <motion.div
      className="bg-black/50 backdrop-blur-[2px] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <style>{`::-webkit-scrollbar { display: none; }`}</style>
      <div className="flex items-center justify-center  w-full min-h-screen px-2 sm:px-4">
        <motion.div
          className=" bg-white rounded-xl mx-2 sm:mx-3 w-full max-w-[35rem] relative flex flex-col items-center gap-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <HiMiniXMark
            onClick={closeLogoutModal}
            src={closeicon}
            className="absolute top-5 right-3 w-8 h-8 cursor-pointer"
          />
          

          <div className="text-center w-full py-13  pt-4 rounded-2xl">
           
          </div>
          <from className="w-[100%]  px-7 pt-6">
           
           <img src={logout} alt="" className="h-27 mx-auto" />
           <p className="font-semibold text-2xl text-center py-2">Log Out</p>
           <p className="text-[#979797] text-center font-medium">Are you sure to log out your account?</p>
           
            
          </from>

          <Link to='/' className="mb-5 flex items-center w-[100%] mt-10 justify-center">
            <button className="py-4 px-3 bg-[#00427e] font-[600] cursor-pointer text-lg w-[60%] rounded-lg text-white">
              Log Out
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

LogoutModal.propTypes = {
  openLogoutModal: PropTypes.bool.isRequired,
  closeLogoutModal: PropTypes.func.isRequired
};

export default LogoutModal;
