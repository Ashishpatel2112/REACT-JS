import React from 'react'
import '../App.css'
import signimg from '../assets/signin-image.jpg'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
       <div className="main border border-transperant h-[100vh] w-[100vw] flex">
           <div className="img border border-transparent h-[100%] w-[50%] flex justify-end items-center ">
              <img src={signimg} alt=""className='h-[60%]' />
              {/* <a href="login"> CREATE A ACCOUNT </a> */}
            </div>

                <div className="login border border-transparent w-[50%] flex justify-center flex-col">
                    <h1 className='text-3xl font-semibold '> sign up</h1>
                    <form className='border border-transparent w-[60%] h-[50%]'>

                        <div className="name  ">
                            <label for="">
                                <i className="fa-solid fa-user text-3xl ms-5 mt-5"></i>
                            </label>
                            <input type="text" placeholder=" your name" className="y-name " required/>
                        </div>

                        <div className="password">
                            <label for="">
                                <i className="fa-solid fa-lock text-3xl ms-5 mt-5"></i>
                            </label>
                            <input type="password" placeholder=" your password" className="y-password" required/>
                        </div>
                         
                        <div className="check">

                            <input type="checkbox" placeholder="" className=" click ms-10 mt-5" required/>
                            <u>Remember me </u>
                        </div>

                     <button className='h-[50px] w-[150px] border-none bg-cyan-500 text-[20px] rounded-[15px] text-white m-5'>  <Link to="/main">log in</Link>  </button> 
                    </form>
                </div>
     </div> 
    </>
  )
}
