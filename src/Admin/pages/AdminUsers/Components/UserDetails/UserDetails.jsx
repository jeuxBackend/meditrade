import React, { useState } from "react";
import UserImg from "../Assets/image1.png";
import { Link } from "react-router-dom";
import DeleteUsersModal from "../../Modal/DeleteUsersModal";

const UserDetails = () => {
  const [deleteUsersModal, setDeleteUsersModal] = useState(false);
  const openDeleteModal = () => setDeleteUsersModal(true);
  const closeDeleteModal = () => setDeleteUsersModal(false);
  return (
    <div className="bg-[#fafafa] lg:ml-[295px]">
      <DeleteUsersModal isOpen={deleteUsersModal} onClose={closeDeleteModal} />
      <div className="md:p-6 p-3">
        <div className="flex justify-between gap-4 items-center flex-wrap">
          <div className="flex items-center gap-4">
            <img src={UserImg} className="rounded-full w-18 h-18" />
            <p className="font-[600] text-[24px]">Romas Almas</p>
          </div>
          <div className=" rounded-lg bg-[#e8f0fb]  md:p-5 p-3 grid grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <p className="text-sm text-[#1E1E1E]">Total Orders</p>
              <p className="text-lg font-medium">1,905</p>
            </div>
            <div
              className="md:pl-6 pl-3"
              style={{
                borderLeft: "3px solid",
                borderImage:
                  "linear-gradient(to bottom, transparent, #e4e4e4, transparent) 4",
              }}
            >
              <p className="text-sm text-[#1E1E1E]">Active Orders</p>
              <p className="text-lg font-medium">3,526</p>
            </div>
            <div
              className="md:pl-6 pl-3"
              style={{
                borderLeft: "3px solid",
                borderImage:
                  "linear-gradient(to bottom, transparent, #e4e4e4, transparent) 4",
              }}
            >
              <p className="text-sm text-[#1E1E1E]">Completed</p>
              <p className="text-lg font-medium">234</p>
            </div>
          </div>
        </div>
        {/* User Details  */}
        <div className="mt-10 flex justify-between flex-wrap">
          <div>
            <div className=" grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-6">
              <div>
                <p className="text-[18px] font-[400] text-[#aaaaaa]">Email:</p>
                <p className="font-[500] text-[22px]">sara.cruz@example.com</p>
              </div>
              <div>
                <p className="text-[18px] font-[400] text-[#aaaaaa]">
                  User Role:
                </p>
                <p className="font-[500] text-[22px]">Doctor</p>
              </div>
              <div>
                <p className="text-[18px] font-[400] text-[#aaaaaa]">
                  Phone Number:
                </p>
                <p className="font-[500] text-[22px]">128493205</p>
              </div>
              <div>
                <p className="text-[18px] font-[400] text-[#aaaaaa]">City:</p>
                <p className="font-[500] text-[22px]">6391 Elgin St. 10299</p>
              </div>
              <div>
                <p className="text-[18px] font-[400] text-[#aaaaaa]">
                  Country:
                </p>
                <p className="font-[500] text-[22px]">Celina, Delaware</p>
              </div>
              <div>
                <p className="text-[18px] font-[400] text-[#aaaaaa]">
                  Zip code:
                </p>
                <p className="font-[500] text-[22px]">10299</p>
              </div>
              <div>
                <p className="text-[18px] font-[400] text-[#aaaaaa]">
                  State/Province:
                </p>
                <p className="font-[500] text-[22px]">Celina, Delaware</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-[18px] font-[400] text-[#aaaaaa]">
                Full Address:
              </p>
              <p className="font-[500] text-[22px]">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:mt-0 mt-4">
            <Link
              to="/EditUser"
              className="bg-[#e8f0fb] py-3 px-30 font-[500] text-[20px] rounded-lg"
            >
              Edit
            </Link>
            <button
              className="border border-[#cfcfcf] py-3 px-30 font-[500] text-[20px] rounded-lg cursor-pointer"
              onClick={openDeleteModal}
            >
              Delete
            </button>
            <button className="bg-[#ff3b30] text-white py-3 px-30 font-[500] text-[20px] rounded-lg cursor-pointer">
              Block
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
