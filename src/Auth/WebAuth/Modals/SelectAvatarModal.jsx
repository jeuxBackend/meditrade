import React from 'react'
import { motion } from "framer-motion";
import BackArrow from "../Assets/BackArrow.png";
import Avatar1 from "../Assets/Avatar1.png"
import Avatar2 from "../Assets/Avatar2.png"
import Avatar3 from "../Assets/Avatar3.png"
import Avatar4 from "../Assets/Avatar4.png"
import Avatar5 from "../Assets/Avatar5.png"
import Avatar6 from "../Assets/Avatar6.png"
import Avatar7 from "../Assets/Avatar7.png"
import Avatar8 from "../Assets/Avatar8.png"
import Avatar9 from "../Assets/Avatar9.png"
import Avatar10 from "../Assets/Avatar10.png"
import Avatar11 from "../Assets/Avatar11.png"
import Avatar12 from "../Assets/Avatar12.png"
import Avatar13 from "../Assets/Avatar13.png"
import Avatar14 from "../Assets/Avatar14.png"
import Avatar15 from "../Assets/Avatar15.png"


const SelectAvatarModal = ({ close, onSelectAvatar }) => {
    const avatars = [
        Avatar1, Avatar2, Avatar3, Avatar4, Avatar5,
        Avatar6, Avatar7, Avatar8, Avatar9, Avatar10,
        Avatar11, Avatar12, Avatar13, Avatar14, Avatar15
    ];

    const handleAvatarClick = (avatar) => {
        onSelectAvatar(avatar);
        close();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center px-3 justify-center bg-black/20 z-50">

            <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-3 md:p-6 w-[450px]">
                {/* Header */}
                <div className="relative flex items-center mb-6">
                    <button onClick={close} className="absolute left-0">
                        <img src={BackArrow} alt="Back" className="md:w-8 md:h-8 w-7 h-7 cursor-pointer" />
                    </button>
                    <p className=" text-[20px] md:text-[26px] font-medium text-[#333] mx-auto">
                        Select Avatar
                    </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-4 md:grid-cols-5 justify-center gap-3">
                    {avatars.map((avatar, index) => (
                        <img
                            key={index}
                            src={avatar}
                            onClick={() => onSelectAvatar(avatar)} 
                            className="w-16 h-16 cursor-pointer"
                            alt={`Avatar ${index}`}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default SelectAvatarModal