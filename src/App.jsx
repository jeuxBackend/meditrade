import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Websplash from './Components/WebComponents/Websplash/Websplash'
import Layout from './Website/WebsiteLayout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Websplash />} />
        <Route element={<Layout/>}>


        </Route>
      </Routes>
    </>
  )
}

export default App
