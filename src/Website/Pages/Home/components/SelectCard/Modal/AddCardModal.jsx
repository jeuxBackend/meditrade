import React, { useState } from "react";
import PropTypes from "prop-types";
import closeicon from "./Assets/closeicon.png";

function AddCardModal({ openAddCardModal, closeAddCardModal }) {
  if (!openAddCardModal) return null;

  return (
    <div
      className="bg-black/50 backdrop-blur-[3px] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  h-[calc(100%)] max-h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <style>{`::-webkit-scrollbar { display: none; }`}</style>
      <div className="flex items-center justify-center w-full min-h-screen px-2 sm:px-4">
        <div
          className="bg-white pb-5 rounded-xl mx-2 sm:mx-3 w-full max-w-[35rem] relative flex flex-col items-center gap-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <img
            onClick={closeAddCardModal}
            src={closeicon}
            className="absolute top-4 left-3 w-8 h-8 cursor-pointer"
            alt="Close"
          />
          <div className="text-center w-full py-4  pt-4 rounded-2xl">
            <p className="text-xl sm:text-2xl font-semibold text-[#333333]">
              Add Card
            </p>
          </div>
          <form className=" w-full px-3 md:px-5  ">
            <div>
              <label className="text-[#333333]">Cardholder</label>
              <input
                type="text "
                placeholder="Name"
                className=" placeholder:text-[#8d8d92] my-2 w-full py-3 outline-0 bg-[#ebf1ff] rounded-xl px-3"
              />
            </div>
            <div>
              <label className="text-[#333333]">Card Number</label>
              <input
                type="text "
                placeholder="Card Number"
                className=" placeholder:text-[#8d8d92] my-2 w-full py-3 outline-0 bg-[#ebf1ff] rounded-xl px-3"
              />
            </div>
            <div className="flex items-center md:flex-nowrap flex-wrap gap-x-3">
                <div className="w-full">
              <label className="text-[#333333]">Expiry</label>
              <input
                type="text "
                placeholder="Validity"
                className=" placeholder:text-[#8d8d92] my-2 w-[100%]  py-3 outline-0 bg-[#ebf1ff] rounded-xl px-3"
              />
            </div>
              <div className="w-full">
              <label className="text-[#333333]">CVV</label>
              <input
                type="text "
                placeholder="CVV"
                className=" placeholder:text-[#8d8d92] my-2 w-[100%] py-3 outline-0 bg-[#ebf1ff] rounded-xl px-3"
              />
            </div>
                
            </div>
          </form>
          <div className="flex items-center justify-center mt-4 w-[90%] cursor-pointer">
            <button className="bg-[#00427e] py-3 rounded-lg w-[70%] font-semibold text-white">
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

AddCardModal.propTypes = {
  openAddCardModal: PropTypes.bool.isRequired,
  closeAddCardModal: PropTypes.func.isRequired
};

export default AddCardModal;
