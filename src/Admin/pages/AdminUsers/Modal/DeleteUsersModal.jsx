import React, { useState } from "react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";
import delImg from "../Assets/delImg.png";

function DeleteUsersModal({ isOpen, onClose }) {
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
          className="bg-[#ffffff] rounded-xl w-[98%] sm:w-[28rem] p-6 flex flex-col items-center justify-center gap-2"
        >
          <div className="mb-3">
            <img src={delImg} className="w-20" />
          </div>

          <h2 className="text-[20px] font-semibold">Delete User</h2>
          <p className="text-[#85909b]  text-center font-medium">
            Are you sure to unblock this <br className="md:block hidden" />{" "}
            user?
          </p>

          <div className="flex gap-3 flex-col mt-3 w-full">
            <button className="font-medium text-[18px] py-4 px-6 w-full  bg-[#f3f3f3] rounded-md cursor-pointer">
              Delete
            </button>
            <button
              className="border-2 border-[#e6e7e9] font-medium text-[18px] rounded-md py-4 px-6 w-full cursor-pointer"
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
DeleteUsersModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteUsersModal;
