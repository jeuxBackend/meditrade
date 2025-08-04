import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Websplash from './Components/WebComponents/Websplash/Websplash'
import Layout from './Website/WebsiteLayout/Layout'
import WebLogin from './Auth/WebAuth/WebLogin/Login'
import WebSignup from './Auth/WebAuth/WebSignup/WebSignup'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Websplash />} />
        <Route path="/Login" element={<WebLogin />} />
        <Route path="/WebSignup" element={<WebSignup />} />


        <Route element={<Layout />}>


        </Route>
      </Routes>
    </>
  )
}

export default App
