import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Websplash from './Components/WebComponents/Websplash/Websplash'
import Layout from './Website/WebsiteLayout/Layout'
import WebLogin from './Auth/WebAuth/WebLogin/Login'
import WebSignup from './Auth/WebAuth/WebSignup/WebSignup'
import Home from './Website/Pages/Home/Home'
import MyOrder from './Website/Pages/MyOrder/MyOrder'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Websplash />} />
        <Route path="/Login" element={<WebLogin />} />
        <Route path="/WebSignup" element={<WebSignup />} />


        <Route element={<Layout />}>

          <Route path='/Home' element={<Home />} />
          <Route path='/MyOrder' element={<MyOrder />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
