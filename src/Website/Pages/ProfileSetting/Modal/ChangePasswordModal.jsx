import React, { useState } from "react";
import ArrowIcon from "../Assets/ProfileSettingArrow.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePasswordModal = ({ onClose }) => {
    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="bg-black/50 backdrop-blur-[2px] fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full px-2 sm:px-3">
            <div className=" bg-[#fafafa] sm:w-[40rem] w-[98%] rounded-3xl">
                {/* Header */}
                <div className="relative bg-white rounded-2xl  flex items-center justify-center w-full py-4">
                    {/* Arrow icon on the left */}
                    <img
                        src={ArrowIcon}
                        className="h-8 absolute left-2 top-4 cursor-pointer"
                        onClick={onClose}
                    />
                    <p className="md:text-2xl  text-lg font-semibold text-center">
                        Change Password
                    </p>
                </div>

                {/* Form */}
                <form className="space-y- p-4 md:p-8 ">
                    {/* Old Password */}
                    <div className="relative">
                        <label className="font-semibold">Old Password</label>
                        <input
                            type={showOld ? "text" : "password"}
                            placeholder="*********"
                            className="placeholder:text-black w-full mt-2 bg-[#eff2f6] px-4 py-3 rounded-2xl focus:outline-none"
                        />
                        <span
                            className="absolute top-[50px] right-4 cursor-pointer text-gray-500"
                            onClick={() => setShowOld(!showOld)}
                        >
                            {showOld ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>

                    {/* New Password */}
                    <div className="relative">
                        <label className="font-semibold">New Password</label>
                        <input
                            type={showNew ? "text" : "password"}
                            placeholder="*********"
                            className=" placeholder:text-black w-full mt-2 bg-[#eff2f6] px-4 py-3 rounded-2xl focus:outline-none"
                        />
                        <span
                            className="absolute top-[50px] right-4 cursor-pointer text-gray-500"
                            onClick={() => setShowNew(!showNew)}
                        >
                            {showNew ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <label className="font-semibold">Confirm Password</label>
                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="*********"
                            className="placeholder:text-black w-full mt-2 bg-[#eff2f6] px-4 py-3 rounded-2xl focus:outline-none"
                        />
                        <span
                            className="absolute top-[50px] right-4 cursor-pointer text-gray-500"
                            onClick={() => setShowConfirm(!showConfirm)}
                        >
                            {showConfirm ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                </form>

                <div className="flex items-center justify-center mb-4">
                     <button className="py-3 px-4 bg-[#00427e] text-white rounded-lg font-[600] w-[50%]">Save</button>

                </div>
            </div>
        </div>
    );
};

export default ChangePasswordModal;
