import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Websplash from './Components/WebComponents/Websplash/Websplash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Websplash />} />
      </Routes>
    </>
  )
}

export default App
