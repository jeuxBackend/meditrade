import React, { useState } from "react";
import bpimg6 from "./Assets/image6.png";
import DeleteModal from "./Modal/DeleteModal/DeleteModal";

function SentOffersRequest() {
   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  return (
    <div className="mt-5 space-y-6">
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
      />
      <div className="bg-white flex flex-col xl:flex-row items-center gap-3 lg:gap-6 py-3 px-3 lg:px-6 rounded-lg">
        <img
          src={bpimg6}
          alt="Advanced Dissection Kit"
          className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto xl:mx-0 flex-shrink-0"
        />

        <div className="w-full flex flex-col xl:flex-row items-center xl:justify-center gap-6 xl:gap-20">
          <div className="flex-1 xl:border-0 xl:border-dashed xl:border-r-2 xl:pl-5 xl:pr-8 border-[#a3a3a3]">
            <div className="py-3 flex flex-col lg:flex-row lg:justify-between gap-4">
              <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight text-center xl:text-left">
                Advanced Dissection Kit Biology Lab Anatomy Dissecting Set with
                Stainless Steel Scalpel Knife Handle Blades for Medical
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 flex-1">
                <div>
                  <p className="text-[#8f8f8f] text-sm">Brand:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    Rossmax
                  </p>
                </div>

                <div>
                  <p className="text-[#8f8f8f] text-sm">Country of Origin:</p>
                  <p className="font-semibold text-[#333333] text-[24px]">
                    America
                  </p>
                </div>

                <div className="sm:col-span-1 lg:col-span-2 xl:col-span-1">
                  <p className="text-[#8f8f8f] text-sm">Quantity:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    102
                  </p>
                </div>
                <div className="sm:col-span-1 lg:col-span-2 xl:col-span-1">
                  <p className="text-[#8f8f8f] text-sm">Offer From Admin:</p>
                  <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                    $100.99
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 justify-center flex-col sm:flex-row xl:flex-col 0px]">
            <div className="flex items-center justify-center px-28.5 bg-[#ebf1ff] cursor-pointer py-2 text-[#333333] font-medium gap-2 rounded-md  ">
              <p className="text-nowrap text-sm lg:text-base">Edit</p>
            </div>
            <div
               onClick={openDeleteModal}
             className="flex items-center justify-center cursor-pointer px-26 font-medium bg-white border border-[#f2f2f2] shadow-sm py-2 text-[#ea4334] gap-2 rounded-md  ">
              <p className="text-sm lg:text-base">Delete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SentOffersRequest;
