import React from 'react'
import us from '../assets/us.svg'
import { Link } from 'react-router-dom'



export default function Navbar() {
  return (
    <>
             <div className="header h-[60px] w-[100%] border border-transparent flex ">
        <div className="sec  h-[inherit] w-[20%] border border-transparent flex justify-evenly items-center">
            <button className="flex text-sm"><img src={us} alt="" className="h-6 mx-2"/> USD <i className="fa-solid fa-chevron-down mx-2 mt-1"></i></button>
            <button className="flex text-sm"> ENGLISH <i className="fa-solid fa-chevron-down mx-2"></i></button>
        </div>
        <div className="sec1 h-[inherit] w-[60%] border border-transparent flex justify-center items-center">
            <a href=""><img src="logo-black2.svg" alt="" className="h-6"/></a>
        </div>
        <div className="sec2 h-[inherit] w-[20%] border border-transparent flex justify-center items-center">
            <i className="fa-solid fa-magnifying-glass text-2xl px-2 hover:text-[rgb(219,18,21)]"></i>
            <i className="fa-regular fa-user text-2xl px-2 hover:text-[rgb(219,18,21)]"></i>
            <i className="fa-regular fa-heart text-2xl px-2 hover:text-[rgb(219,18,21)]"></i>
            <Link to="/cart"> <i className="fa-solid fa-bag-shopping text-2xl px-2 hover:text-[rgb(219,18,21)]"></i></Link>

        </div>
    </div>
    
    <div className="head h-[60px] w-[100%] border border-gray-200 flex justify-center items-center">
        <Link to="/" className='px-2' >Home <i className="fa-solid fa-chevron-down "></i></Link>
        <Link className='px-2'  >Shop <i className="fa-solid fa-chevron-down "></i></Link>
        <Link className='px-2' >Products <i className="fa-solid fa-chevron-down "></i></Link>
        <Link className='px-2' >Pages <i className="fa-solid fa-chevron-down "></i></Link>
        <Link className='px-2' >Blog <i className="fa-solid fa-chevron-down "></i></Link>
        <Link className='px-2' >Buy now <i className="fa-solid fa-chevron-down "></i></Link>
    </div> 
    </>
  )
}
