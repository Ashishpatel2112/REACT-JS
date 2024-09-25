import React from 'react'
import img1 from '../assets/split3.png'
import Navbar from './Navbar'


export default function First() {
  return (
    <>
    <Navbar/>
     <div className="section1 h-[100vh] w-[100%] border border-transparent flex">
        <div className="sec h-[inherit] w-[50%] border border-transparent bg-[rgb(238,241,224)] flex items-center">
            <div className="text w-[90%] h-[60%] border border-transparent ms-[10%] ">
                <h1 className="text-8xl text-[151515] ps-1">Summer</h1>
                <h1 className="text-8xl text-[151515] ps-1">Escapades</h1>
                <p className="text-xl mt-4">Embrace the sun-kissed season with our collection of breezy </p>
                <button className="bg-white h-[50px] w-[200px] mt-[35px]">Shop Collection  <i className="fa-solid fa-chevron-right"></i> </button>
            </div>
        </div>
        <div className="sec h-[inherit] w-[50%] border border-transparent"><img src={img1} alt="" className="h-[inherit] w-[100%]"/></div>
    </div> 
    </>
  )
}
