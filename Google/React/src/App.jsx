import React from 'react'
import  GoogleHome  from './pages/GoogleHome'
import  GoogleResults  from './pages/GoogleResults'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleHome />} />
        <Route path="/search" element={<GoogleResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App