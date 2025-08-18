import React, { useState } from "react";
import bpimg6 from "../Assets/image6.png";
import { IoIosArrowDown } from "react-icons/io";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";

const CustomCheckbox = styled(Checkbox)(() => ({
  padding: 0,
  "& .MuiSvgIcon-root": {
    fontSize: 0,
  },
}));

function CanceledOrders() {
  // ✅ Each card ke liye checked step index (null = none selected)
  const [checkedStates, setCheckedStates] = useState([null, null]);

  // ✅ Multiple cards ke liye open state
  const [openCards, setOpenCards] = useState([false, false]);

  const handleChange = (cardIndex, stepIndex) => {
    const newCheckedStates = [...checkedStates];
    // ✅ Sirf ek step hi checked hoga per card
    newCheckedStates[cardIndex] =
      newCheckedStates[cardIndex] === stepIndex ? null : stepIndex;
    setCheckedStates(newCheckedStates);
  };

  const toggleCard = (cardIndex) => {
    const newOpenCards = [...openCards];
    newOpenCards[cardIndex] = !newOpenCards[cardIndex];
    setOpenCards(newOpenCards);
  };

  const steps = [
    { label: "Pending", date: "12-07-2025 2:30pm" },
    { label: "Confirmed", date: "12-07-2025 2:30pm" },
    { label: "In transit", date: "12-07-2025 2:30pm" },
    { label: "Out for delivery", date: "12-07-2025 2:30pm" },
    { label: "Delivered", date: "" },
  ];

  // ✅ Products list
  const products = [
    { name: "Automatic Blood Pressure", status: "Canceled" },
    { name: "Automatic Blood Pressure", status: "Canceled" },
  ];

  return (
    <div className="mt-5 space-y-6">
      {products.map((product, cardIndex) => (
        <div key={cardIndex} className="bg-white relative py-3 px-3 rounded-lg">
          {/* Product Info */}
          <div className="flex flex-col xl:flex-row items-center gap-3 lg:gap-6">
            <img
              src={bpimg6}
              alt="Advanced Dissection Kit"
              className="h-40 w-40 sm:h-48 sm:w-48 lg:h-50 lg:w-50 rounded-xl mx-auto xl:mx-0 flex-shrink-0"
            />

            <div className="w-full flex flex-col xl:flex-row items-center xl:justify-center gap-6 ">
              <div className="flex-1 ">
                <div className="py-3 flex flex-col lg:flex-row gap-4">
                  <p className="text-[#333333] font-medium text-lg sm:text-xl lg:text-2xl leading-tight pr-6 text-center xl:text-left">
                    {product.name}
                  </p>

                  {/* ✅ Arrow button toggle */}
                  <div
                    className="absolute right-2 top-2 py-2 px-2 bg-[#ebf1ff] text-2xl rounded-lg cursor-pointer"
                    onClick={() => toggleCard(cardIndex)}
                  >
                    <IoIosArrowDown
                      className={`transform transition-transform duration-300 ${
                        openCards[cardIndex] ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6 ">
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
                  <div>
                    <p className="text-[#8f8f8f] text-sm">Total Price:</p>
                    <p className="font-[500] text-[24px] cursor-pointer text-nowrap">
                      $100.00
                    </p>
                  </div>
                  <div>
                    <p className="text-[#8f8f8f] text-sm">Status:</p>
                    <p className="font-[500] text-[24px] text-[#ff0000] cursor-pointer text-nowrap">
                      {product.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Steps with single checkbox selection per card */}
          {openCards[cardIndex] && (
            <div className="mt-3 transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-6 gap-y-4 gap-x-40">
                {steps.map((step, stepIndex) => (
                  <div key={stepIndex}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-16 w-1 bg-[#00427e] rounded-t-full rounded-b-full mt-2"></div>
                        <div>
                          <p className="font-semibold text-[#333333] text-[24px]">
                            {step.label}
                          </p>
                          {step.date && (
                            <p className="text-[#999999]">{step.date}</p>
                          )}
                        </div>
                      </div>
                      <CustomCheckbox
                        checked={checkedStates[cardIndex] === stepIndex}
                        onChange={() => handleChange(cardIndex, stepIndex)}
                        icon={
                          <span
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: "50%",
                              backgroundColor: "#e0e7ff",
                              display: "inline-block",
                            }}
                          />
                        }
                        checkedIcon={
                          <span
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: "50%",
                              backgroundColor: "green",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                            }}
                          >
                            <CheckIcon style={{ fontSize: 18 }} />
                          </span>
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CanceledOrders;
