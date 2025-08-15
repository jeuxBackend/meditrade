import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignupImage from "../Assets/SignupImage.png";
import { motion } from "framer-motion";
import UpIcon from "../Assets/UpIcon.png";
import downIcon from "../Assets/downIcon.png";
import japanflag from "../Assets/japan.png";
import ukflag from "../Assets/united-kingdom.png";
import vietnamflag from "../Assets/vietnam.png";
import candaflag from "../Assets/canada.png";
import usflag from "../Assets/united-states.png";

const WebSignupDetail = () => {
  // State for dropdowns
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+1",
    flag: usflag,
    name: "United States"
  });
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // Refs for dropdown containers
  const countryDropdownRef = useRef(null);
  const cityDropdownRef = useRef(null);
  const stateDropdownRef = useRef(null);

  // Country data
  const countries = [
    { code: "+1", flag: usflag, name: "United States", hasStates: true },
    { code: "+44", flag: ukflag, name: "United Kingdom", hasStates: false },
    { code: "+81", flag: japanflag, name: "Japan", hasStates: false },
    { code: "+84", flag: vietnamflag, name: "Vietnam", hasStates: false },
    { code: "+12", flag: candaflag, name: "Canada", hasStates: false },
  ];

  const cities = ["New York", "London", "Tokyo", "Paris", "Berlin"];
  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas",
  ];

  // Toggle dropdown
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Handle selection
  const handleSelect = (type, value) => {
    if (type === "country") {
      setSelectedCountry(value);
      if (!value.hasStates) {
        setSelectedState("");
      }
    } else if (type === "city") {
      setSelectedCity(value);
    } else if (type === "state") {
      setSelectedState(value);
    }
    setOpenDropdown(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const refs = [
        countryDropdownRef,
        cityDropdownRef,
        stateDropdownRef
      ].filter(Boolean);

      if (refs.every(ref => ref.current && !ref.current.contains(event.target))) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

      {/* Right side - Centered content */}
      <div className="w-full lg:w-1/2 h-screen flex">
        <div className="m-auto w-full  px-4 md:px-10">
          <div className="py-6">
            <motion.div
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="relative flex items-center mb-6"
            >
              <h2 className="mx-auto text-3xl font-[600]">Sign Up</h2>
            </motion.div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="font-[400]">Full Address</label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="placeholder:text-black w-full px-4 font-[400] py-3 bg-[#EBF1FF] rounded-[10px] mt-1  focus:outline-none"
                />
              </div>

              {/* Country Dropdown */}
              <div ref={countryDropdownRef}>
                <label className="font-[400]">Country</label>
                <div className="relative">
                  <div
                    className="w-full px-4 py-3 bg-[#EBF1FF] rounded-[10px] mt-1  flex items-center justify-between cursor-pointer"
                    onClick={() => toggleDropdown("country")}
                  >
                    <div className="flex items-center">
                      <img
                        src={selectedCountry.flag}
                        alt=""
                        className="w-6 h-6 mr-2 object-cover rounded-full"
                      />
                      <span>{selectedCountry.name}</span>
                    </div>
                    <img
                      src={openDropdown === "country" ? UpIcon : downIcon}
                      alt="toggle"
                      className="h-2"
                    />
                  </div>

                  {openDropdown === "country" && (
                    <div className="absolute mt-1 w-full bg-white rounded-[10px] shadow-lg border border-gray-200 z-10 max-h-60 overflow-auto">
                      {countries.map((country) => (
                        <div
                          key={country.code}
                          className={`px-4 py-2 cursor-pointer rounded-[10px] flex items-center ${
                            selectedCountry.code === country.code ? "bg-blue-50 font-medium" : ""
                          }`}
                          onClick={() => handleSelect("country", country)}
                        >
                          <img
                            src={country.flag}
                            alt=""
                            className="w-6 h-6 mr-2 object-cover rounded-full"
                          />
                          <span>{country.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* City Dropdown */}
              <div ref={cityDropdownRef}>
                <label className="font-[400]">City</label>
                <div className="relative">
                  <div
                    className="w-full px-4 py-3 bg-[#EBF1FF] rounded-[10px] mt-1  flex items-center justify-between cursor-pointer"
                    onClick={() => toggleDropdown("city")}
                  >
                    <span>{selectedCity || "Select city"}</span>
                    <img
                      src={openDropdown === "city" ? UpIcon : downIcon}
                      alt="toggle"
                      className="h-2"
                    />
                  </div>

                  {openDropdown === "city" && (
                    <div className="absolute mt-1 w-full bg-white rounded-[10px] shadow-lg border border-gray-200 z-10">
                      {cities.map((city) => (
                        <div
                          key={city}
                          className={`px-4 py-2 cursor-pointer rounded-[10px] ${
                            selectedCity === city ? "bg-blue-50 font-medium" : ""
                          }`}
                          onClick={() => handleSelect("city", city)}
                        >
                          {city}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* State/Province Dropdown (only for US) */}
              {selectedCountry.name === "United States" && (
                <div ref={stateDropdownRef}>
                  <label className="font-[400]">State/Province</label>
                  <div className="relative">
                    <div
                      className="w-full px-4 py-3 bg-[#EBF1FF] rounded-[10px] mt-1  flex items-center justify-between cursor-pointer"
                      onClick={() => toggleDropdown("state")}
                    >
                      <span>{selectedState || "Select state"}</span>
                      <img
                        src={openDropdown === "state" ? UpIcon : downIcon}
                        alt="toggle"
                        className="h-2"
                      />
                    </div>

                    {openDropdown === "state" && (
                      <div className="absolute mt-1 w-full bg-white rounded-[10px] shadow-lg border border-gray-200 z-10 max-h-60 overflow-auto">
                        {usStates.map((state) => (
                          <div
                            key={state}
                            className={`px-4 py-2 cursor-pointer rounded-[10px] ${
                              selectedState === state ? "bg-blue-50 font-medium" : ""
                            }`}
                            onClick={() => handleSelect("state", state)}
                          >
                            {state}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div>
                <label className="font-[400]">Zip Code</label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="placeholder:text-black w-full px-4 py-3 bg-[#EBF1FF] rounded-[10px] mt-1  focus:outline-none"
                />
              </div>

              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Link
                    to="/Login"
                    className="md:w-3/4 w-full font-[400] mt-6 md:mt-12 text-center block mx-auto bg-[#00427E] text-white py-3 rounded-[8px]"
                  >
                    Complete Profile
                  </Link>
                </motion.div>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSignupDetail;