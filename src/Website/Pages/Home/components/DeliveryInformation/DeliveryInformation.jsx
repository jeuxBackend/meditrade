import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import closeicon from "./Assets/closeicon.png";
import { IoCaretDownOutline } from "react-icons/io5";

function DeliveryInformation() {
  const navigate = useNavigate();

  // Dropdown open state
  const [openDropdown, setOpenDropdown] = useState(null);

  // Dropdown options
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

  return (
    <div className="px-3 md:px-7 py-4 mt-4">
      {/* Back Button */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={closeicon} alt="" className="h-8 md:h-9" />
        <p className="text-xl md:text-2xl font-semibold text-[#333333]">My Cart</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* LEFT SIDE - Delivery Form */}
        <div className="col-span-1 lg:col-span-2 space-y-3 mt-5">
          <div className="bg-white py-3 px-2 md:px-4 gap-3 rounded-xl">
            <p className="text-[#333333] font-semibold text-2xl">
              Delivery Information
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mt-4">
              {/* Full Name */}
              <div>
                <label className="px-1 text-[#999999]">Enter Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="placeholder:text-[#333333] font-medium w-full py-3 mt-2 rounded-xl bg-[#ebf1ff] px-3 outline-0"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="text-[#999999]">Phone Number</label>
                <div className="flex gap-2 mt-2">
                  {/* Phone Code Dropdown */}
                  <div className="relative w-35 md:w-32 bg-[#ebf1ff] font-medium rounded-xl">
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
                    className="w-full bg-[#ebf1ff] rounded-xl px-4 py-3 placeholder:text-[#333333] font-medium"
                    placeholder="85487 47853"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              {/* Country */}
              <div className="w-full relative">
                <label className="text-[#999999]">Country</label>
                <div
                  className="bg-[#ebf1ff] rounded-xl px-3 py-3 mt-2 cursor-pointer font-medium flex items-center"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "country" ? null : "country"
                    )
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
                  <div className="absolute left-0 top-full bg-[#ebf1ff] w-full mt-1 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
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

              {/* State */}
              <div className="w-full relative">
                <label className="text-[#999999]">State/Province</label>
                <div
                  className="bg-[#ebf1ff] rounded-xl px-3 py-3 mt-2 font-medium cursor-pointer flex items-center"
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
                  <div className="absolute bg-[#ebf1ff] w-full mt-1 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
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

              {/* City */}
              <div className="w-full relative">
                <label className="text-[#999999]">City</label>
                <div
                  className="bg-[#ebf1ff] rounded-xl px-3 py-3 mt-2 font-medium cursor-pointer flex items-center"
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
                  <div className="absolute bg-[#ebf1ff] w-full mt-1 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
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

              {/* Zip Code */}
              <div>
                <label className="px-1 text-[#999999]">Zip Code</label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="placeholder:text-[#333333] font-medium w-full py-3 mt-2 rounded-xl bg-[#ebf1ff] px-3 outline-0"
                />
              </div>

              {/* Full Address (Full Width) */}
              <div className="md:col-span-2">
                <label className="px-1 text-[#999999]">Full Address</label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="placeholder:text-[#333333] font-medium w-full py-3 mt-2 rounded-xl bg-[#ebf1ff] px-3 outline-0"
                />
              </div>
            </div>

            <div className="flex items-center justify-center mt-2 md:justify-end">
              <div className="flex items-center my-3 w-full md:w-[40%] justify-center  bg-[#00427e] cursor-pointer py-3 text-white gap-2 rounded-md">
                <p className="text-nowrap text-sm lg:text-base">
                  Save for later use
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Order Summary */}
        <div className="col-span-1 mt-5">
          <div className="bg-white rounded-xl px-5 py-5">
            <p className="font-semibold text-2xl text-[#333333]">
              Order Summary
            </p>
            <div className="border-b-2 border-dashed border-[#a3a3a3] py-3">
              <div className="flex items-center justify-between py-2 text-[#333333]">
                <p className="font-medium">Subtotal (2 items):</p>
                <p className="font-semibold text-xl">$200.00</p>
              </div>
              <div className="flex items-center justify-between text-[#333333]">
                <p className="font-medium">Shipping Fee:</p>
                <p className="font-semibold text-xl">$10.09</p>
              </div>
            </div>
            <div className="border-b-2 border-dashed border-[#a3a3a3] py-3">
              <div className="flex items-center justify-between py-2 text-[#333333]">
                <p className="font-medium">Total:</p>
                <p className="font-semibold text-xl">$210.00</p>
              </div>
              <div className="flex items-center justify-between text-[#333333]">
                <p className="font-medium">Use Loyalty Points:</p>
                <p className="font-semibold text-xl">-</p>
              </div>
            </div>
            <div className="border-b-2 border-dashed border-[#a3a3a3] py-3">
              <div className="flex items-center justify-between py-2 text-[#333333]">
                <p className="font-medium">Total Payable:</p>
                <p className="font-semibold text-xl">$210.00</p>
              </div>
            </div>
            <div className="mt-15 px-5">
              <Link to="/PaymentMethod">
                <div className="flex items-center my-3 justify-center w-full bg-[#00427e] cursor-pointer py-3 text-white gap-2 rounded-md">
                  <p className="text-nowrap text-sm lg:text-base">
                    Proceed To Pay
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInformation;
