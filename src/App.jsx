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
import AdminLayout from "./Admin/AdminLayOut/AdminLayout";
import AdminDashBoard from "./Admin/pages/AdminDashBoard/AdminDashBoard";
import AdminUsers from "./Admin/pages/AdminUsers/AdminUsers";
import AdminProductManagement from "./Admin/pages/AdminProductManagement/AdminProductManagement";
import MyCart from "./Website/Pages/Home/components/MyCart/MyCart";
import AdminBrand from "./Admin/pages/AdminBrand/AdminBrand";
import AdminQuoteRequests from "./Admin/pages/AdminQuoteRequests/AdminQuoteRequests";
import AdminOrderManagement from "./Admin/pages/AdminOrderManagement/AdminOrderManagement";
import AdminSubAdmins from "./Admin/pages/AdminSubadmins/AdminSubadmins";
import AdminSettings from "./Admin/pages/AdminSettings/AdminSettings";
import DeliveryInformation from "./Website/Pages/Home/components/DeliveryInformation/DeliveryInformation";
import PaymentMethod from "./Website/Pages/Home/components/PaymentMethod/PaymentMethod";
import SelectCard from "./Website/Pages/Home/components/SelectCard/SelectCard";
import TopSellingProducts from "./Admin/pages/AdminDashBoard/Components/TopSellingProducts/TopSellingProducts";
import SeeMoreProduct from "./Website/Pages/Home/components/SeeMoreProduct/SeeMoreProduct";
import HomeProductInformation from "./Website/Pages/Home/components/HomeProductInformation/HomeProductInformation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Websplash />} />
        <Route path="/Login" element={<WebLogin />} />
        <Route path="/WebSignup" element={<WebSignup />} />
        <Route element={<Layout />}>
         <Route path="/Home" element={<Home />} />
      <Route path="/SeeMoreProduct" element={<Home />} />
          {/* <Route path="/HomeProductInformation" element={<HomeProductInformation />} /> */}
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
          <Route path="/TopSellingProducts" element={<TopSellingProducts />} />
          <Route path="/AdminUsers" element={<AdminUsers />} />
          <Route
            path="/AdminProductManagement"
            element={<AdminProductManagement />}
          />
          <Route path='/AdminBrand' element={<AdminBrand/>}/>
          <Route path='/AdminQuoteRequests' element={<AdminQuoteRequests/>}/>
          <Route path='/AdminOrderManagement' element={<AdminOrderManagement/>}/>
          <Route path='/AdminSubAdmins' element={<AdminSubAdmins/>}/>
          <Route path='/AdminSettings' element={<AdminSettings/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
