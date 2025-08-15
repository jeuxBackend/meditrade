import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiArrowDownSFill } from "react-icons/ri";

import uploadicon from "../Assets/uploadicon.png";
import profileimage from "../Assets/image1.png";

const EditUser = () => {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedCountryValue, setSelectedCountryValue] = useState("");
  const [countrySearchValue, setCountrySearchValue] = useState("");

  const countriesList = [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Switzerland",
    "Japan",
    "China",
    "India",
    "Pakistan",
  ];

  const filteredCountries = countriesList.filter((country) =>
    country.toLowerCase().includes(countrySearchValue.toLowerCase())
  );

  const handleCountrySelectName = (country) => {
    setSelectedCountryValue(country);
    setIsCountryOpen(false);
    setCountrySearchValue("");
  };
  const cities = [
    "London",
    "Manchester",
    "Birmingham",
    "Liverpool",
    "Leeds",
    "Glasgow",
    "Edinburgh",
    "Bristol",
    "Cardiff",
    "Sheffield",
    "Newcastle upon Tyne",
    "Nottingham",
    "Leicester",
    "Southampton",
    "Cambridge",
    "Oxford",
    "York",
    "Aberdeen",
    "Brighton",
    "Belfast",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (city) => {
    setSelectedCity(city);
    setIsOpen(false);
    setSearchTerm("");
  };
  const initialUserData = {
    name: "Scott",
    surname: "Johnston",
    email: "scott.jh@email.com",
    phone: "+1 (234) 567 - 891",
    profile_pic: profileimage,
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState({
    code: "+81",
    flag: "🇯🇵",
  });
  const [phoneNumber, setPhoneNumber] = useState();

  const countries = [
    { code: "+1", flag: "🇺🇸" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+81", flag: "🇯🇵" },
    { code: "+86", flag: "🇨🇳" },
    { code: "+91", flag: "🇮🇳" },
  ];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const [profileImage, setProfileImage] = useState(initialUserData.profile_pic);
  const [userData, setUserData] = useState(initialUserData);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };
  // state
  const [showStateList, setShowStateList] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const handleSelectStateList = (state) => {
    setSelectedState(state);
    setShowStateList(false);
  };
  return (
    <div className="bg-[#fafafa] lg:ml-[295px]">
      <style>{` ::-webkit-scrollbar { display: none;}`}</style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:p-6 p-3 min-h-screen"
      >
        {/* Top Section */}
        <div className="">
          {/* Left Profile Info */}
          <div className="flex  items-center gap-3">
            <div>
              <img
                src={profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="mt-3 md-0">
              <p className="text-black font-semibold text-lg md:text-2xl">
                Profile Picture
              </p>
              <p className="md:text-md text-xs text-[#808080]">
                We recommend an image of at least 400x400.
              </p>
              <label className="cursor-pointer bg-[#ebf1ff] w-[180px] md:px-5  p-3   rounded-lg flex items-center gap-2 mt-2">
                <img src={uploadicon} className="w-5 h-5" alt="Upload" />
                Upload Image
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-16 mt-10">
          <div>
            <label className="text-[18px] font-[400] text-black">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Romas Almas"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="w-full mt-1 px-4 py-3 outline-none  rounded-xl bg-[#ebf1ff] "
            />
          </div>

          <div>
            <label className="text-[18px] font-[400] text-black">
              Email Address
            </label>
            <input
              type="email"
              placeholder="sara.cruz@example.com"
              className="w-full mt-1 px-4 py-3  outline-none  rounded-xl bg-[#ebf1ff]  "
            />
          </div>
          <div>
            <label className="text-[18px] font-[400] text-black">
              Password
            </label>
            <input
              type="text"
              placeholder="*********"
              className="w-full mt-1 px-4 py-3  outline-none  rounded-xl bg-[#ebf1ff]  "
            />
          </div>

          {/* City  */}
          <div className="relative w-full">
            <label className="text-[18px] font-[400] text-black">City</label>

            {/* Dropdown Display */}
            <div
              className="w-full mt-1 px-4 py-3 outline-none rounded-xl bg-[#ebf1ff] cursor-pointer flex justify-between items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={selectedCity ? "text-black" : "text-gray-500"}>
                {selectedCity || "Select your city"}
              </span>
              <RiArrowDownSFill
                className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute w-full mt-1 bg-white rounded-xl shadow-lg max-h-60 overflow-y-auto z-50">
                {/* Search Box */}
                <div className="p-2">
                  <input
                    type="text"
                    placeholder="Search city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

                {/* City List */}
                {filteredCities.length > 0 ? (
                  filteredCities.map((city, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 hover:bg-[#ebf1ff] cursor-pointer text-black"
                      onClick={() => handleSelect(city)}
                    >
                      {city}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">No cities found</div>
                )}
              </div>
            )}
          </div>
          {/* Zip Code  */}

          {/* Phone Number */}
          <div className="w-full">
            <label className="text-[18px] font-[400]">Phone Number</label>
            <div className="w-full flex">
              {/* Country code dropdown */}
              <div className="w-28 flex items-center border-r border-[#e8e8e8]  gap-2 bg-[#ebf1ff] rounded-l-md mt-1">
                <div className="relative w-full">
                  <div
                    className="flex items-center px-3 py-3 cursor-pointer w-full"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="mr-2">{selectedCountry.flag}</span>
                    <span>{selectedCountry.code}</span>
                    <svg
                      className={`ml-auto h-4 w-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
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
                    <div className="absolute z-10 mt-1 w-full bg-[#ebf1ff] rounded-r-xl shadow-lg   max-h-60 overflow-auto">
                      {countries.map((country) => (
                        <div
                          key={country.code}
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center ${
                            selectedCountry.code === country.code
                              ? "bg-blue-50"
                              : ""
                          }`}
                          onClick={() => handleCountrySelect(country)}
                        >
                          <span className="mr-2">{country.flag}</span>
                          <span className="font-medium">{country.code}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Phone number input */}
              <div className="w-full">
                <input
                  type="text"
                  id="phone"
                  className=" placeholder:text-[#808080] w-full px-4 py-3.5 mt-1 rounded-r-xl  text-sm bg-[#ebf1ff] focus:outline-none "
                  value={phoneNumber}
                  placeholder="+1 (234) 567 - 891"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-lg semi-bold text-black">Zip Code</label>
            <input
              type="text"
              placeholder="10299"
              className="w-full mt-1 px-4 py-3  outline-none  rounded-xl bg-[#ebf1ff]  "
            />
          </div>
          {/* Country  */}
          <div className="relative w-full">
            <label className="text-[18px] font-[400] text-black">Country</label>
            <div
              className="w-full mt-1 px-4 py-3 bg-[#ebf1ff] rounded-xl cursor-pointer flex justify-between items-center"
              onClick={() => setIsCountryOpen(!isCountryOpen)}
            >
              {selectedCountryValue || "Select a country"}

              <RiArrowDownSFill
                className={`transition-transform text-xl text-[#777e90] duration-300 ${
                  isCountryOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isCountryOpen && (
              <div className="absolute mt-1 w-full bg-white rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
                <input
                  type="text"
                  placeholder="Search country..."
                  className="w-full px-4 py-2 border-b outline-none"
                  value={countrySearchValue}
                  onChange={(e) => setCountrySearchValue(e.target.value)}
                  autoFocus
                />
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() => handleCountrySelectName(country)}
                    >
                      {country}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">
                    No countries found
                  </div>
                )}
              </div>
            )}
          </div>
          {/* User Role */}
          <div>
            <label className="text-[18px] font-[400] text-black">
              User Role
            </label>
            <input
              type="text"
              placeholder="Doctor"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="w-full mt-1 px-4 py-3 outline-none  rounded-xl bg-[#ebf1ff] "
            />
          </div>
          {/* State/Province */}
          <div className="relative">
            <label className="text-[18px] font-[400] text-black">
              State/Province
            </label>

            <div
              onClick={() => setShowStateList(!showStateList)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-[#ebf1ff] flex items-center justify-between cursor-pointer"
            >
              <span className={selectedState ? "text-black" : "text-gray-500"}>
                {selectedState || "Select State/Province"}
              </span>
              <RiArrowDownSFill
                className={`transition-transform duration-300 text-xl text-[#777e90] ${
                  showStateList ? "rotate-180" : ""
                }`}
              />
            </div>

            {showStateList && (
              <div className="absolute w-full mt-1 bg-white rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
                {states.map((state, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectStateList(state)}
                    className="px-4 py-2 hover:bg-[#ebf1ff] cursor-pointer"
                  >
                    {state}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Full Address */}
          <div>
            <label className="text-[18px] font-[400] text-black">
              Full Address
            </label>
            <input
              type="text"
              placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="w-full mt-1 px-4 py-3 outline-none  rounded-xl bg-[#ebf1ff] "
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-8 pt-8 flex justify-end gap-4">
          <button className="bg-[#EFF0F0] text-black px-6 py-3 rounded-xl cursor-pointer  font-semibold">
            Discard
          </button>
          <button className="bg-[#00427e] text-white px-6 py-3 rounded-xl cursor-pointer  font-semibold">
            Save Changes
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EditUser;
