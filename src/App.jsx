

import { Route, Routes } from 'react-router-dom'
import Websplash from './Components/WebComponents/Websplash/Websplash'
import Layout from './Website/WebsiteLayout/Layout'
import WebLogin from './Auth/WebAuth/WebLogin/WebLogin'
import WebSignup from './Auth/WebAuth/WebSignup/WebSignup'
import Home from './Website/Pages/Home/Home'
import MyOrder from './Website/Pages/MyOrder/MyOrder'
import WebChat from "./Website/Pages/WebChat/WebChat";
import MyOrderProductDetails from "./Website/Pages/MyOrder/components/MyOrderProductDetails/MyOrderProductDetails";
import Login from './Auth/AdminAuth/Login/Login'
import AdminLayout from './Admin/AdminLayout'
import AdminDashBoard from './Admin/pages/AdminDashBoard/AdminDashBoard'
import AdminUsers from './Admin/pages/AdminUsers/AdminUsers'
import AdminProductManagement from './Admin/pages/AdminProductManagement/AdminProductManagement'

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
            <Route path="/MyOrderProductDetails" element={<MyOrderProductDetails />} />
          <Route path="/WebChat" element={<WebChat />} />
        </Route>
        {/* Admin side  */}
        <Route path='/Admin' element={<Login/>} />
        <Route element={<AdminLayout/>}>
<Route path='/AdminDashBoard' element={<AdminDashBoard/>}/>
<Route path='/AdminUsers' element={<AdminUsers/>}/>
<Route path='/AdminProductManagement' element={<AdminProductManagement/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
