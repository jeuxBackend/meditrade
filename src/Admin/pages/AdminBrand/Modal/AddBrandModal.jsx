import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import arrowicon from "../Assets/BackArrowImg.png";

const AddBrandModal = ({ openModal, closeModal }) => {
  if (!openModal) return null;

  return (
    <motion.div
      className="bg-black/50 backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full poppins"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <style>{`::-webkit-scrollbar { display: none; }`}</style>
      <div className="flex items-center justify-center p-2 min-h-screen">
        <motion.div
          className="bg-[#FAFAFA] rounded-2xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="bg-white w-full h-[70px] rounded-xl">
            <div className="flex justify-center items-center">
              <button onClick={closeModal} className="absolute top-6 left-4">
                <img
                  src={arrowicon}
                  alt="Back"
                  className="w-9 cursor-pointer"
                />
              </button>
              <p className="absolute top-6 font-[500] text-[20px]">Add Brand</p>
            </div>
          </div>

          {/* Form */}
          <div className="px-5 mt-6">
            <form>
              <label className="font-[500] text-[16px]">Brand Name</label>
              <input
                type="text"
                className="w-full mt-2 outline-none font-medium p-4 border border-[#d5d5d6] rounded-lg"
                placeholder="Enter Brand Name"
              />
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center my-5">
            <button className="bg-[#00427e] w-3/4 text-white text-lg cursor-pointer font-[500] text-[20px] rounded-md px-3 py-3 shadow-md hover:bg-[#2d6396] transition">
              Add
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

AddBrandModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AddBrandModal;
