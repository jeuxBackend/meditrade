import React from "react";
import bgImage from "./Assets/HeroImg.png";
import { Link, useLocation } from "react-router-dom";
import idimg from "./Assets/idimg.png";
import cart from "./Assets/cart.png";
import setting from "./Assets/setting.png";
import pointimg from "./Assets/pointimg.png";
import leftcurveimg from "./Assets/leftcurveimg.png";
import rightcurveimg from "./Assets/rightcurveimg.png";
import curvelogo from "./Assets/curvelogo.png";
import msg from "./Assets/msg.png";
import service from "./Assets/service.png";
import logo from "./Assets/logo.png";
import HomeProductInformation from "./components/HomeProductInformation/HomeProductInformation";
import SeeMoreProduct from "./components/SeeMoreProduct/SeeMoreProduct";

const Home = () => {
  const location = useLocation();
 const isHeroFull =
  location.pathname === "/Home" ||
  location.pathname === "/MyOrder" ||
  location.pathname === "/SeeMoreProduct";

  return (
    <>
      <div className="w-full h-[100vh] ">
        <div
          className={`w-[97%] sm:w-[99%] mx-auto left-1.5 bg-cover top-3 bg-top absolute px-8 ${
            isHeroFull ? "h-screen" : "h-[70vh] mt-[80px]"
          }`}
          style={{
            backgroundImage: `url(${bgImage})`,
            borderBottomRightRadius: "85px",
            borderBottomLeftRadius: "85px"
          }}
        >
          <div className="absolute bottom-42 sm:bottom-60 left-2 bg-white  rounded-full py-4">
            <img src={idimg} alt="" className="h-10 sm:h-15 mx-auto" />
            <div className="flex items-center gap-1 sm:gap-2 px-2 py-2">
              <p className="text-md sm:text-2xl font-medium">120</p>
              <img src={pointimg} alt="" className="h-4 sm:h-6" />
            </div>
          </div>
          <div className="absolute bottom-6 sm:bottom-2 left-2">
            <img
              src={leftcurveimg}
              alt=""
              className="h-[130px] sm:h-[200px] "
            />
            <div className="absolute top-4 left-3 sm:left-4 space-y-4">
              <div className="bg-[#ebf1ff] p-1 sm:p-2 rounded-full border border-[#bcc1cc]">
                <img src={setting} alt="" className="h-7 sm:h-10" />
              </div>
              <div className="bg-[#ebf1ff] p-1 sm:p-2 rounded-full border border-[#bcc1cc]">
                <img src={cart} alt="" className="h-7 sm:h-10" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 sm:bottom-2 right-2 overflow-hidden">
            <img
              src={rightcurveimg}
              alt=""
              className="h-[220px] sm:h-[300px] "
            />
            <div className="absolute top-4 right-18">
              <img src={curvelogo} alt="" className="h-8 sm:h-13" />
            </div>
            <p className="absolute top-12 sm:top-19 -right-3 text-center text-black text-[9px] sm:text-[12px] px-4">
              At Meditrade, we’re committed to delivering genuine medicines and
              healthcare essentials right to your doorstep safely, quickly, and
              affordably. With a focus on trust, convenience, and care, we make
              sure your well-being is always our top priority.{" "}
            </p>

            <div className="absolute bottom-7 sm:bottom-10 right-7  space-x-3 flex">
              <div className="bg-[#ebf1ff] p-1 sm:p-2 rounded-full border border-[#bcc1cc]">
                <img src={service} alt="" className="h-6 sm:h-10" />
              </div>
              <div className="bg-[#ebf1ff] p-1 sm:p-2 rounded-full border border-[#bcc1cc]">
                <img src={msg} alt="" className="h-6 sm:h-10" />
              </div>
            </div>
            <div className="absolute bottom-2 sm:bottom-1 right-36 sm:right-50">
              <img src={logo} alt="" className="h-12 sm:h-20 " />
            </div>
          </div>
        </div>
      </div>

       {/* Conditional Content */}
      {location.pathname === "/Home" && <HomeProductInformation />}
      {location.pathname === "/SeeMoreProduct" && <SeeMoreProduct />}
    </>
  );
};

export default Home;
