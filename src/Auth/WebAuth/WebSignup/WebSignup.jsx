import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SignupImage from "./Assets/SignupImage.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import avatar from "./Assets/avatar.png";
import japanflag from "./Assets/japan.png";
import ukflag from "./Assets/united-kingdom.png";
import vietnamflag from "./Assets/vietnam.png";
import candaflag from "./Assets/canada.png";
import usflag from "./Assets/united-states.png";
import upload from "./Assets/upload.png";
import signuplogo from "./Assets/signuplogo.png";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const WebSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      const imageUrl = URL.createObjectURL(selectedImage);
      setImage(imageUrl);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+81",
    flag: japanflag,
  });

  const [phoneNumber, setPhoneNumber] = useState();

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

  return (
    <div className="w-full bg-[#ffffff] h-screen flex flex-col lg:flex-row px-2 lg:px-1">
      <style>{` ::-webkit-scrollbar { display: none; }`}</style>
      {/* Left side (Image + Logo) */}
      <div className="w-1/2 h-screen hidden lg:block relative overflow-hidden">
        <img
          src={SignupImage}
          alt="Background"
          className="w-full h-full p-3 object-cover rounded-[40px]"
        />
        <div className="absolute inset-0 bg-black/15 bg-opacity-50 m-3 rounded-[30px]"></div>
        {/* <img src={signuplogo} alt="" className="absolute top-[45%] left-[40%] h-23" /> */}
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/2 h-screen px-4 md:px-10 flex items-center justify-center">
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
            <motion.div

              className="relative flex flex-wrap sm:flex-nowrap justify-center items-center gap-4">
              <motion.img
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={image || avatar}
                alt="User Avatar"
                className="w-28 h-28 rounded-full object-cover cursor-pointer"
              />
              <div>
                <div className="text-center sm:text-start">
                  <p className="font-medium">Profile Picture</p>
                  <p className="text-[#808080] text-sm">We recommend an image of at least 400x400.</p>
                </div>
                <div
                  onClick={handleClick}
                  className="bg-[#EBF1FF] mx-auto sm:mx-0 flex items-center my-2 justify-center py-3 w-[50%] gap-3 rounded-lg"
                >
                  <img src={upload} alt="" className="h-7" />
                  <button className="transition font-semibold cursor-pointer">Upload</button>
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
          <form className="space-y-4 mx-3">
            <div>
              <label className="font-[400]">Full Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="placeholder:text-black w-full px-4 font-[400] py-3  bg-[#EBF1FF] rounded-[10px] mt-1 text-sm focus:outline-none "
              />
            </div>

            <div>
              <label className="font-[400]">User Role</label>
              <input
                type="text"
                placeholder="Pharmacy"
                className="placeholder:text-black w-full px-4 py-3  bg-[#EBF1FF] rounded-[10px] mt-1 text-sm focus:outline-none "
              />
            </div>

            <div>
              <label className="font-[400]">Email</label>
              <input
                type="email"
                placeholder="hi@example.com"
                className="placeholder:text-black w-full px-4 py-3  bg-[#EBF1FF] rounded-[10px] mt-1  text-sm focus:outline-none "
              />
            </div>

            {/* Phone Number Field */}
            <div className="w-full">
              <label className="font-[400]">Phone Number</label>
              <div className="w-full flex gap-5">
                {/* Country code dropdown */}
                <div className="w-28 flex items-center gap-2 rounded-[10px] bg-[#EBF1FF] mt-1">
                  <div className="relative w-full">
                    <div
                      className="flex items-center px-3 py-3 cursor-pointer w-full"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <img
                        src={selectedCountry.flag}
                        alt={selectedCountry.name}
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
                              alt={country.name}
                              className="w-6 h-6 object-cover mr-2  rounded-full"
                            />
                            <span className="font-medium">{country.code}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone input */}
                <div className="w-[85%]">
                  <input
                    type="text"
                    id="phone"
                    className="placeholder:text-black w-full px-4 py-3.5 mt-1 bg-[#EBF1FF] text-sm rounded-[10px] focus:outline-none"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="85487 47853"
                  />
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="text-left w-full">
              <label className="font-[400]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="************"
                  className="placeholder:text-black w-full bg-[#EBF1FF]  pr-10  rounded-[10px] mt-1 px-4 py-3 text-sm focus:outline-none"
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

            <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Link
                  to=""
                  className="md:w-3/4 w-full font-[400] text-center block mx-auto bg-[#00427E] text-white py-3 rounded-[8px]"
                >
                  Next
                </Link>
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
    </div>
  );
};

export default WebSignup;
