import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import MenuImg from "./Assets/MenuImg.png";
import AddBrandModal from "./Modal/AddBrandModal";

const AdminBrand = () => {
  const [AddBrand, setAddBrand] = useState(false);

  // Add
  const openModal = () => setAddBrand(true);
  const closeModal = () => setAddBrand(false);

  // ✅ Brands list
  const brands = [
    "Scalpel",
    "Surgical scissors",
    "Bone cutters",
    "Tissue forceps",
    "Needle holders",
    "Hemostatic forceps",
    "Towel clamps",
    "Hemostats",
    "Vascular clamps",
  ];

  // ✅ State for active menu
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const menuRef = useRef();

  // ✅ Toggle menu
  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  // ✅ Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#fafafa] lg:ml-[295px] h-screen">
      <AddBrandModal openModal={AddBrand} closeModal={closeModal} />
      <style>{`::-webkit-scrollbar { display: none; }`}</style>
      <div className="md:p-6 p-4">
        {/* Search and Add Button */}
        <div className="flex gap-4 items-center md:flex-nowrap flex-wrap">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border border-[#e1e2e3] text-black bg-white px-4 py-3 w-full flex gap-3 items-center rounded-lg"
          >
            <CiSearch className="text-2xl" />
            <input
              type="text"
              className="w-full text-[16px] outline-none"
              placeholder="Search Brands..."
            />
          </motion.div>

          {/* Add Button */}
          <motion.button
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="bg-[#00427e] cursor-pointer hover:bg-[#003366] transition-all text-[16px] text-white px-5 py-3 flex gap-2 md:w-auto w-full rounded-lg justify-center items-center"
            onClick={openModal}
          >
            <FiPlus className="text-lg" />
            <span className="whitespace-nowrap">Add Brands</span>
          </motion.button>
        </div>

        {/* Brands */}
        <div className="mt-6">
          <p className="font-[500] text-[24px]">All Brands</p>
          <div className="grid md:grid-cols-3 mt-3 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="relative flex justify-between items-center shadow border border-[#f0f0f1] rounded-lg p-3"
              >
                <p className="font-[400] text-[20px]">{brand}</p>

                {/* Menu Button */}
                <img
                  src={MenuImg}
                  className="w-8 cursor-pointer"
                  onClick={() => toggleMenu(index)}
                />

                {/* Dropdown Menu */}
                {openMenuIndex === index && (
                  <div
                    ref={menuRef}
                    className="absolute right-2 top-12 bg-white shadow-lg border rounded-lg py-2 w-40 z-10"
                  >
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Edit
                    </p>
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Delete
                    </p>
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      View Details
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBrand;
