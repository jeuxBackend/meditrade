import React, { useState } from "react";
import footerlogo from "../Footer/Assets/footerlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
 
 

  return (
   <footer className="bg-[#00427e] text-white ">
            <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:items-center gap-5 px-4 py-4 lg:px-36 lg:py-10">
                {/* Logo */}
                <div className="">
                    <img src={footerlogo} alt="Logo" className="w-52" />
                </div>

                {/* Company */}
                <div className="">
                    <h3 className="text-2xl font-medium mb-3">Company</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link className={({ isActive }) =>
                                ` relative text-white 
                    ${isActive ? "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1" : "hover:underline"}`
                            }>
                                About Us
                            </Link>
                        </li>
                        <li><p className="hover:underline text-white">Our Progress</p></li>
                        <li><p className="hover:underline text-white">Report</p></li>
                    </ul>
                </div>

                {/* Help */}
                <div className="">
                    <h3 className="text-2xl font-medium mb-2">Help</h3>
                    <ul className="space-y-3">
                        <li><p className="hover:underline text-white">Contact Us</p></li>
                        <li>
                            <Link className={({ isActive }) =>
                                ` relative text-white 
                    ${isActive ? "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1" : "hover:underline"}`
                            }>
                                FAQS
                            </Link>
                        </li>
                        <li><p className="hover:underline text-white">Terms and Conditions</p></li>
                        <li><p className="hover:underline text-white">Privacy Policy</p></li>
                    </ul>
                </div>
            </div>

        </footer>
  );
};

export default Footer;
