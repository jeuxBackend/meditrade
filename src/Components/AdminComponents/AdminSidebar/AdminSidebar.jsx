import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import logOutImg from "./Assets/LogoutImg.png";
import Dashboard from "./Assets/DashboardImg.png";
import Logo from "./Assets/LogoImg.png";
import UsersImg from "./Assets/UsersImg.png";
import ProductImg from "./Assets/ProductImg.png";
import BrandImg from "./Assets/BrandImg.png";
import QuoteImg from "./Assets/QuoteImg.png";
import OrderImg from "./Assets/OrderImg.png";
import SubAdminImg from "./Assets/SubAdminImg.png";
import SettingImg from "./Assets/SettingImg.png";
import arrowImg from "./Assets/arrowImg.png";

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activePath, setActivePath] = useState(location.pathname);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [pageHeading, setPageHeading] = useState("Dashboard");

  // Sidebar links
  const links = [
    {
      path: "/AdminDashboard",
      img: Dashboard,
      label: "Dashboard",
      routes: ["/AdminDashboard", "/TopSellingProducts"],
    },
    {
      path: "/AdminUsers",
      img: UsersImg,
      label: "Users",
      routes: ["/AdminUsers"],
    },
    {
      path: "/AdminProductManagement",
      img: ProductImg,
      label: "Product Management",
      routes: ["/AdminProductManagement"],
    },
    {
      path: "/AdminBrand",
      img: BrandImg,
      label: "Brand",
      routes: ["/AdminBrand"],
    },
    {
      path: "/AdminQuoteRequests",
      img: QuoteImg,
      label: "Quote Requests",
      routes: ["/AdminQuoteRequests"],
    },
    {
      path: "/AdminOrderManagement",
      img: OrderImg,
      label: "Order Management",
      routes: ["/AdminOrderManagement"],
    },
    {
      path: "/AdminSubAdmins",
      img: SubAdminImg,
      label: "Sub-Admins",
      routes: ["AdminSubAdmins"],
    },
    {
      path: "/AdminSettings",
      img: SettingImg,
      label: "Settings",
      routes: ["/AdminSettings"],
    },
  ];

  // Page headings
  const pageConfigs = {
    "/AdminDashboard": { heading: "Dashboard" },
    "/TopSellingProducts": { heading: "To Selling Products" },
    "/RecentOrder": { heading: "Recent orders" },
    "/AdminUsers": { heading: "User Management" },
    "/AdminProductManagement": { heading: "Product Management" },
    "/AdminBrand": { heading: "Brand" },
    "/AdminQuoteRequests": { heading: "Quote Requests" },
    "/AdminOrderManagement": { heading: "Order Management" },
    "/AdminSubAdmins": { heading: "Sub-Admins" },
    "/AdminSettings": { heading: "Settings" },
  };
  const backEnabledPaths = ["/TopSellingProducts","/RecentOrder"];
  const isBackButtonAllowed = backEnabledPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  // Helpers
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const findActiveNavItem = (currentPath) =>
    links.find((link) =>
      link.routes?.some((route) => currentPath.startsWith(route))
    );

  // Update heading & active link
  useEffect(() => {
    const currentPath = location.pathname;
    setPageHeading(pageConfigs[currentPath]?.heading || "Dashboard");
    setActivePath(findActiveNavItem(currentPath)?.path || "/AdminDashboard");
  }, [location]);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render Sidebar Link
  const renderSidebarLink = (item) => {
    const isActive = activePath === item.path;
    const isHovered = hoveredPath === item.path;
    const shouldHighlight = isActive || isHovered;

    return (
      <motion.div
        key={item.path}
        variants={{
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
        }}
      >
        <Link
          to={item.path}
          onClick={closeSidebar}
          onMouseEnter={() => setHoveredPath(item.path)}
          onMouseLeave={() => setHoveredPath(null)}
          className="flex px-0"
        >
          {shouldHighlight && (
            <span className="bg-white w-[5px] rounded-r-full h-auto"></span>
          )}
          <motion.div
            className={`w-[245px] py-3 ms-3 flex items-center ps-4 rounded-lg transition-all duration-300 text-white ${
              shouldHighlight ? "bg-white/25" : ""
            }`}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-[25px] h-[25px]"
            />
            <span className="ms-2 text-[17px]">{item.label}</span>
          </motion.div>
        </Link>
      </motion.div>
    );
  };

  return (
    <>
      {/* Topbar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="lg:ml-[290px] ml-auto flex justify-between items-center md:p-6 p-4 shadow-sm border-b-2 border-gray-200"
      >
        <div className="flex items-center gap-x-2">
          {isBackButtonAllowed ? (
            <img
              src={arrowImg}
              className="w-[35px] cursor-pointer"
              onClick={() => navigate(-1)}
              title="Go Back"
            />
          ) : (
            <img
              src={arrowImg}
              className="w-[35px] hidden"
              title="Back not available on this page"
            />
          )}
          <h1 className="md:text-[25px] text-[20px] font-bold">
            {pageHeading}
          </h1>
        </div>
        <button
          onClick={toggleSidebar}
          className="lg:hidden rounded-lg bg-[#00427E] p-2 shadow-md text-white"
        >
          <AiOutlineMenu size={20} />
        </button>
      </motion.div>

      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || screenWidth >= 1024) && (
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 sidebar bg-[#00427E] py-10 text-white w-[290px] h-full z-30 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400"
          >
            {/* Logo */}
            <div className="flex-shrink-0 mb-8 flex justify-center">
              <motion.img
                src={Logo}
                alt="Logo"
                className="w-[200px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Links */}
            <motion.div
              className="flex flex-col gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {},
              }}
            >
              <p className="pl-6 font-medium text-[14px]">Administration</p>
              {links
                .filter((item) =>
                  [
                    "Dashboard",
                    "Users",
                    "Product Management",
                    "Brand",
                    "Quote Requests",
                    "Order Management",
                    "Sub-Admins",
                    "Settings",
                  ].includes(item.label)
                )
                .map(renderSidebarLink)}
            </motion.div>

            {/* Logout */}
            <div
              className="ml-5 mt-10 cursor-pointer flex items-center gap-2 p-3 w-[245px] rounded-lg hover:bg-white/25"
              onClick={() => setIsLogOut(true)}
            >
              <img src={logOutImg} className="w-[25px] h-[25px]" alt="Logout" />
              <span className="text-[17px]">LogOut</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isSidebarOpen && screenWidth < 1024 && (
          <motion.div
            onClick={closeSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/25 lg:hidden z-20"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminSidebar;
