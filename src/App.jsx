import { Route, Routes } from "react-router-dom";
import Websplash from "./Components/WebComponents/Websplash/Websplash";
import Layout from "./Website/WebsiteLayout/Layout";
import WebLogin from "./Auth/WebAuth/WebLogin/WebLogin";
import WebSignup from "./Auth/WebAuth/WebSignup/WebSignup";
import Home from "./Website/Pages/Home/Home";
import MyOrder from "./Website/Pages/MyOrder/MyOrder";
import WebChat from "./Website/Pages/WebChat/WebChat";
import MyProductDetails from "./Website/Pages/Home/components/MyProductDetails/MyProductDetails";
import Login from "./Auth/AdminAuth/Login/Login";
import AdminLayout from "./Admin/AdminLayout";
import AdminDashBoard from "./Admin/pages/AdminDashBoard/AdminDashBoard";
import AdminUsers from "./Admin/pages/AdminUsers/AdminUsers";
import AdminProductManagement from "./Admin/pages/AdminProductManagement/AdminProductManagement";
import MyCart from "./Website/Pages/Home/components/MyCart/MyCart";
import DeliveryInformation from "./Website/Pages/Home/components/DeliveryInformation/DeliveryInformation";
import PaymentMethod from "./Website/Pages/Home/components/PaymentMethod/PaymentMethod";
import SelectCard from "./Website/Pages/Home/components/SelectCard/SelectCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Websplash />} />
        <Route path="/Login" element={<WebLogin />} />
        <Route path="/WebSignup" element={<WebSignup />} />
        <Route element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/MyOrder" element={<MyOrder />} />
          <Route path="/MyProductDetails" element={<MyProductDetails />} />
          <Route path="/MyCart" element={<MyCart />} />
          <Route path="/DeliveryInformation" element={<DeliveryInformation />} />
          <Route path="/PaymentMethod" element={<PaymentMethod />} />
          <Route path="/SelectCard" element={<SelectCard/>} />
          <Route path="/WebChat" element={<WebChat />} />
        </Route>
        {/* Admin side  */}
        <Route path="/Admin" element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
          <Route path="/AdminUsers" element={<AdminUsers />} />
          <Route
            path="/AdminProductManagement"
            element={<AdminProductManagement />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
