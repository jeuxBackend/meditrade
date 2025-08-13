import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

import image1 from "./Assets/image1.png";
import image2 from "./Assets/image2.png";
import image3 from "./Assets/image3.png";
import image4 from "./Assets/image4.png";
import image5 from "./Assets/image5.png";
import view from "./Assets/viewImg.png";
import Blockicon from "./Assets/BlockImg.png";
import Edit from "./Assets/EditImg.png";
import ActiveImg from "./Assets/ActiveImg.png";
import deleteicon from "./Assets/deleteImg.png";
import SearchImg from "./Assets/searchImg.png";

import DeleteUsersModal from "./Modal/DeleteUsersModal";

import BlockUserModal from "./Modal/BlockUserModal";
import UnBlockUserModal from "./Modal/UnBlockUserModal";
import { Link } from "react-router-dom";

const timeRanges = ["Active Users", "DesActivate Users", "Delete Users"];

function AdminUsers() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("All Users");

  const [deleteUsersModal, setDeleteUsersModal] = useState(false);
  const [blockUsersModal, setBlockUsersModal] = useState(false);
  const [unBlockUsersModal, setUnBlockUsersModal] = useState(false);

  const [selectedUserIndex, setSelectedUserIndex] = useState(null);

  const dropdownRef = useRef(null);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Esther Howard",
      email: "deanna.curtis@example.com",
      phoneNumber: "(406) 555-0120",
      role: "Doctor",

      image: image1,
      image2: ActiveImg,
    },
    {
      id: 2,
      name: "Jerome Bell",
      email: "curtis.weaver@example.com",
      phoneNumber: "(603) 555-0123",
      role: "Doctor",

      image: image2,
      image2: Blockicon,
    },
    {
      id: 3,
      name: "Darlene Robertson",
      email: "michelle.rivera@example.com",
      phoneNumber: "(603) 555-0123",
      role: "Doctor",

      image: image3,
      image2: ActiveImg,
    },
    {
      id: 4,
      name: "Courtney Henry",
      email: "sara.cruz@example.com",
      phoneNumber: "(704) 555-0127",
      role: "Doctor",

      image: image4,
      image2: ActiveImg,
    },
    {
      id: 5,
      name: "Cameron",
      email: "bill.sanders@example.com",
      phoneNumber: "(316) 555-0116",
      role: "Doctor",

      image: image5,
      image2: Blockicon,
    },
    {
      id: 6,
      name: "Cody Fisher",
      email: "curtis.weaver@example.com",
      phoneNumber: "(603) 555-0123",
      role: "Doctor",

      image: image2,
      image2: Blockicon,
    },
  ]);

  const handleSelect = (range) => {
    setSelectedRange(range);
    setDropdownOpen(false);
  };

  const openDeleteModal = () => setDeleteUsersModal(true);
  const closeDeleteModal = () => setDeleteUsersModal(false);

  const openBlockModal = (index) => {
    setSelectedUserIndex(index);
    setBlockUsersModal(true);
  };
  const closeBlockModal = () => setBlockUsersModal(false);

  const openUnBlockModal = (index) => {
    setSelectedUserIndex(index);
    setUnBlockUsersModal(true);
  };
  const closeUnBlockModal = () => setUnBlockUsersModal(false);

  const handleBlockUser = () => {
    const updatedUsers = [...users];
    updatedUsers[selectedUserIndex].status = "Blocked";
    setUsers(updatedUsers);
    closeBlockModal();
  };

  const handleUnblockUser = () => {
    const updatedUsers = [...users];
    updatedUsers[selectedUserIndex].status = "Active";
    setUsers(updatedUsers);
    closeUnBlockModal();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredData = users.filter((user) => {
    if (selectedRange === "All Users") return true;
    return user.status === selectedRange.replace(" Users", "");
  });

  return (
    <div className="bg-[#fafafa] lg:ml-[295px]">
      <DeleteUsersModal isOpen={deleteUsersModal} onClose={closeDeleteModal} />
      <BlockUserModal
        isOpen={blockUsersModal}
        onClose={closeBlockModal}
        onConfirm={handleBlockUser}
      />
      <UnBlockUserModal
        isOpen={unBlockUsersModal}
        onClose={closeUnBlockModal}
        onConfirm={handleUnblockUser}
      />

      <div className="md:p-6 p-4">
        <style>{`::-webkit-scrollbar { display: none; }`}</style>

        {/* Header Controls */}
        <div className="w-full flex flex-col md:flex-row gap-3 justify-between">
          {/* Search */}
          <div className="w-[100%] ">
            <div className="flex gap-2 border-[#E6E6E8]  rounded-lg p-3  bg-white  text-black border justify-between items-center px-3">
              <input
                type="text"
                className=" outline-none  w-full"
                placeholder="Search for a user......."
              />
              <img src={SearchImg} className="w-6 h-6" />
            </div>
          </div>
          {/* Dropdown */}
          <div ref={dropdownRef} className="relative w-73 md:w-100">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex justify-between items-center cursor-pointer  p-3.5 border border-[#E4E4E4] bg-white rounded-lg text-sm font-medium text-black"
            >
              {selectedRange}
              {dropdownOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg"
              >
                {timeRanges.map((range) => (
                  <div
                    key={range}
                    onClick={() => handleSelect(range)}
                    className={`px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 ${
                      range === selectedRange ? "bg-gray-100 font-medium" : ""
                    }`}
                  >
                    {range}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="mt-4 w-full overflow-x-auto">
          <motion.table
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full min-w-[1100px] text-center border-collapse"
          >
            <thead className="text-[16px]">
              <tr className="text-[#8b8e9c] ">
                <th className="px-0 w-[9%]">
                  <p className="py-3 mb-2 rounded-tl-2xl bg-[#f2f2f2] px-4 font-[500] border border-b border-t-0 border-r border-l-0 border-[#E6E6E8]">
                    Sr no
                  </p>
                </th>
                <th className="px-0 w-[20%]">
                  <p className="py-3 mb-2  bg-[#f2f2f2] px-4 font-[500] border border-b border-t-0 border-r border-l-0 border-[#E6E6E8]">
                    Name
                  </p>
                </th>
                <th className="px-0 w-[14%px]">
                  <p className="py-3 mb-2  bg-[#f2f2f2] font-[500] border border-b border-t-0 border-r border-l-0 border-[#E6E6E8]">
                    Phone Number
                  </p>
                </th>
                <th className="px-0 w-[25%]">
                  <p className="py-3 mb-2  bg-[#f2f2f2] font-[500] border border-b border-t-0 border-r border-l-0 border-[#E6E6E8]">
                    Email Address
                  </p>
                </th>

                <th className="px-0 w-[12%]">
                  <p className="py-3 mb-2 bg-[#f2f2f2] font-[500] border border-b border-t-0 border-r border-l-0 border-[#E6E6E8]">
                    User Role
                  </p>
                </th>

                <th className="px-0 w-[20%]">
                  <p className="py-3 mb-2 rounded-tr-2xl bg-[#f2f2f2] font-[500] border border-b border-t-0 border-r border-l-0 border-[#E6E6E8]">
                    Action
                  </p>
                </th>
              </tr>
            </thead>

            <motion.tbody
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[16px] font-medium  border border-[#E6E6E8] bg-white"
            >
              {filteredData.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 border-b border-r border-[#E6E6E8]">
                    {user.id}
                  </td>
                  <td className="px-4 py-4 border-b  border-[#E6E6E8]">
                    <div className="flex items-center gap-2">
                      <img
                        src={user.image}
                        className="h-10 w-10 object-cover rounded-full"
                        alt="user"
                      />
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 border border-t-0 border-[#E6E6E8]">
                    {user.phoneNumber}
                  </td>
                  <td className="px-4 py-4 border border-t-0 border-[#E6E6E8]">
                    {user.email}
                  </td>

                  <td className="px-4 py-4 border border-t-0 border-[#E6E6E8]">
                    {user.role}
                  </td>

                  <td className="px-4 py-4 border border-t-0 border-[#E6E6E8]">
                    <div className="flex justify-center gap-1">
                      <Link to="/EditUser">
                        <img
                          src={Edit}
                          className="w-9 cursor-pointer"
                          alt="Edit"
                        />
                      </Link>

                      <Link to="/UserDetails">
                        <img
                          src={view}
                          className="w-9 cursor-pointer"
                          alt="View"
                        />
                      </Link>
                      <img
                        onClick={() =>
                          user.status === "Active"
                            ? openBlockModal(index)
                            : openUnBlockModal(index)
                        }
                        src={user.status === "Active" ? ActiveImg : Blockicon}
                        className="w-9 cursor-pointer"
                        alt={user.status === "Active" ? "Block" : "Unblock"}
                        title={
                          user.status === "Active"
                            ? "Block User"
                            : "Unblock User"
                        }
                      />
                      <img
                        onClick={openDeleteModal}
                        src={deleteicon}
                        className="w-9 cursor-pointer"
                        alt="Delete"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </motion.tbody>
          </motion.table>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
