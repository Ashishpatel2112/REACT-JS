import React from 'react'
import foot1 from '../assets/foot01.svg'
import foot2 from '../assets/foot02.svg'
import foot3 from '../assets/foot03.svg'
import foot4 from '../assets/foot04.svg'
import foot5 from '../assets/foot05.svg'


export default function Footer() {
  return (
    <>
      <div class="footer h-[50vh] w-[100%] bg-[rgb(245,245,245)] flex">
        <div class="foot h-[inherit] w-[25%] border border-transparent">
            <div class="info m-6"><img src="logo-black2 (1).svg" alt=""/></div>
            <div class="info">
                <h1 class="text-[rgb(84,84,84)] ms-6 ">Address: 1234 Fashion Street, Suite 567,<br/>New York, NY<br/>Email: <span class="font-bold">info@fashionshop.com</span> <br/>Phone: <span  class="font-bold">(212)555-1234</span> </h1>
                <h1 class="  underline hover:text-[rgb(252,87,50)] cursor-pointer  m-6">Get Directions <i class="fa-solid fa-arrow-right"></i></h1>
            </div>
            <div class="info h-[40px] w-[60%] border border-transparent flex justify-evenly ms-2">
                <div class="app h-[35px] w-[35px] border border-black rounded-full flex justify-center items-center hover:text-sky-900 hover:border-sky-900">
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div class="app h-[35px] w-[35px] border border-black rounded-full flex justify-center items-center hover:text-sky-900 hover:border-sky-900">
                    <i class="fa-brands fa-x-twitter"></i>
                </div>
                <div class="app h-[35px] w-[35px] border border-black rounded-full flex justify-center items-center hover:text-[rgb(252,87,50)] hover:border-[rgb(252,87,50)]">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div class="app h-[35px] w-[35px] border border-black rounded-full flex justify-center items-center hover:text-[rgb(252,87,50)] hover:border-[rgb(252,87,50)]">
                    <i class="fa-brands fa-tiktok"></i>
                </div>
                <div class="app h-[35px] w-[35px] border border-black rounded-full flex justify-center items-center hover:text-[rgb(252,87,50)] hover:border-[rgb(252,87,50)]">
                    <i class="fa-brands fa-pinterest-p"></i>
                </div>
            </div>
        </div>
        <div class="foot h-[inherit] w-[25%] border border-transparent">
            <h1 class="font-bold text-2xl ms-10 mt-4">Help</h1>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-10 mt-2 cursor-pointer">Privacy Policy</p>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-10 mt-2 cursor-pointer">Returns + Exchanges</p>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-10 mt-2 cursor-pointer">Shipping</p>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-10 mt-2 cursor-pointer">Terms & Conditions</p>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-10 mt-2 cursor-pointer">FAQ’s</p>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-10 mt-2 cursor-pointer">Compare</p>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-10 mt-2 cursor-pointer">My Wishlist</p>
        </div>
        <div class="foot h-[inherit] w-[25%] border border-transparent">
            <h1 class="font-bold text-2xl ms-10 mt-4">About us</h1>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-11 mt-2 cursor-pointer">Our Story</p>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-11 mt-2 cursor-pointer">Visit Our Store</p>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-11 mt-2 cursor-pointer">Contact Us</p>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-11 mt-2 cursor-pointer">About Us</p>
            <p class="text-[rgb(84,84,84)] hover:text-[rgb(252,87,50)] ms-11 mt-2 cursor-pointer">Account</p>
        </div>
        <div class="foot h-[inherit] w-[25%] border border-transparent">
            <h1 class=" text-2xl m-4">Sign Up for Email</h1>
            <p class="text-[rgb(84,84,84)] ms-4">Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
            <div class="email border rounded-xl h-[50px] w-[90%] mt-16 ms-3 bg-white ">
                <input type="email" placeholder="Enter Your email address " class=" ms-4  w-[60%] h-[100%] py-1 placeholder:text-center   "/>
                <button class="text-white bg-black p-3 ">Subscribe <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>

    <div class="footer2 h-[60px] border bg-[rgb(245,245,245)] flex items-center justify-between ">
        <h1 class="ms-10" ><i class="fa-solid fa-c"></i> 2024 Ecomus . All rights reserved.</h1>
        <div class="price flex  w-[15%] h-[inherit] items-center justify-evenly ">
            <div class="card cursor-pointer"> <img src={foot1} alt=""/> </div>
            <div class="card cursor-pointer"> <img src={foot2} alt=""/> </div>
            <div class="card cursor-pointer"> <img src={foot3} alt=""/> </div>
            <div class="card cursor-pointer"> <img src={foot4} alt=""/> </div>
            <div class="card cursor-pointer"> <img src={foot5} alt=""/> </div>
        </div>
    </div>
    </>
  )
}
