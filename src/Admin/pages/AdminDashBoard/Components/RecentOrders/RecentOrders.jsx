import React from "react";
import { motion } from "framer-motion";
import ProductImg from "../Assets/ProductImg.png";
import OrderImg from "../Assets/OrderImg.png";
import ActiveImg from "../Assets/ActiveImg.png";
import UnActiveImg from "../Assets/UnActiveImg.png";
import DocumentImg from "../Assets/DocumentImg.png";

const orders = [
  {
    id: 1,
    name: "Jasica John",
    role: "Doctor",
    totalPrice: "$100",
    quantity: 4,
    productName: "Automatic Blood Pressure",
    productImg: ProductImg,
    statuses: [
      { label: "Pending", date: "12-07-2025  2:30pm", active: true },
      { label: "Confirmed", date: "12-07-2025  2:30pm", active: true },
      { label: "In transit", date: "12-07-2025  2:30pm", active: false },
      { label: "Out for delivery", date: "12-07-2025  2:30pm", active: false },
      { label: "Delivered", date: "12-07-2025  2:30pm", active: false },
    ],
  },
  {
    id: 2,
    name: "Jasica John",
    role: "Doctor",
    totalPrice: "$100",
    quantity: 4,
    productName: "Automatic Blood Pressure",
    productImg: ProductImg,
    statuses: [
      { label: "Pending", date: "12-07-2025  2:30pm", active: true },
      { label: "Confirmed", date: "12-07-2025  2:30pm", active: true },
      { label: "In transit", date: "12-07-2025  2:30pm", active: false },
      { label: "Out for delivery", date: "12-07-2025  2:30pm", active: false },
      { label: "Delivered", date: "12-07-2025  2:30pm", active: false },
    ],
  },
];

const RecentOrders = () => {
  return (
    <div className="bg-[#fafafa] lg:ml-[295px]">
          <style>{`::-webkit-scrollbar { display: none; }`}</style>
      <div className="md:p-6 p-3 space-y-4">
        {orders.map((order) => (
          <motion.div
            key={order.id}
            className="bg-white md:p-4 p-2 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Top User Info */}
            <div className="flex justify-between items-center md:flex-nowrap flex-wrap gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={OrderImg}
                    alt="User"
                    className="w-18 h-18 rounded-full object-cover"
                  />
                  <p className="font-medium text-lg md:text-xl">{order.name}</p>
                </div>
                <div className="border-2 rounded-lg border-[#f0f0f1] p-3 grid grid-cols-3 gap-4 text-center md:text-left">
                  <div>
                    <p className="text-sm text-[#999999]">User Role:</p>
                    <p className="text-lg font-medium">{order.role}</p>
                  </div>
                  <div
                    className="md:pl-6 pl-3"
                    style={{
                      borderLeft: "3px solid",
                      borderImage:
                        "linear-gradient(to bottom, transparent, #e4e4e4, transparent) 4",
                    }}
                  >
                    <p className="text-sm text-[#999999]">Total Price:</p>
                    <p className="text-lg font-medium">{order.totalPrice}</p>
                  </div>
                  <div
                    className="md:pl-6 pl-3"
                    style={{
                      borderLeft: "3px solid",
                      borderImage:
                        "linear-gradient(to bottom, transparent, #e4e4e4, transparent) 4",
                    }}
                  >
                    <p className="text-sm text-[#999999]">Quantity:</p>
                    <p className="text-lg font-medium">{order.quantity}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <img
                  src={DocumentImg}
                  alt="Document"
                  className="w-16 cursor-pointer"
                />
                <button className="cursor-pointer text-white py-3 px-6 font-medium text-base rounded-lg bg-[#00427e]">
                  Out for delivery
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="border-t-2 border-dashed border-[#a3a3a3] my-5">
              <div className="mt-5 flex flex-wrap gap-6 items-start">
                {/* Product Image */}
                <div className="md:w-52 w-full">
                  <img
                    src={order.productImg}
                    alt={order.productName}
                    className="h-52 w-full object-cover rounded-xl"
                  />
                </div>
                {/* Product Details */}
                <div className="flex-1">
                  <p className="text-xl md:text-2xl font-medium">
                    {order.productName}
                  </p>
                  <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-2">
                    {order.statuses.map((status, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        
                        {/* Hide line for first two statuses */}
                        {index > 1 ? (
                          <div className="w-1 h-12 rounded-full bg-[#00427e]"></div>
                        ) : (
                           <div className="w-1 h-12 rounded-full bg-[#00427e]"></div>
                        )}
                        <div>
                          <div className="flex items-center gap-3">
                            <p className="text-lg font-medium">
                              {status.label}
                            </p>
                            <motion.img
                              src={status.active ? ActiveImg : UnActiveImg}
                              alt={status.label}
                              className="w-5"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>
                          <p className="text-sm text-[#8c8c8c]">
                            {status.date}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
