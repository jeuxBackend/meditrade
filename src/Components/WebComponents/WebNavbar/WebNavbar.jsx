import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import logo from "./Assets/logo.png";
import profile from "./Assets/profileImg.png";

const WebNavbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMinimalHeader =
    location.pathname === "/Home" ||
    location.pathname === "/MyOrder" ||
    location.pathname === "/SeeMoreProduct";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Home", path: "/Home" },
    { label: "My Orders", path: "/MyOrder" },
    { label: "Chat", path: "/WebChat" },
    { label: "Loyalty Program", path: "/LoyaltyProgram" },
  ];

  // All Home-related paths
  const homePaths = [
    "/Home",
    "/MyProductDetails",
    "/MyCart",
    "/SeeMoreProduct",
    "/DeliveryInformation",
    "/PaymentMethod",
    "/SelectCard",
  ];

  return (
    <div
      className={`border-b-2 border-[#e5e5e5] w-full md:px-8 px-4 relative ${
        isMinimalHeader ? "py-9" : "py-4"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        {!isMinimalHeader && (
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-14" />
          </Link>
        )}

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center space-x-6 lg:space-x-14 mx-auto">
          {navItems.map((item) => {
            const isActive =
              item.label === "Home"
                ? homePaths.some((path) =>
                    location.pathname.startsWith(path)
                  )
                : location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-all duration-200 z-10 ${
                  isActive
                    ? "text-[#00427E]"
                    : "text-[#8dabcb] hover:text-[#00427E]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-7 h-0.5 bg-[#00427e] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Profile */}
        {!isMinimalHeader && (
          <div className="hidden lg:flex items-center space-x-3">
            <img src={profile} alt="Profile" className="h-10" />
            <h1 className="text-[#0A2223] font-[500] pt-2">Scott Johnston</h1>
          </div>
        )}

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black hover:text-green-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <RxCross1 className="text-[30px] font-[600]" />
            ) : (
              <CiMenuFries className="text-[30px] font-[600]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 border-t-2 border-[#d3d9e5]">
          <div className="flex flex-col space-y-4 pt-2 pb-3">
            {navItems.map((item) => {
              const isActive =
                item.label === "Home"
                  ? homePaths.some((path) =>
                      location.pathname.startsWith(path)
                    )
                  : location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2 py-1 font-medium ${
                    isActive
                      ? "text-[#00427e] border-l-4 border-[#00427e] pl-2"
                      : "text-[#8dabcb]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default WebNavbar;
