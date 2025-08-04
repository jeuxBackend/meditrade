import React from "react";
import WebNavbar from "../../Components/WebComponents/WebNavbar/WebNavbar";
import { Outlet } from "react-router-dom";
import WebFooter from "../../Components/WebComponents/Webfooter/Webfooter";

const Layout = () => {
  return (
    <div>
      <div className="bg-[#EBF1FF]">
        <WebNavbar />
        <Outlet />
      </div>
      <WebFooter />
    </div>
  );
};

export default Layout;
