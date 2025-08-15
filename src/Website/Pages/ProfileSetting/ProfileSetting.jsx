import React, { useState } from "react";
import uploadicon from "./Assets/uploadicon.png";
import profileimage from "./Assets/profileimage.png";
import closeicon from "./Assets/closeicon.png";
import ChangePasswordModal from "./Modal/ChangePasswordModal";
import logoutimg from "./Assets/logoutimg.png";
import LogoutModal from "./Modal/LogoutModal";
import pointimg from "./Assets/pointimg.png";
import { useNavigate } from "react-router-dom";
import {
  ArrowBigRight,
  ArrowBigRightIcon,
  ArrowLeftIcon,
  ChevronRight
} from "lucide-react";
import { IoCaretDownOutline } from "react-icons/io5";
import ChangeEmailModal from "./Modal/ChangeEmailModal";
import VerifyCodeModal from "./Modal/VerifyCodeModal";
import NewEmailModal from "./Modal/NewEmailModal";

const ProfileSetting = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(profileimage);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [verifyCodeModal, setVerifyCodeModal] = useState(false);
  const [changeEmailModal, setChangeEmailModal] = useState(false);
  const [newEmailModal, setNewEmailModal] = useState(false);
  const navigate = useNavigate();

  const countries = [
    { code: "+1", flag: "https://flagcdn.com/us.svg", name: "USA" },
    { code: "+44", flag: "https://flagcdn.com/gb.svg", name: "UK" },
    { code: "+81", flag: "https://flagcdn.com/jp.svg", name: "Japan" },
    { code: "+86", flag: "https://flagcdn.com/cn.svg", name: "China" },
    { code: "+91", flag: "https://flagcdn.com/in.svg", name: "India" }
  ];

  const states = ["California", "Texas", "Tokyo", "Beijing", "Mumbai"];
  const cities = ["Los Angeles", "London", "Osaka", "Shanghai", "Delhi"];

  // Selected values
  const [selectedPhoneCode, setSelectedPhoneCode] = useState(countries[0]);
  const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
  const [selectedState, setSelectedState] = useState(states[0]);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const [phoneNumber, setPhoneNumber] = useState("");

  // Handle selection
  const handleSelect = (dropdown, value) => {
    if (dropdown === "phoneCode") setSelectedPhoneCode(value);
    if (dropdown === "country") setSelectedCountry(value);
    if (dropdown === "state") setSelectedState(value);
    if (dropdown === "city") setSelectedCity(value);
    setOpenDropdown(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setProfileImage(null);
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };
  const handleFromChangeEmailToVerify = () => {
    setChangeEmailModal(false);
    setVerifyCodeModal(true);
  };

  const handleFromVerifyToNewEmail = () => {
    setVerifyCodeModal(false);
    setNewEmailModal(true);
  };

  const handleCloseNewEmail = () => {
    setNewEmailModal(false);
  };

  return (
    <div className="w-full md:px-9 px-3 py-5">
      <style>{`::-webkit-scrollbar {display: none;}`}</style>

      <LogoutModal
        openLogoutModal={isLogoutModalOpen}
        closeLogoutModal={closeLogoutModal}
      />

      {changePasswordModal && (
        <ChangePasswordModal onClose={() => setChangePasswordModal(false)} />
      )}
      <ChangeEmailModal
        openChangeEmailModal={changeEmailModal}
        closeChangeEmailModal={() => setChangeEmailModal(false)}
        handleNext={handleFromChangeEmailToVerify}
      />

      <VerifyCodeModal
        openVerifyCodeModal={verifyCodeModal}
        closeVerifyCodeModal={() => setVerifyCodeModal(false)}
        handleNext={handleFromVerifyToNewEmail}
      />

      <NewEmailModal
        openNewEmailModal={newEmailModal}
        closeNewEmailModal={handleCloseNewEmail}
        handleNext={() => {
          handleCloseNewEmail();
        }}
      />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src={closeicon} alt="" className="h-8 md:h-9" />
          <p className="text-xl md:text-2xl font-semibold text-[#333333]">Profile Setting</p>
        </div>
        {/* Log Out */}
        <div className="relative">
          <div
            onClick={openLogoutModal}
            className="flex font-semibold justify-center bg-white text-[#333333] rounded-lg py-3 px-3 sm:px-7 gap-2 items-center cursor-pointer"
          >
            <img src={logoutimg} alt="Logout" className="h-6" />
            <p className="text-nowrap">Log Out</p>
          </div>
        </div>
      </div>

      {/* Profile Picture Section */}
      <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 gap-x-20 mt-9">
        <div className="flex gap-3 items-center flex-wrap">
          <div className="relative">
            <img
              src={profileImage || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-semibold">
              Profile Picture
            </p>
            <p className="text-[#84878d] text-xs md:text-sm">
              We recommend an image of at least 400×400.
            </p>
            <div className="w-42">
              <label className="cursor-pointer  bg-white px-4 py-3 font-semibold rounded-lg flex items-center gap-2">
                <img src={uploadicon} className="w-5 h-5" alt="Upload" />
                <p>Upload Image</p>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="border border-[#e1e2e3] bg-white rounded-xl py-4 px-6">
          <div className="flex justify-between items-center">
            <p className="text-[#333333] font-medium">Loyalty Points</p>
            <p className="font-semibold border border-[#e1e2e3] rounded-full px-6 py-1">
              History
            </p>
          </div>
          <div className="flex items-center gap-3 ">
            <p className="font-semibold text-5xl ">12,740</p>
            <img src={pointimg} alt="" className="h-8" />
          </div>
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 mt-6">
        <div>
          <label className="font-semibold">Full Name</label>
          <input
            type="text"
            placeholder="John "
            className="w-full mt-2  bg-white px-4 py-3 rounded-xl focus:outline-none"
          />
        </div>
        <div>
          <label className="font-semibold">User Role</label>
          <input
            type="email"
            placeholder="Pharmacy"
            className="w-full mt-2 bg-white px-4 py-3 rounded-xl focus:outline-none"
          />
        </div>
        {/* Phone Number */}
        <div>
          <label className="text-[#999999]">Phone Number</label>
          <div className="flex gap-2 mt-2">
            {/* Phone Code Dropdown */}
            <div className="relative w-35 md:w-32 bg-white font-medium rounded-xl">
              <div
                className="flex items-center px-3 py-3 cursor-pointer"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "phoneCode" ? null : "phoneCode"
                  )
                }
              >
                <img
                  src={selectedPhoneCode.flag}
                  alt=""
                  className="w-4 h-4 md:w-5 md:h-5 rounded-full object-cover mr-1"
                />
                <span>{selectedPhoneCode.code}</span>
                <IoCaretDownOutline
                  className={`ml-auto  text-[#777e90] ${
                    openDropdown === "phoneCode" ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openDropdown === "phoneCode" && (
                <div className="absolute bg-[#ebf1ff] w-full mt-1 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
                  {countries.map((c) => (
                    <div
                      key={c.code}
                      className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSelect("phoneCode", c)}
                    >
                      <img
                        src={c.flag}
                        alt=""
                        className="w-5 h-5 rounded-full mr-1 object-cover"
                      />
                      {c.code}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Phone Input */}
            <input
              type="text"
              className="w-full bg-white rounded-xl px-4 py-3 placeholder:text-[#333333] font-medium"
              placeholder="85487 47853"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        {/* City */}
        <div className="w-full relative">
          <label className="text-[#999999]">City</label>
          <div
            className="bg-white rounded-xl px-3 py-3 mt-2 font-medium cursor-pointer flex items-center"
            onClick={() =>
              setOpenDropdown(openDropdown === "city" ? null : "city")
            }
          >
            {selectedCity}
            <IoCaretDownOutline
              className={`ml-auto transition-transform text-[#777e90] ${
                openDropdown === "city" ? "rotate-180" : ""
              }`}
            />
          </div>
          {openDropdown === "city" && (
            <div className="absolute bg-white w-full mt-1 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
              {cities.map((city) => (
                <div
                  key={city}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelect("city", city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Country */}
        <div className="w-full relative">
          <label className="text-[#999999]">Country</label>
          <div
            className="bg-white rounded-xl px-3 py-3 mt-2 cursor-pointer font-medium flex items-center"
            onClick={() =>
              setOpenDropdown(openDropdown === "country" ? null : "country")
            }
          >
            {selectedCountry}
            <IoCaretDownOutline
              className={`ml-auto transition-transform text-[#777e90] ${
                openDropdown === "country" ? "rotate-180" : ""
              }`}
            />
          </div>
          {openDropdown === "country" && (
            <div className="absolute left-0 top-full bg-white w-full mt-1 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
              {countries.map((c) => (
                <div
                  key={c.name}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelect("country", c.name)}
                >
                  {c.name}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Zip Code */}
        <div>
          <label className="px-1 text-[#999999]">Zip Code</label>
          <input
            type="text"
            placeholder="Enter"
            className="placeholder:text-[#333333] font-medium w-full py-3 mt-2 rounded-xl bg-white px-3 outline-0"
          />
        </div>
        {/* State */}
        <div className="w-full relative">
          <label className="text-[#999999]">State/Province</label>
          <div
            className="bg-white rounded-xl px-3 py-3 mt-2 font-medium cursor-pointer flex items-center"
            onClick={() =>
              setOpenDropdown(openDropdown === "state" ? null : "state")
            }
          >
            {selectedState}
            <IoCaretDownOutline
              className={`ml-auto transition-transform text-[#777e90] ${
                openDropdown === "state" ? "rotate-180" : ""
              }`}
            />
          </div>
          {openDropdown === "state" && (
            <div className="absolute bg-white w-full mt-1 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
              {states.map((s) => (
                <div
                  key={s}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelect("state", s)}
                >
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Full Address (Full Width) */}
        <div className="md:col-span-2">
          <label className="px-1 text-[#999999]">Full Address</label>
          <input
            type="text"
            placeholder="Enter"
            className="placeholder:text-[#333333] font-medium w-full py-3 mt-2 rounded-xl bg-white px-3 outline-0"
          />
        </div>
      </div>

      {/* Password Section */}
      <div
        onClick={() => setChangePasswordModal(true)}
        className="mt-10 border-t-2 border-[#e5e5e5] pt-6 w-full  py-6 cursor-pointer"
      >
        <h3 className="text-lg  font-semibold">Password</h3>
        <p className="text-[#84878d]">
          Your password was last changed on{" "}
          <span className="font-semibold text-black">3rd July 2024</span>
        </p>
        <button className="bg-white px-10 md:px-20 py-3 mt-4 rounded-lg text-lg cursor-pointer font-semibold">
          Change Password
        </button>
      </div>
      <div className="mt-10 border-t-2 border-[#e5e5e5] pt-6 w-full  py-6 cursor-pointer">
        <h3 className="text-lg font-semibold">Email</h3>
        <p className="text-[#84878d]">
          Your email was last changed on{" "}
          <span className="font-semibold text-black">3rd July 2024</span>
        </p>
        <button
          onClick={() => setChangeEmailModal(true)}
          className="bg-white px-10 md:px-20 py-3 mt-4 rounded-lg text-lg cursor-pointer font-semibold"
        >
          Change Email
        </button>
      </div>

      {/* Save & Discard Buttons */}
      <div className="mt-5 border-t-2 border-[#e5e5e5] pt-6 flex md:justify-end gap-4 w-full justify-center md:px-10">
        <button className="bg-white text-black font-semibold px-7 py-3 rounded-lg cursor-pointer">
          Discard
        </button>
        <button className="bg-[#00427e] text-white px-5 font-semibold py-3 rounded-lg cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileSetting;
