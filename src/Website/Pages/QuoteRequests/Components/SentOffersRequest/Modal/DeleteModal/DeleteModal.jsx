import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";

function DeleteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="bg-black/50 backdrop-blur-[2px] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 h-[calc(100%)] max-h-full poppins"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-center p-2 min-h-screen">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="bg-[#F4F4F4] rounded-xl w-[98%] sm:w-[30rem] p-6 flex flex-col items-center justify-center gap-2"
        >
          <div className="mb-3">
            <FaTrash className="text-red-500 text-[60px]" />
          </div>

          <h2 className="text-[20px] font-semibold">Delete</h2>
          <p className="text-[#85909b]  text-center font-medium">
            Are you sure you want to delete?
          </p>

          <div className="flex gap-3 mt-3 w-full">
            <button
              className="border-2 border-[#e6e7e9] font-medium text-[18px] rounded-md py-2 px-6 w-1/2 cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="font-medium text-[18px] py-2 px-6 w-1/2 text-white bg-[#fb2c36] rounded-md cursor-pointer">
              Delete
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
DeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteModal;
