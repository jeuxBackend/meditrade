import React from "react";
import { motion } from "framer-motion";
import ProductImg from "../Assets/ProductImg.png";

const fadeInLeftDown = (delay = 0) => ({
  hidden: { opacity: 0, x: -50, y: -30 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const TopSellingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Advanced Dissection Kit Biology Lab Anatomy Dissecting Set with Stainless Steel Scalpel Knife Handle Blades for Medical",
      brand: "Rossmax",
      origin: "America",
      technicalSheet: "PDF download",
      sold: "10,922",
      img: ProductImg,
    },
    {
      id: 2,
      name: "Advanced Dissection Kit Biology Lab Anatomy Dissecting Set with Stainless Steel Scalpel Knife Handle Blades for Medical",
      brand: "Rossmax",
      origin: "America",
      technicalSheet: "PDF download",
      sold: "10,922",
      img: ProductImg,
    },
    {
      id: 3,
      name: "Advanced Dissection Kit Biology Lab Anatomy Dissecting Set with Stainless Steel Scalpel Knife Handle Blades for Medical",
      brand: "Rossmax",
      origin: "America",
      technicalSheet: "PDF download",
      sold: "10,922",
      img: ProductImg,
    },
  ];

  return (
    <div className="bg-[#fafafa] lg:ml-[295px]">
      <div className="md:p-6 p-3">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={fadeInLeftDown(index * 0.15)}
            initial="hidden"
            animate="show"
            className={`bg-white md:p-4 p-2 rounded-lg flex md:flex-nowrap flex-wrap gap-4 ${
              index !== 0 ? "my-4" : ""
            }`}
          >
            {/* Left side (fixed width) */}
            <div className="md:w-[180px] w-full flex-shrink-0">
              <img
                src={product.img}
                alt="Product"
                className="h-40 w-full rounded-lg object-cover"
              />
            </div>

            {/* Center (flex-grow, auto width) */}
            <div className="flex-grow w-full md:border-r-2 px-4 border-b-2 md:border-b-0 pb-3 border-[#adadad]">
              <p className="text-[21px] font-[400]">{product.name}</p>
              <div className="mt-4 grid md:grid-cols-3 grid-cols-1 gap-2">
                <div>
                  <p className="text-[18px] font-[400] text-[#999999]">
                    Brand:
                  </p>
                  <p className="text-[22px] font-[400]">{product.brand}</p>
                </div>
                <div>
                  <p className="text-[18px] font-[400] text-[#999999]">
                    Country of Origin:
                  </p>
                  <p className="text-[22px] font-[400]">{product.origin}</p>
                </div>
                <div>
                  <p className="text-[18px] font-[400] text-[#999999]">
                    Technical sheet:
                  </p>
                  <p className="text-[22px] font-[400] text-[#007CED]">
                    {product.technicalSheet}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side (fixed width) */}
            <div className="md:w-[120px] w-full flex-shrink-0 flex flex-col justify-center">
              <p className="text-[20px] font-[400]">Sold</p>
              <p className="text-[#00427E] text-[28px] font-[500]">
                {product.sold}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
