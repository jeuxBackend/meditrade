import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import BackArrow from "../Assets/BackArrow.png";
import cameraIcon from "../Assets/cameraIcon.png";
import ChoosePicIcon from "../Assets/ChoosePicIcon.png";
import UseAvatarIcon from "../Assets/UseAvatarIcon.png";
import SelectAvatarModal from "./SelectAvatarModal";

const UploadprofilepictureModal = ({ close }) => {
    const [showAvatarModal, setShowAvatarModal] = useState(false);
    const fileInputRef = useRef(null);

    const options = [
        { icon: cameraIcon, type: "camera" },
        { icon: ChoosePicIcon, type: "choose" },
        { icon: UseAvatarIcon, type: "avatar" },
    ];

    const handleOptionClick = (type) => {
        if (type === "avatar") {
            setShowAvatarModal(true);
        }
         else if (type === "choose") {
            if (fileInputRef.current) {
                fileInputRef.current.click();
            }
        }
        else if (type === "camera") {

            alert("Camera functionality will be implemented later");
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create a URL for the selected file
            const imageUrl = URL.createObjectURL(file);
            // Pass both the URL and the file object to parent
            close({ url: imageUrl, file });
        }
    };

    const handleAvatarSelect = (avatar) => {
        close({ url: avatar }); 
        setShowAvatarModal(false);
    };


    return (
        <>
            {/* Hidden file input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 flex items-center px-3 justify-center bg-black/50 backdrop-blur-xs z-50">

                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-lg p-6 w-[432px]">
                    {/* Header */}
                    <div className="relative flex items-center mb-6">
                        <button onClick={close} className="absolute left-0">
                            <img src={BackArrow} alt="Back" className="md:w-8 md:h-8 w-7 h-7 cursor-pointer" />
                        </button>
                        <p className=" text-[18px] md:text-[26px] font-medium text-[#333] mx-auto">
                            Upload profile picture
                        </p>
                    </div>

                    {/* Options */}
                    <div className="flex flex-row justify-center gap-4">
                        {options.map((item, index) => (
                            <button
                                key={index}
                                className="flex flex-col items-center gap-2"
                                onClick={() => handleOptionClick(item.type)}
                            >
                                <img src={item.icon}
                                    alt={item.label} className="w-32 cursor-pointer" />
                            </button>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Show SelectAvatarModal when avatar option is clicked */}
            {showAvatarModal && (
                <SelectAvatarModal
                    close={() => setShowAvatarModal(false)}
                    onSelectAvatar={handleAvatarSelect}
                />
            )}
        </>
    );
};

export default UploadprofilepictureModal;

