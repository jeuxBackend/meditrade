import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

import Categories1 from "./Assets/CategoriesImg 1.png";
import Categories2 from "./Assets/CategoriesImg 2.png";
import Categories3 from "./Assets/CategoriesImg 3.png";
import Categories4 from "./Assets/CategoriesImg 4.png";
import Categories5 from "./Assets/CategoriesImg 5.png";
import Categories6 from "./Assets/CategoriesImg 6.png";
import Categories7 from "./Assets/CategoriesImg 7.png";
import Categories8 from "./Assets/CategoriesImg 8.png";
import Categories9 from "./Assets/CategoriesImg 9.png";
import Categories10 from "./Assets/CategoriesImg 10.png";
import MenuImg from "./Assets/MenuImg.png";
import EditImg from "./Assets/EditImg.png";
import DeleteImg from "./Assets/DeleteImg.png";
import AddCategoriesModal from "./Modal/AddCategoriesModal";
import EditCategoriesModal from "./Modal/EditCategoriesModal";
import DeleteCategoriesModal from "./Modal/DeleteCategoriesModal";
import { Link } from "react-router-dom";

const AdminProductManagement = () => {
  const [AddCategories, setAddCategories] = useState(false);
  const [EditCategories, setEditCategories] = useState(false);
  const [DeleteCategories, setDeleteCategories] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const menuRef = useRef(null);
  // Add
  const openModal = () => setAddCategories(true);
  const closeModal = () => setAddCategories(false);
  // Edit
  const openEditModal = () => setEditCategories(true);
  const closeEditModal = () => setEditCategories(false);
  // Delete
  const openDeleteModal = () => setDeleteCategories(true);
  const closeDeleteModal = () => setDeleteCategories(false);

  const categories = [
    { id: 1, name: "Scalpel", image: Categories1 },
    { id: 2, name: "Surgical Scissors", image: Categories2 },
    { id: 3, name: "Bone cutters", image: Categories3 },
    { id: 4, name: "Tenotomy Scissors", image: Categories4 },
    { id: 5, name: "Tissue Forceps", image: Categories5 },
    { id: 6, name: "Yankauer suction tip", image: Categories6 },
    { id: 7, name: "Frazier suction tip", image: Categories7 },
    { id: 8, name: "Surgical staplers", image: Categories8 },
    { id: 9, name: "Rulers", image: Categories9 },
    { id: 10, name: "Skin Marking Pens", image: Categories10 },
  ];

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Different entry directions for each card
  const directions = [
    { x: -20, y: 0 }, // left
    { x: 20, y: 0 }, // right
    { x: 0, y: -50 }, // top
    { x: 0, y: 50 }, // bottom
  ];

  return (
    <div className="bg-[#fafafa] lg:ml-[295px]">
      <AddCategoriesModal openModal={AddCategories} closeModal={closeModal} />
      <EditCategoriesModal
        openEditModal={EditCategories}
        closeEditModal={closeEditModal}
      />
      <DeleteCategoriesModal
        openDeleteModal={DeleteCategories}
        closeDeleteModal={closeDeleteModal}
      />

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
              placeholder="Search category..."
            />
          </motion.div>

          {/* Add Button */}
          <motion.button
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="bg-[#00427e] cursor-pointer  hover:bg-[#003366] transition-all text-[16px] text-white px-5 py-3 flex gap-2 md:w-auto w-full rounded-lg justify-center items-center"
            onClick={openModal}
          >
            <FiPlus className="text-lg" />
            <span className="whitespace-nowrap">Add Category</span>
          </motion.button>
        </div>

        {/* Cards */}
        <div className="mt-4">
          <p className="font-[500] text-[24px]">All Categories</p>
          <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 mt-4">
            {categories.map((category, index) => {
              const dir = directions[index % directions.length];
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: dir.x, y: dir.y }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="bg-[#ffffff] border border-[#e1e2e3] rounded-2xl p-3 relative"
                >
                  {/* Image */}
                  <div className="relative border border-[#e1e2e3] rounded-2xl overflow-hidden">
                    <Link to="/Products">
                      <img
                        src={category.image}
                        className="rounded-2xl h-40 w-full object-cover"
                        alt={category.name}
                      />
                    </Link>
                    <img
                      src={MenuImg}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu(index);
                      }}
                      className="w-8 absolute top-2 right-2 cursor-pointer"
                      alt="menu"
                    />
                  </div>

                  {/* Name */}
                  <p className="text-[20px] font-[400] text-center mt-2">
                    {category.name}
                  </p>

                  {/* Dropdown Menu */}
                  {openMenuIndex === index && (
                    <div
                      ref={menuRef}
                      className="absolute top-8 right-8 text-[16px] font-[400] bg-white border border-gray-200 rounded-lg shadow-lg w-36 z-10"
                    >
                      <ul className="text-sm">
                        <li
                          className="p-2 pl-3 hover:bg-gray-100 hover:rounded-lg font-medium cursor-pointer flex gap-3 items-center"
                          onClick={openEditModal}
                        >
                          <img src={EditImg} className="w-8" alt="edit" />
                          Edit
                        </li>
                        <p className="border w-full border-dashed  border-[#a3a3a3]"></p>
                        <li
                          className="p-2 pl-3 hover:bg-gray-100 hover:rounded-lg cursor-pointer font-medium flex gap-3 items-center"
                          onClick={openDeleteModal}
                        >
                          <img src={DeleteImg} className="w-8" alt="delete" />
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductManagement;
