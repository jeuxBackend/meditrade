import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import ProductImg from "../Assets/ProductImg.jpg";
import MenuImg from "../Assets/MenuImg.png";
import PdfImg from "../Assets/PdfImg.png";
import DownloadImg from "../Assets/DownloadImg.png";

const productData = [
  {
    id: 1,
    name: "Automatic Blood Pressure",
    brand: "Rossmax",
    country: "America",
    company: "America",
    description: "Quam bibendum sit nec egestas facilisis molestie nisi sit sed....",
    prices: {
      doctor: "$100.00 + $10(Tax)",
      hospital: "$100.00 + $10(Tax)",
      lab: "$100.00 + $10(Tax)",
      pharmacy: "$100.00 + $10(Tax)",
      distributor: "$100.00 + $10(Tax)",
    },
    sold: "10,922",
    image: ProductImg,
  },
  {
    id: 2,
    name: "Automatic Blood Pressure",
    brand: "Rossmax",
    country: "America",
    company: "America",
    description: "Quam bibendum sit nec egestas facilisis molestie nisi sit sed....",
    prices: {
      doctor: "$100.00 + $10(Tax)",
      hospital: "$100.00 + $10(Tax)",
      lab: "$100.00 + $10(Tax)",
      pharmacy: "$100.00 + $10(Tax)",
      distributor: "$100.00 + $10(Tax)",
    },
    sold: "10,922",
    image: ProductImg,
  },
];

const Products = () => {
  const [menuOpenId, setMenuOpenId] = useState(null);

  const toggleMenu = (id) => {
    setMenuOpenId(menuOpenId === id ? null : id);
  };

  return (
    <div className="bg-[#fafafa] lg:ml-[295px]">
      <style>{`::-webkit-scrollbar { display: none; }`}</style>
      <div className="md:p-6 p-4">
        {/* button section */}
        <div className="flex gap-4 items-center justify-between md:flex-nowrap flex-wrap">
          {/* Title */}
          <div>
            <p className="font-[500] text-[28px]">
              Scalpel <span className="text-[22px]">({productData.length})</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 items-center flex-wrap">
            <motion.button
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="bg-[#00427e] cursor-pointer hover:bg-[#003366] transition-all text-[16px] text-white px-5 py-3 flex gap-2 md:w-auto w-full rounded-lg justify-center items-center"
            >
              <FiPlus className="text-lg" />
              <span className="whitespace-nowrap">Import CSV</span>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="bg-[#00427e] cursor-pointer hover:bg-[#003366] transition-all text-[16px] text-white px-5 py-3 flex gap-2 md:w-auto w-full rounded-lg justify-center items-center"
            >
              <FiPlus className="text-lg" />
              <span className="whitespace-nowrap">Add Product</span>
            </motion.button>
          </div>
        </div>

        {/* Product Cards */}
        {productData.map((product) => (
          <div
            key={product.id}
            className="my-4 bg-white rounded-lg p-4 flex md:flex-nowrap flex-wrap gap-4"
          >
            {/* Left Side */}
            <div className="relative md:w-64 w-full">
              <img
                src={product.image}
                className="w-full h-full rounded-lg object-cover"
                alt={product.name}
              />
              <img
                src={MenuImg}
                className="w-8 absolute top-3 right-3 cursor-pointer"
                alt="Menu"
                onClick={() => toggleMenu(product.id)}
              />
              {/* Dropdown Menu */}
              {menuOpenId === product.id && (
                <div className="absolute top-12 right-3 bg-white shadow-lg rounded-lg p-2 z-10">
                  <p className="p-2 hover:bg-gray-100 cursor-pointer">Edit</p>
                  <p className="p-2 hover:bg-gray-100 cursor-pointer">Delete</p>
                  <p className="p-2 hover:bg-gray-100 cursor-pointer">View</p>
                </div>
              )}
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-2 w-full">
              <div className="w-full">
                <div className="flex justify-between items-center gap-3 flex-wrap">
                  <p className="font-[400] text-[25px]">{product.name}</p>

                  {/* PDF Download */}
                  <div className="border-2 border-[#d9d9d9] p-2 rounded-xl flex gap-3 items-center">
                    <img src={PdfImg} className="w-10" alt="PDF" />
                    <div>
                      <p className="font-[500] text-[13px]">Technical sheet:</p>
                      <p className="font-[400] text-[10px] text-[#8C959A]">
                        PDF download
                      </p>
                    </div>
                    <img src={DownloadImg} className="w-8" alt="Download" />
                  </div>
                </div>

                {/* Details */}
                <div className="grid md:grid-cols-6 grid-cols-2 py-3 gap-3">
                  <div>
                    <p className="text-[14px] text-[#999999] font-[400]">Brand:</p>
                    <p className="text-[17px] font-[400]">{product.brand}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#999999] font-[400]">
                      Country of Origin:
                    </p>
                    <p className="text-[17px] font-[400]">{product.country}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#999999] font-[400]">Company:</p>
                    <p className="text-[17px] font-[400]">{product.company}</p>
                  </div>
                </div>

                <div className="border-b-2 border-dashed border-[#a3a3a3] pb-6">
                  <p className="text-[14px] text-[#999999] font-[400]">Description:</p>
                  <p className="text-[17px] font-[400]">{product.description}</p>
                </div>
              </div>

              {/* Price List */}
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <p className="font-[400] text-[25px]">Price List</p>
                </div>

                <div className="grid md:grid-cols-6 grid-cols-2 py-3 gap-3 border-b-2 border-[#a3a3a3] border-dashed">
                  <div>
                    <p className="text-[14px] text-[#999999] font-[400]">Doctor:</p>
                    <p className="text-[17px] font-[400]">{product.prices.doctor}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#999999] font-[400]">
                      Hospital/Clinic:
                    </p>
                    <p className="text-[17px] font-[400]">{product.prices.hospital}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#999999] font-[400]">Laboratory:</p>
                    <p className="text-[17px] font-[400]">{product.prices.lab}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#999999] font-[400]">Pharmacy:</p>
                    <p className="text-[17px] font-[400]">{product.prices.pharmacy}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#999999] font-[400]">Distributor:</p>
                    <p className="text-[17px] font-[400]">{product.prices.distributor}</p>
                  </div>
                </div>

                {/* Sold & Button */}
                <div className="flex gap-3 items-center flex-wrap md:justify-end justify-center mt-3">
                  <p className="font-[500] text-[#00427e] text-[28px]">
                    {product.sold}
                    <span className="text-[19px] text-black font-[400]"> Sold</span>
                  </p>
                  <motion.button
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="bg-[#00427e] cursor-pointer hover:bg-[#003366] transition-all text-[16px] text-white px-5 py-3 flex gap-2 md:w-auto w-full rounded-lg justify-center items-center"
                  >
                    <span className="whitespace-nowrap">View Details</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
