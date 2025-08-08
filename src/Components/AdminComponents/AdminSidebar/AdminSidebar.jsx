import { useEffect, useState } from "react";
import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

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
// import LogoutModal from "./LogoutModal/LogoutModal";


const AdminSidebar = () => {
 
  const location = useLocation();
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activePath, setActivePath] = useState(location.pathname);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [pageHeading, setPageHeading] = useState("Dashboard");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const links = [
    {
      path: "/AdminDashboard",
      img: Dashboard,
      label: "Dashboard",
      routes: ["/AdminDashboard"],
     
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
      routes: ["/"],
    
    },
    {
      path: "",
      img: BrandImg,
      label: "Brand",
      routes: [""],
      
    },
    {
      path: "",
      img: QuoteImg,
      label: "Quote Requests",
      routes: [""],
    
    },
    {
      path: "",
      img: OrderImg,
      label: "Order Management",
      routes: [""],
     
    },
    {
      path: "",
      img: SubAdminImg,
      label: "Sub-admins",
      routes: ["/"],
    
    },
    {
      path: "",
      img: SettingImg,
      label: "Settings",
      routes: [""],
      
    },
   
  ];

  const pageConfigs = {
    "/AdminDashboard": { heading: "Dashboard" },
    "/AdminUsers": { heading: "Users" },
    "/AdminProductManagement": { heading: "Product Management" },
    "/AdminFaq": { heading: "FAQ'S" },
    "/AdminTravelers": { heading: "Travelers Requests" },
  
  };

  const backEnabledPaths = ["/TravelDetails"];
  const isBackButtonAllowed = backEnabledPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const findActiveNavItem = (currentPath) =>
    links.find((link) =>
      link.routes?.some((route) => currentPath.startsWith(route))
    );

  useEffect(() => {
    const currentPath = location.pathname;
    const config = pageConfigs[currentPath] || { heading: "AdminDashboard" };
    setPageHeading(config.heading);

    const activeNavItem = findActiveNavItem(currentPath);
    if (activeNavItem) {
      setActivePath(activeNavItem.path);
    } else {
      setActivePath("/AdminDashboard");
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

//   const shouldShowLink = (link) => {
//     if (isMainAdmin()) return true; 

//     if (link.onlyForMainAdmin) return false; // sub-admin can't see

//     if (link.permissionKey) {
//       return hasPermission(link.permissionKey);
//     }

//     return true; // default: show
//   };

  const renderSidebarLink = (item) => {
    const isActive = activePath === item.path;
    const isHovered = hoveredPath === item.path;
    const shouldHighlight = isActive || isHovered;

    return (
      <motion.div
        key={item.path}
        variants={{
          hidden: { x: -50, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          },
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
            <span className="bg-[#ffffff] w-[5px] rounded-r-full h-auto"></span>
          )}
          <motion.div
            className={`w-[245px] py-3 ms-3 flex items-center ps-4 rounded-lg transition-all duration-300 text-white ${
              shouldHighlight ? "bg-[#ffffff3c]" : "bg-transparent"
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
        className="lg:ml-[290px] ml-auto flex justify-between items-center md:p-6 p-4 shadow-sm border-b-2 border-[#e4e4e4]"
      >
        <div className="flex items-center gap-x-2">
         
          <h1 className="text-[25px] font-bold">{pageHeading}</h1>
        </div>
        <button
          onClick={toggleSidebar}
          className="lg:hidden rounded-lg right-3 bg-[#00427E] p-2 shadow-md text-white"
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
            className="fixed top-0 left-0 sidebar px-0 bg-[#00427E] py-10 text-white w-[290px] h-full z-30 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400"
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

            {/* Categorized Links */}
            <motion.div
              className="flex flex-col gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {},
              }}
            >
              {/* Administration */}
<p className="pl-6 font-[500] text-[14px]">Administration</p>
{links
  .filter((item) =>
    [
      "Dashboard",
      "Users",
      "Product Management",
      "Commissions",
      "Report’s",
    ].includes(item.label)
  )
  .map(renderSidebarLink)}


            

              
             
              
            </motion.div>

            {/* Logout */}
            <div
              className="ml-5 mt-10 cursor-pointer flex items-center gap-2 p-3 w-[245px] rounded-lg hover:bg-[#ffffff3c]"
              onClick={() => setIsLogOut(true)}
            >
              <img
                src={logOutImg}
                className="w-[25px] h-[25px] cursor-pointer"
                alt="Logout"
              />
              <button className="ms-2 text-[17px] cursor-pointer">
                LogOut
              </button>
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
            className="fixed inset-0 bg-black/25 bg-opacity-50 lg:hidden z-20"
          />
        )}
      </AnimatePresence>

      {/* Logout Modal */}
      {/* {isLogOut && <LogoutModal onClose={() => setIsLogOut(false)} />} */}
    </>
  );
};

export default AdminSidebar;
