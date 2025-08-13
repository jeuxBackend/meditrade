import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import defaultImage from "../Assets/image1.png";
import TravelCardImg from "../Assets/TravelCardImg.png";
import arrowicon from "../Assets/Arrow.png";

const DetailUsersModal = ({ openModal, closeModal }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef();

  if (!openModal) return null;

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto px-2 md:px-4 py-10 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-[#FAFAFA] rounded-2xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="bg-white w-full h-[70px] rounded-xl">
          <button onClick={closeModal} className="absolute top-6 left-4">
            <img src={arrowicon} alt="Back" className="w-9 cursor-pointer" />
          </button>
          <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 md:top-[3%] top-[2%]">
            <img
              src={selectedImage || defaultImage}
              onClick={handleImageClick}
              alt="User"
              className="w-24 h-24 rounded-full object-cover cursor-pointer hover:opacity-90 transition"
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageChange}
            />
            <h2 className="text-xl sm:text-2xl font-semibold mt-2">
              Romas, Almas
            </h2>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-28 mx-6 bg-[#FFFFFF] p-5 rounded-2xl text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
            <div>
              <p className="text-[#ADADAD]">Email:</p>
              <p className="text-black font-medium">sara.cruz@example.com</p>
            </div>
            <div>
              <p className="text-[#ADADAD]">Phone Number:</p>
              <p className="text-black font-medium">(603) 555-0123</p>
            </div>
            <div>
              <p className="text-[#ADADAD]">City:</p>
              <p className="text-black font-medium">Celina, Delaware</p>
            </div>
            <div>
              <p className="text-[#ADADAD]">Address:</p>
              <p className="text-black font-medium">6391 Elgin St. 10299</p>
            </div>
            <div>
              <p className="text-[#ADADAD]">Status:</p>
              <div className="bg-[#34C75924] text-[#34A853] w-fit rounded-full px-6 py-1 mt-1 font-medium">
                Active
              </div>
            </div>
          </div>

          <div className="my-3">
            <p className="text-[#ADADAD]">Identity Card</p>
            <img src={TravelCardImg} className="w-70" alt="Identity Card" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center  items-center my-5">
          <button className="bg-[#E93F33] w-3/4 text-white text-lg cursor-pointer font-[500] text-[20px] rounded-md px-4 py-3 shadow-md hover:bg-[#d9382d] transition">
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

DetailUsersModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default DetailUsersModal;
