import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import closeicon from "./Assets/closeicon.png";

function VerifyCodeModal({
  openVerifyCodeModal,
  closeVerifyCodeModal,
  handleNext
}) {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  if (!openVerifyCodeModal) return null;

  // Handle input change
  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input
      if (value && index < 3) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  // Handle backspace to go to previous input
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <motion.div
      className="bg-black/50 backdrop-blur-[2px] fixed inset-0 z-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-center w-full min-h-screen px-2 sm:px-4">
        <motion.div
          className="bg-[#fafafa] rounded-xl mx-2 sm:mx-3 w-full max-w-[35rem] relative flex flex-col items-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Top header */}
          <div className="relative bg-white rounded-t-2xl flex items-center justify-center w-full py-4">
            <img
              onClick={closeVerifyCodeModal}
              src={closeicon}
              className="h-8 absolute left-2 top-4 cursor-pointer"
              alt="Close"
            />
            <p className="md:text-2xl text-lg font-semibold text-center">
              Verify your code
            </p>
          </div>

          {/* Code inputs */}
          <div className="flex gap-4 mt-8">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 sm:w-16 sm:h-16 text-center text-3xl font-bold rounded-full bg-white border border-gray-300 focus:outline-none "
              />
            ))}
          </div>

          {/* Verify button */}
          <div className="mb-8 flex items-center w-full mt-10 justify-center">
            <button
              onClick={() => handleNext()}
              className="py-4 px-3 bg-[#00427e] font-[600] text-lg w-[60%] rounded-lg text-white"
            >
              Verify
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

VerifyCodeModal.propTypes = {
  openVerifyCodeModal: PropTypes.bool.isRequired,
  closeVerifyCodeModal: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
};

export default VerifyCodeModal;
