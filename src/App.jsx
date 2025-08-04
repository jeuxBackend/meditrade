import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Websplash from "./Components/WebComponents/Websplash/Websplash";
import Login from "./Auth/WebAuth/Login/Login";
import Layout from "./Website/WebsiteLayout/Layout";
import Home from "./Website/Pages/Home/Home";
import MyOrder from "./Website/Pages/MyOrder/MyOrder";
import MyOrderProductDetails from "./Website/Pages/MyOrder/components/MyOrderProductDetails/MyOrderProductDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Websplash />} />
        <Route path="/Login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/MyOrder" element={<MyOrder />} />
          <Route path="/MyOrderProductDetails" element={<MyOrderProductDetails />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
