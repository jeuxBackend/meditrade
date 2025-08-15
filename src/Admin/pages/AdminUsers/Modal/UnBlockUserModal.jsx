import React, { useState } from "react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";
import UnBlock from "../Assets/UnBlockImg.png";
import { FaTrash } from "react-icons/fa";

function UnBlockUserModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="bg-black/50 backdrop-blur-lg overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full poppins"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-center p-2 min-h-screen w-full">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="bg-[#F4F4F4] rounded-xl w-[98%] sm:w-[25rem] p-6 flex flex-col items-center justify-center gap-2"
        >
          <div className="mb-3">
            <img src={UnBlock} className="w-20" />
          </div>

          <h2 className="text-[20px] font-semibold">UnBlock User</h2>
          <p className="text-[#85909b]  text-center font-medium">
            Are you sure to unblock this
            <br className="md:block hidden" /> user?
          </p>

          <div className="flex flex-col justify-center items-center gap-3 mt-3 w-full">
            <button
              onClick={onConfirm}
              className="font-medium text-[18px] py-3 px-6 w-full  bg-[#e8e8e8] rounded-md cursor-pointer"
            >
              UnBlock
            </button>
            <button
              className=" font-medium text-[18px] text-[#978b8f] rounded-md py-2 px-6  cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
UnBlockUserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UnBlockUserModal;
