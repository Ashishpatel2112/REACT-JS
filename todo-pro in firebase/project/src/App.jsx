import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Comp/Signup'
import Signin from './Comp/Signin'
import Home from './Comp/Home'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Signup}></Route>
      <Route path='/signin' Component={Signin}></Route>
      <Route path='/home' Component={Home}></Route>
    </Routes>
    </BrowserRouter>
      
  )
}
