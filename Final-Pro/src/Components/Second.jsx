import React from 'react'
import img1 from '../assets/01.jpg'
import img2 from '../assets/02.jpg'
import img3 from '../assets/03.jpg'
import img4 from '../assets/04.jpg'
import img5 from '../assets/05.png'
import img6 from '../assets/06.jpg'
import { Link } from 'react-router-dom'


export default function Second() {
  return (
    <>
      <div class="section2 h-[90vh] w-[100%] bg-[rgb(250,248,242)]">
     <div class="section flex justify-between border border-transparent">
        <h1 class="text-4xl p-4">Season Collection</h1>
        <Link className='hover:text-[rgb(219,18,21)] underline p-9'> View All Category <i class="fa-solid fa-arrow-right"></i></Link>
     </div>
     <div class="section border border-transparent h-[83%] flex justify-evenly flex-wrap">
        <div class="pro h-[100%] w-[15%] border border-transparent ">
            <div class="img"><img src={img1} alt="" class="h-[250px] w-[250px] mt-28 rounded-full hover:scale-105 "/></div>
            <div class="text">
                <h1 class="text-center mt-10 hover:text-[rgb(219,18,21)]">Women's</h1>
                <p class="text-center">23 items</p>
            </div>
        </div>
        <div class="pro h-[100%] w-[15%] border border-transparent ">
            <div class="img"><img src={img2} alt="" class="h-[250px] w-[250px] mt-28 rounded-full hover:scale-105"/></div>
            <div class="text">
                <h1 class="text-center mt-10 hover:text-[rgb(219,18,21)]">men's</h1>
                <p class="text-center">9 items</p>
            </div>
        </div>
        <div class="pro h-[100%] w-[15%] border border-transparent ">
            <div class="img"><img src={img3} alt="" class="h-[250px] w-[250px] mt-28 rounded-full hover:scale-105"/></div>
            <div class="text">
                <h1 class="text-center mt-10 hover:text-[rgb(219,18,21)]">jewelry</h1>
                <p class="text-center">31 items</p>
            </div>
        </div>
        <div class="pro h-[100%] w-[15%] border border-transparent ">
            <div class="img"><img src={img4} alt="" class="h-[250px] w-[250px] mt-28 rounded-full hover:scale-105"/></div>
            <div class="text">
                <h1 class="text-center mt-10 hover:text-[rgb(219,18,21)]">Snekkers</h1>
                <p class="text-center">21 items</p>
            </div>
        </div>
        <div class="pro h-[100%] w-[15%] border border-transparent ">
            <div class="img"><img src={img5} alt="" class="h-[250px] w-[250px] mt-28 rounded-full hover:scale-105"/></div>
            <div class="text">
                <h1 class="text-center mt-10 hover:text-[rgb(219,18,21)]">Bags</h1>
                <p class="text-center">5 items</p>
            </div>
        </div>
        <div class="pro h-[100%] w-[15%] border border-transparent ">
            <div class="img"><img src={img6} alt="" class="h-[250px] w-[250px] mt-28 rounded-full hover:scale-105"/></div>
            <div class="text">
                <h1 class="text-center mt-10 hover:text-[rgb(219,18,21)]">Glasses</h1>
                <p class="text-center">14 items</p>
            </div>
        </div>
       
     </div>
    </div> 
    </>
  )
}
