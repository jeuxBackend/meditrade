import React, { useState } from "react";
import UploadImg from "../../Assets/UploadImg.png";
import CloseImg from "../../Assets/CloseImg.png";
import AddProductImg1 from "../../Assets/CategoriesImg 2.png";
import AddProductImg2 from "../../Assets/CategoriesImg 4.png";
import AddProductImg3 from "../../Assets/CategoriesImg 9.png";
import { IoIosArrowDown } from "react-icons/io";
import closeImg from "../../Assets/CloseImg.png";
import PdfImg from "../../Assets/PdfImg.png";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import AddPriceDoctorModal from "../Modal/AddPriceDoctorModal";

const AddProduct = () => {
  const [AddDoctorPrice, setAddDoctorPrice] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const brands = ["Pfizer", "Novartis", "Johnson & Johnson", "Roche", "Sanofi"];

  // Initial images
  const [images, setImages] = useState([
    AddProductImg1,
    AddProductImg2,
    AddProductImg3,
  ]);
 // Add
  const openModal = () => setAddDoctorPrice(true);
  const closeModal = () => setAddDoctorPrice(false);
  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  // Handle image remove
  const handleRemove = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // File upload pdf
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="bg-[#fafafa] lg:ml-[295px]">
       <AddPriceDoctorModal openModal={AddDoctorPrice} closeModal={closeModal} />
      <style>{`::-webkit-scrollbar { display: none; }`}</style>
      <div className="md:p-6 p-4">
        {/* image section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4"
        >
          {/* Upload Box */}
          <label className="border-2 border-[#d8d8d8] border-dashed p-3 h-48 rounded-2xl flex justify-center items-center flex-col cursor-pointer">
            <img src={UploadImg} className="w-9" alt="Upload" />
            <p className="font-[400] text-[15px] text-[#d8d8d8]">Add More</p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          {/* Render Images */}
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <img
                src={img}
                alt={`Uploaded-${index}`}
                className="object-cover w-full shadow rounded-2xl h-48"
              />
              <img
                src={CloseImg}
                alt="Remove"
                className="w-6 absolute top-3 right-3 cursor-pointer"
                onClick={() => handleRemove(index)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Form section */}
        <form className="w-full my-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            {/* Product Name */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <label className="font-medium text-[16px]">Product Name</label>
              <input
                type="text"
                className="p-3 w-full mt-2 outline-none border border-[#f0f0f1] bg-white rounded-lg"
                placeholder="Enter"
              />
            </motion.div>

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <label className="font-medium text-[16px]">Brand</label>
              <div
                className="p-3 mt-2 border border-[#f0f0f1] bg-white rounded-lg flex justify-between items-center cursor-pointer relative"
                onClick={() => setOpen(!open)}
              >
                <span
                  className={`w-full ${
                    selected ? "text-black" : "text-gray-400"
                  }`}
                >
                  {selected || "Select Brand"}
                </span>
                <IoIosArrowDown
                  className={`transform transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
                {open && (
                  <ul className="absolute top-[110%] left-0 w-full bg-white border border-[#f0f0f1] rounded-lg shadow-lg z-10">
                    {brands.map((brand, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelected(brand);
                          setOpen(false);
                        }}
                      >
                        {brand}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>

            {/* Country of Origin */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <label className="font-medium text-[16px]">
                Country of Origin
              </label>
              <input
                type="text"
                className="p-3 w-full mt-2 outline-none border border-[#f0f0f1] bg-white rounded-lg"
                placeholder="Enter"
              />
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <label className="font-medium text-[16px]">Company</label>
              <input
                type="text"
                className="p-3 w-full mt-2 outline-none border border-[#f0f0f1] bg-white rounded-lg"
                placeholder="Enter"
              />
            </motion.div>

            {/* Technical sheet */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <label className="font-medium text-[16px]">Technical sheet</label>
              <div className="relative p-3 mt-2 border border-[#f0f0f1] bg-white rounded-lg">
                {!file ? (
                  <label className="flex flex-col justify-center items-center h-28 cursor-pointer">
                    <img src={UploadImg} alt="Upload" className="w-12" />
                    <p className="text-gray-400 text-sm mt-1">Upload File</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="flex justify-center items-center h-28">
                    <img src={PdfImg} className="w-14" alt="PDF" />
                    <p className="ml-2 text-sm text-gray-700 truncate max-w-[120px]">
                      {file.name}
                    </p>
                  </div>
                )}
                {file && (
                  <img
                    src={CloseImg}
                    className="w-7 absolute top-2 right-2 cursor-pointer"
                    alt="Remove"
                    onClick={handleRemoveFile}
                  />
                )}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <label className="font-medium text-[16px]">Description</label>
              <textarea
                type="text"
                className="p-3 h-34 w-full mt-2 outline-none border border-[#f0f0f1] bg-white rounded-lg"
                placeholder="Enter"
              />
            </motion.div>
          </div>

          <p className="border my-5 border-[#a3a3a3] rounded-2xl border-dashed w-full"></p>

          {/* price list */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[500] text-[24px]"
          >
            Price List
          </motion.p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div >
              <p className="font-medium text-[16px]">Doctor</p>
              <div className="border border-[#f0f0f1] mt-2 bg-white items-center flex justify-between rounded-lg p-3 w-full cursor-pointer"   onClick={openModal}>
                Enter
                <IoIosArrowForward />
              </div>
            </div>
            {["Hospital/Clinic", "Laboratory", "Pharmacy", "Distributor"].map(
              (label, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="w-full"
                >
                  <label className="font-medium text-[16px]">{label}</label>
                  <input
                    type="text"
                    className="p-3 w-full mt-2 outline-none border border-[#f0f0f1] bg-white rounded-lg"
                    placeholder="Enter"
                  />
                </motion.div>
              )
            )}
          </div>
        </form>

        {/* button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-end gap-4 md:flex-nowrap flex-wrap"
        >
          <button className="border rounded-md font-medium border-[#f0f0f1] cursor-pointer p-4 md:w-1/4 w-full bg-white">
            Cancel
          </button>
          <button className="rounded-md font-medium cursor-pointer p-4 md:w-1/4 w-full bg-[#00427e] text-white">
            Add Product
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AddProduct;
