import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import closeicon from "./Assets/closeicon.png";
import { HiMiniXMark } from "react-icons/hi2";

function ChangeEmailModal({ openChangeEmailModal, closeChangeEmailModal,  handleNext, }) {
  if (!openChangeEmailModal) return null;

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
          className=" bg-[#fafafa] rounded-xl mx-2 sm:mx-3 w-full max-w-[35rem] relative flex flex-col items-center gap-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative bg-white rounded-t-2xl  flex items-center justify-center w-full py-4">
            {/* Arrow icon on the left */}
            <img
              onClick={closeChangeEmailModal}
              src={closeicon}
              className="h-8 absolute left-2 top-4 cursor-pointer"
            />
            <p className="md:text-2xl  text-lg font-semibold text-center">
             Change Email
            </p>
          </div>

          <from className="w-[100%]  px-7 pt-6">
          <div className="relative">
            <label className="font-semibold">Enter your Email</label>
            <input
              type="Text"
              placeholder="@exapmle.com"
              className="placeholder:text-black w-full mt-2 bg-[#eff2f6] px-3 py-3 rounded-lg focus:outline-none"
            />
          </div>
          </from>

          <div className="mb-5 flex items-center w-[100%] mt-10 justify-center">
            <button
             onClick={handleNext}
             className="py-4 px-3 bg-[#00427e] font-[600] cursor-pointer text-lg w-[60%] rounded-lg text-white">
              Get Otp
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

ChangeEmailModal.propTypes = {
  openChangeEmailModal: PropTypes.bool.isRequired,
  closeChangeEmailModal: PropTypes.func.isRequired,
   handleNext: PropTypes.func.isRequired,
};

export default ChangeEmailModal;
