import React from 'react'
import { BrowserRouter, Route, Routes } from'react-router-dom'
import Main from './Components/Main'
import Cart from './Components/Cart'
import Login from './Components/Login'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="main" element={<Main/>}></Route>
      <Route path="cart" element={<Cart/>}></Route>
      <Route path="login" element={<Login/>}></Route>

    </Routes>
    </BrowserRouter>

  )
}
