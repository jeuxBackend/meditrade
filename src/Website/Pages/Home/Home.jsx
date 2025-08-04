import React from "react";
import bgImage from "./Assets/HeroImg.png";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const isHeroFull = location.pathname === "/Home" || location.pathname === "/MyOrder";

  return (
    <div
      className={`w-full bg-cover bg-top absolute  top-2 ${
        isHeroFull ? "h-screen" : "h-[80vh] mt-[80px] "
      }`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
     
    </div>
  );
};

export default Home;
