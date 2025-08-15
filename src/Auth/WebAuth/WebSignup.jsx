import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignupImage from "./Assets/SignupImage.png";
import { motion } from "framer-motion";
import avatar from "./Assets/avatar.png";
import UpIcon from "./Assets/UpIcon.png";
import downIcon from "./Assets/downIcon.png";
import japanflag from "./Assets/japan.png";
import ukflag from "./Assets/united-kingdom.png";
import vietnamflag from "./Assets/vietnam.png";
import candaflag from "./Assets/canada.png";
import usflag from "./Assets/united-states.png";
import upload from "./Assets/upload.png";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import WebSignupDetail from "./Components/WebSignupDetail";
import UploadprofilepictureModal from "./Modals/UploadprofilepictureModal";

const WebSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Pharmacy");
  const [showDetail, setShowDetail] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Form data state to collect all inputs
  const [formData, setFormData] = useState({
    fullName: "",
    role: "Pharmacy",
    email: "",
    phoneNumber: "",
    password: "",
    profileImage: null
  });

  const roles = ["Pharmacy", "Doctor", "Other"];

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setFormData(prev => ({ ...prev, role }));
    setIsRoleDropdownOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };


  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      const imageUrl = URL.createObjectURL(selectedImage);
      setImage(imageUrl);
      setFormData(prev => ({ ...prev, profileImage: selectedImage }));
    }
  };

  const handleAvatarSelect = (avatar) => {
    setImage(avatar);
    setFormData(prev => ({ ...prev, profileImage: avatar }));
    setIsModalOpen(false); // Close the UploadprofilepictureModal
  };



  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+81",
    flag: japanflag,
  });

  const [phoneNumber, setPhoneNumber] = useState("");

  const countries = [
    { code: "+1", flag: usflag },
    { code: "+44", flag: ukflag },
    { code: "+81", flag: japanflag },
    { code: "+84", flag: vietnamflag },
    { code: "+1", flag: candaflag },
  ];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here if needed
    setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
  };

  // In your WebSignup component
  const handleCloseModal = (result) => {
    if (result) {
      if (result.url) {
        setImage(result.url); // Set the image URL for display
        setFormData(prev => ({
          ...prev,
          profileImage: result.file ? result.file : result.url
        }));
      }
    }
    setIsModalOpen(false);
  };

  // When rendering the modal:
  { isModalOpen && <UploadprofilepictureModal close={handleCloseModal} /> }

  const handleFinalSubmit = (additionalData) => {
    // Combine formData with additionalData from WebSignupDetail
    const completeData = { ...formData, ...additionalData };
    console.log("Complete form data:", completeData);
    // Here you would typically send the data to your API
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRoleDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // If showDetail is true, render the WebSignupDetail component
  if (showDetail) {
    return <WebSignupDetail onBack={handleBack} onSubmit={handleFinalSubmit} />;
  }





  

  return (
    <div className="w-full bg-[#ffffff] h-screen flex flex-col lg:flex-row px-2 lg:px-1">
      <style>{` ::-webkit-scrollbar { display: none; }`}</style>

      {/* Left side */}
      <div className="w-1/2 h-screen hidden lg:block relative overflow-hidden">
        <img
          src={SignupImage}
          alt="Background"
          className="w-full h-full p-3 object-cover rounded-[40px]"
        />
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 h-screen md:px-10 flex items-center justify-center">
        <div className="w-full overflow-y-auto max-h-[95vh] py-6">
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex items-center mb-6"
          >
            <h2 className="mx-auto text-3xl font-[600]">Sign Up</h2>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="flex mb-8 mt-5"
          >
            <motion.div className="relative flex flex-wrap sm:flex-nowrap justify-center items-center gap-4">
              <motion.img
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={image || avatar}
                alt="User Avatar"
                className="w-28 h-28 rounded-full object-cover "
              />
              <div>
                <div className="text-center sm:text-start">
                  <p className="font-medium">Profile Picture</p>
                  <p className="text-[#808080] text-sm">
                    We recommend an image of at least 400x400.
                  </p>
                </div>
                <div
                  onClick={handleClick}
                  className="bg-[#EBF1FF] mx-auto sm:mx-0 flex cursor-pointer items-center my-2 justify-center py-3 w-[50%] gap-3 rounded-lg"
                >
                  <img src={upload} alt="" className="h-7" />
                  <button
                    type="button"
                    className="transition font-semibold cursor-pointer"
                  >
                    Upload
                  </button>
                </div>
              </div>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </motion.div>
          </motion.div>

          {/* Form */}
          <form className="space-y-4 mx-3" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="font-[400]">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="placeholder:text-black w-full px-4 font-[400] py-3 bg-[#EBF1FF] rounded-[10px] mt-1 text-sm focus:outline-none"

              />
            </div>

            {/* User Role */}
            <div ref={dropdownRef}>
              <label className="font-[400]">User Role</label>
              <div className="relative">
                <div
                  className="w-full px-4 py-3 bg-[#EBF1FF] rounded-[10px] mt-1 text-sm flex items-center justify-between cursor-pointer"
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                >
                  <span className="text-black">{selectedRole}</span>
                  <img
                    src={isRoleDropdownOpen ? UpIcon : downIcon}
                    alt="toggle"
                    className="h-2"
                  />
                </div>

                {isRoleDropdownOpen && (
                  <div className="absolute mt-1 w-full bg-white rounded-[10px] shadow-lg border border-gray-200 z-10">
                    {roles.map((role) => (
                      <div
                        key={role}
                        className={`px-4 py-2 cursor-pointer rounded-[10px] ${selectedRole === role ? "bg-blue-50 font-medium" : ""
                          }`}
                        onClick={() => handleRoleSelect(role)}
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="font-[400]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="hi@example.com"
                className="placeholder:text-black w-full px-4 py-3 bg-[#EBF1FF] rounded-[10px] mt-1 text-sm focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div className="w-full">
              <label className="font-[400]">Phone Number</label>
              <div className="w-full flex gap-3">
                {/* Country code dropdown */}
                <div className=" w-42 md:w-36 flex items-center gap-2 rounded-[10px] bg-[#EBF1FF] mt-1">
                  <div className="relative w-full">
                    <div
                      className="flex items-center px-3 py-3 cursor-pointer w-full"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <img
                        src={selectedCountry.flag}
                        alt=""
                        className="w-6 h-6 mr-2 object-cover rounded-full"
                      />
                      <span>{selectedCountry.code}</span>
                      <svg
                        className={`ml-auto h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {isDropdownOpen && (
                      <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-auto">
                        {countries.map((country) => (
                          <div
                            key={country.code}
                            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center ${selectedCountry.code === country.code
                              ? "bg-blue-50"
                              : ""
                              }`}
                            onClick={() => handleCountrySelect(country)}
                          >
                            <img
                              src={country.flag}
                              alt=""
                              className="w-6 h-6 object-cover mr-2 rounded-full"
                            />
                            <span className="font-medium">{country.code}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone input */}
                <div className="w-full">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="placeholder:text-black w-full px-4 py-3.5 mt-1 bg-[#EBF1FF] text-sm rounded-[10px] focus:outline-none"
                    placeholder="85487 47853"

                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="text-left w-full">
              <label className="font-[400]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="************"
                  className="placeholder:text-black w-full bg-[#EBF1FF] pr-10 rounded-[10px] mt-1 px-4 py-3 text-sm focus:outline-none"

                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-7 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? (
                    <IoEyeOutline className="h-4 w-4" />
                  ) : (
                    <IoEyeOffOutline className="h-4 w-4" />
                  )}
                </div>
              </div>
            </div>

            {/* Submit */}
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
              >
                <button
                  type="submit"
                  className="md:w-3/4 w-full font-[400] text-center block mx-auto bg-[#00427E] text-white py-3 rounded-[8px]"
                >
                  Next
                </button>
              </motion.div>
            </motion.div>
          </form>

          <p className="mt-4 text-center">
            Already have account?{" "}
            <Link to="/Login" className="text-[#00427E] font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* UploadProfilePicture Modal */}
      {isModalOpen && <UploadprofilepictureModal close={handleCloseModal} />}
    </div>
  );
};

export default WebSignup;