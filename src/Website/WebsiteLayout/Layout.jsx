import React from "react";
import WebNavbar from "../../Components/WebComponents/WebNavbar/WebNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/WebComponents/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="bg-[#EBF1FF] ">
        <WebNavbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
