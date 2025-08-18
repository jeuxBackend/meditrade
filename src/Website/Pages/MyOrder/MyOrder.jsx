import React, { useState } from "react";
import PendingOrders from "./components/PendingOrders/PendingOrders";
import CanceledOrders from "./components/CanceledOrders/CanceledOrders";
import ActiveOrders from "./components/ActiveOrders/ActiveOrders";
import CompletedOrders from "./components/CompletedOrders/CompletedOrders";

function MyOrder() {
  const [activeTab, setActiveTab] = useState("Pending");

   const stats = [
    { label: "Pending", value: "1,905", color: "text-[#ff0000]" },
    { label: "Confirmed", value: "3,526", color: "text-[#007ced]" },
    { label: "Dispatched", value: "154", color: "text-[#00427e]" },
    { label: "Delivered", value: "54", color: "text-[#5fc454]" }
  ];
  return (
    <div className="px-4 md:px-7 min-h-screen py-4 mt-4">
         <div className="bg-white grid grid-cols-2 lg:grid-cols-4 py-4 rounded-md border-2 border-[#f0f0f1] overflow-hidden">
      {stats.map((stat, index) => (
        <div 
          key={stat.label}
          className={`py-4 px-6 text-center ${
            index < stats.length - 1 
              ? 'border-b sm:border-b-0 sm:border-r-2 border-[#f0f0f1]' 
              : ''
          } ${
            index === 1 && 'sm:border-r-0 lg:border-r-2'
          }`}
        >
          <p className={`${stat.color} py-2 font-semibold pr-0 md:pr-10 text-sm sm:text-base`}>
            {stat.label}
          </p>
          <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#2e2c34] pb-2">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-y-3 gap-x-6 mt-5">
        <p
          onClick={() => setActiveTab("Pending")}
          className={`py-3 text-center rounded-lg cursor-pointer ${
            activeTab === "Pending" ? "bg-[#00427e] text-white" : "bg-white"
          }`}
        >
          Pending Orders
        </p>

        <p
          onClick={() => setActiveTab("active")}
          className={`py-3 text-center rounded-lg cursor-pointer ${
            activeTab === "active" ? "bg-[#00427e] text-white" : "bg-white"
          }`}
        >
          Active Orders
        </p>

        <p
          onClick={() => setActiveTab("completed")}
          className={`py-3 text-center rounded-lg text-nowrap  cursor-pointer ${
            activeTab === "completed" ? "bg-[#00427e] text-white" : "bg-white"
          }`}
        >
          Completed Orders
        </p>

        <p
          onClick={() => setActiveTab("canceled")}
          className={`py-3 text-center rounded-lg cursor-pointer ${
            activeTab === "canceled" ? "bg-[#00427e] text-white" : "bg-white"
          }`}
        >
          Canceled Orders
        </p>
      </div>
      <div className="mt-6">
        {activeTab === "Pending" && <PendingOrders />}
        {activeTab === "active" && <ActiveOrders />}
        {activeTab === "completed" && <CompletedOrders />}
        {activeTab === "canceled" && <CanceledOrders />}
      </div>
    </div>
  );
}

export default MyOrder;
