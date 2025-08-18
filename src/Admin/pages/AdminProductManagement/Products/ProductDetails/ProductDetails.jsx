import React, { useState } from "react";
import { motion } from "framer-motion";
import Product1 from "../../Assets/Product1.png";
import Product2 from "../../Assets/Product2.png";
import Product3 from "../../Assets/Product3.png";
import Product4 from "../../Assets/Product4.png";
import ProductDetailImg from "../../Assets/ProductDetailsImg.png";

const container = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const fromTop = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(ProductDetailImg);

  return (
    <div className="bg-[#fafafa] lg:ml-[295px]">
      <style>{`::-webkit-scrollbar { display: none; }`}</style>

      <motion.div
        className="md:p-6 p-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex gap-5 md:flex-nowrap flex-wrap">
          {/* left side */}
          <motion.div className="w-full md:w-auto" variants={fromTop}>
            <div className="md:w-[500px] w-full">
              <img
                src={mainImage}
                className="w-full rounded-lg h-[300px] md:h-[450px] object-cover"
                alt="Product Main"
              />
            </div>

            {/* Image section */}
            <motion.div
              className="flex gap-3 mt-5 flex-wrap md:flex-nowrap"
              variants={fromBottom}
            >
              {[Product1, Product2, Product3, Product4].map((img, index) => (
                <motion.div
                  key={index}
                  className="w-34 md:w-28"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={img}
                    className="object-cover cursor-pointer rounded-lg w-full h-[280px]"
                    alt={`Product ${index + 1}`}
                    onClick={() => setMainImage(img)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* right side */}
          <motion.div className="w-full space-y-3" variants={fromRight}>
            <motion.p
              className="text-[15px] font-[400] text-[#8F8F8F]"
              variants={fromTop}
            >
              Product Title
            </motion.p>

            <motion.p className="text-[30px] font-[500]" variants={fromBottom}>
              Electrocardiography, Model 14032
            </motion.p>

            {/* products details */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b-2 border-dashed border-[#a3a3a3] pb-3"
              variants={fromRight}
            >
              <div>
                <p className="text-[15px] font-[400] text-[#8F8F8F]">Doctor:</p>
                <p className="text-[20px] font-[400]">$100.00 + $1(Tax)</p>
              </div>
              <div>
                <p className="text-[15px] font-[400] text-[#8F8F8F]">
                  Hospital/Clinic:
                </p>
                <p className="text-[20px] font-[400]">$100.00 + $1(Tax)</p>
              </div>
              <div>
                <p className="text-[15px] font-[400] text-[#8F8F8F]">
                  Laboratory:
                </p>
                <p className="text-[20px] font-[400]">$100.00 + $1(Tax)</p>
              </div>
              <div>
                <p className="text-[15px] font-[400] text-[#8F8F8F]">
                  Pharmacy:
                </p>
                <p className="text-[20px] font-[400]">$100.00 + $1(Tax)</p>
              </div>
              <div>
                <p className="text-[15px] font-[400] text-[#8F8F8F]">
                  Distributor:
                </p>
                <p className="text-[20px] font-[400]">$100.00 + $1(Tax)</p>
              </div>
            </motion.div>

            <motion.div
              className="border-b-2 border-dashed border-[#a3a3a3] py-5"
              variants={fromBottom}
            >
              <p className="text-[15px] font-[400] text-[#8F8F8F]">Sold:</p>
              <p className="text-[20px] font-[400]">12,423</p>
            </motion.div>

            {/* Brand */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3"
              variants={fromTop}
            >
              <div>
                <p className="text-[15px] font-[400] text-[#8F8F8F]">Brand:</p>
                <p className="text-[20px] font-[400]">Rossmax</p>
              </div>
              <div>
                <p className="text-[15px] font-[400] text-[#8F8F8F]">
                  Country of Origin:
                </p>
                <p className="text-[20px] font-[400]">America</p>
              </div>
              <div>
                <p className="text-[15px] font-[400] text-[#8F8F8F]">
                  Technical sheet:
                </p>
                <p className="text-[20px] font-[400] text-[#6a38ff]">
                  PDF download
                </p>
              </div>
              <div>
                <p className="text-[15px] font-[400] text-[#8F8F8F]">
                  Company:
                </p>
                <p className="text-[20px] font-[400]">America</p>
              </div>
            </motion.div>

            <motion.div variants={fromRight}>
              <p className="font-[600] text-[18px]">Description:</p>
              <p className="text-[400] text-[15px]">
                Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                See More....
              </p>
            </motion.div>

            {/* buttons */}
            <motion.div
              className="mt-4 flex gap-4 items-center flex-wrap md:flex-nowrap"
              variants={fromBottom}
            >
              <button className="bg-white border md:w-1/2 w-full border-[#f0f0f1] rounded-lg font-[500] text-[18px] p-4">
                Edit
              </button>
              <button className="bg-[#ea4334] border md:w-1/2 w-full text-white border-[#f0f0f1] rounded-lg font-[500] text-[18px] p-4">
                Delete
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
