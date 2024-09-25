import React from 'react'
import '../App.css'

export default function Five() {
  return (
    <>
         <div class="section8 h-[30vh] w-[100%] border border-white flex">
        <div class="add h-[inherit] w-[25%] border border-white flex">
            <div class="one border border-white h-[inherit] w-32 flex items-center justify-center">
                <div class="icon h-20 w-20 border border-gray-300 rounded-full flex justify-center items-center ms-8">
                    <i class="fa-solid fa-cube text-5xl"></i>
                </div>
            </div>
            <div class="two border border-white h-[inherit] w-64  ">
                <h1 class="mt-[75px] font-bold text-xl">Free Shiping</h1>
                <p class="text-[gray]" >Free shipping over order $120</p>
            </div>
        </div>

        <div class="add h-[inherit] w-[25%] border border-white flex">
            <div class="one border border-white h-[inherit] w-32 flex items-center justify-center">
                <div class="icon h-20 w-20 border border-gray-300 rounded-full flex justify-center items-center ms-8">
                    <i class="fa-regular fa-credit-card text-5xl"></i>
                </div>
            </div>
            <div class="two border border-white h-[inherit] w-64  ">
                <h1 class="mt-[75px] font-bold text-xl">Flexible Payment</h1>
                <p class="text-[gray]" >Pay with Multiple Credit Cards</p>
            </div>
        </div>

        <div class="add h-[inherit] w-[25%] border border-white flex">
            <div class="one border border-white h-[inherit] w-32 flex items-center justify-center">
                <div class="icon h-20 w-20 border border-gray-300 rounded-full flex justify-center items-center ms-8">
                    <i class="fa-solid fa-arrow-turn-down fa-rotate-90 text-5xl"></i>
                </div>
            </div>
            <div class="two border border-white h-[inherit] w-64  ">
                <h1 class="mt-[75px] font-bold text-xl">14 Day Returns</h1>
                <p class="text-[gray]" >Within 30 days for an exchange</p>
            </div>
        </div>

        <div class="add h-[inherit] w-[25%] border border-transparent flex">
            <div class="one border border-transparent h-[inherit] w-32 flex items-center justify-center">
                <div class="icon h-20 w-20 border border-gray-300 rounded-full flex justify-center items-center ms-8">
                    <i class="fa-solid fa-headset text-5xl"></i>
                </div>
            </div>
            <div class="two border border-transparent h-[inherit] w-64  ">
                <h1 class="mt-[75px] font-bold text-xl">Premium Suport</h1>
                <p class="text-[gray]">Outstanding premium support</p>
            </div>
        </div>
        
    </div>

    <div class="section9 h-[100vh] mt-1 w-[100%] border border-transparent flex justify-center items-center">
        <div id="map" class="map h-[90%] w-[95%] border border-transparent">
            <div class="info h-[60%] w-[30%] bg-white m-44">
                <h1 class="text-3xl font-bold p-5">Toronto Store</h1>
                <h1 class="ms-5 text-gray-500">301 Front St W Toronto, Canada <br/> support@ecomus.com <br /> (08) 8942 1299</h1>
                <h1 class="ms-5 mt-5 text-gray-500">Mon - Fri, 8:30am - 10:30pm <br/> Saturday, 8:30am - 10:30pm <br />  Sunday Closed</h1>
                <h1 class=" ms-5 underline hover:text-[rgb(252,87,50)] cursor-pointer mt-8 ">Get Directions <i class="fa-solid fa-arrow-right"></i></h1>
            </div>
        </div>
    </div>

    <div class="section10 h-[20vh] w-[100%] border border-transparent flex items-center justify-center ">
        <div class="advertice h-[80%] w-[95%] border border-transparent flex items-center ">
            <div class="com h-[inherit] w-[17%] border border-gray-300 flex justify-center items-center"><img src="001fashion-brand-01.png" alt=""/></div>
            <div class="com h-[inherit] w-[17%] border border-gray-300 flex justify-center items-center"><img src="001fashion-brand-02.png" alt=""/></div>
            <div class="com h-[inherit] w-[17%] border border-gray-300 flex justify-center items-center"><img src="001fashion-brand-03.png" alt=""/></div>
            <div class="com h-[inherit] w-[17%] border border-gray-300 flex justify-center items-center"><img src="001fashion-brand-04.png" alt=""/></div>
            <div class="com h-[inherit] w-[17%] border border-gray-300 flex justify-center items-center"><img src="001fashion-brand-05.png" alt=""/></div>
            <div class="com h-[inherit] w-[17%] border border-gray-300 flex justify-center items-center"><img src="001fashion-brand-06.png" alt=""/></div>
        </div>
    </div>

    </>
  )
}
