import React from 'react'
import { useState } from 'react'
import main from './Hoc'

function Home({count,increment}) {
  return (
    <>

{/* Navbar */}
    <div className="navbar border border-transparent h-[100px] w-full flex fixed top-0 bg-white z-10">
    <div className="nav h-[100%] w-[20%] border border-transparent flex justify-end items-center">
        <img src="https://template.hasthemes.com/sinp/sinp/assets/images/logo/logo.webp" className='me-20' alt="" />
    </div>
    <div className="nav h-[100%] w-[60%] border border-transparent text-2xl text-[rgb(27,43,73)] flex justify-start items-center ">
        <a href="" className=' text-center  px-6 hover:text-[rgb(252,101,57)] '>Home</a>
        <a href="" className=' text-center  px-6 hover:text-[rgb(252,101,57)] '>Shop</a>
        <a href="" className=' text-center  px-6 hover:text-[rgb(252,101,57)] '>Blog</a>
        <a href="" className=' text-center  px-6 hover:text-[rgb(252,101,57)] '>Pages</a>
        <a href="" className=' text-center  px-6 hover:text-[rgb(252,101,57)] '>Contact</a>
    </div>
    <div className="nav h-[100%] w-[20%] border border-transparent text-xl flex justify-start items-center  ">
    <i className="fa-regular fa-magnifying-glass hover:text-[rgb(252,101,57)] mx-5"></i>
    <i className="fa-light fa-bag-shopping hover:text-[rgb(252,101,57)] text-2xl "></i> <span className=' text-gray-600 text-[15px]'>$245</span>
    <i className="fa-light fa-gear-complex hover:text-[rgb(252,101,57)] mx-2"></i>
    </div>

     </div>

{/* hero1 */}
    <div className="hero1 h-[100vh] w-full flex  ">
    <div className="herosub1 h-full w-[50%] border border-transparent">
        <h2 className=' text-[rgb(252,101,57)] ms-[120px] text-2xl font-bold mt-[20%]'># Looking Very Nice</h2>
        <h1 className=' text-[rgb(6,38,75)] text-8xl font-bold ms-[100px] my-10'>𝓜𝓲𝓷𝓲𝓶𝓪𝓵 <br/> 𝓦𝓪𝓽𝓬𝓱</h1>
        <p className=' font-semibold text-[rgb(6,38,75)] text-lg ms-[100px]'>Experience the decibels like your ears deserve to. Safe for <br/>
        the ears, very for the heart. A treat to your ears.</p>
        <button className="learn-more mt-5 ms-[100px] z-0">
  <span className="circle" aria-hidden="true"><span className="icon arrow"></span></span><span className="button-text">Learn More</span></button>
    </div>
    <div className="herosub1 h-full w-[50%] border border-transparent flex justify-center items-center">
        <img src="https://template.hasthemes.com/sinp/sinp/assets/images/hero/sm/slider2.webp" className='mt-[10%]' alt="" />
    </div>
    </div>

    <div className="disp h-[100px] border border-transparent w-full text-center">
        <h1 className=' text-[rgb(252,101,57)] py-3'>EXPLORE THE AWESOME</h1>
        <h1 className=' text-[rgb(6,38,75)] font-bold text-3xl'>Product Feature</h1>
    </div>

{/* hero2 */}
    <div className="hero2 h-[100vh] w-full border border-transparent flex" >
    <div className="herosub2 border border-transparent h-[100%] w-[35%] ">
        <div className="hero2sub border border-transparent h-[25%] w-full flex">
            <div className="hero2sub2 border border-transparent h-full w-[80%] text-end">
                <h1 className='font-bold text-2xl text-[rgb(6,38,75)] py-5'>Firsted Reply</h1>
                <p className=' text-[rgb(6,38,75)] text-lg '>Respond to texts and messages directly <br/> from your wrist</p>
            </div>
            <div className="hero2sub2 border border-transparent h-full w-[20%] flex justify-center items-center">
            <i className="fa-solid fa-reply text-[45px] text-[rgb(6,38,75)]"></i>
            </div>
        </div>
        <div className="hero2sub border border-transparent h-[25%] w-full flex">
            <div className="hero2sub2 border border-transparent h-full w-[80%] text-end">
                 <h1 className='font-bold text-2xl text-[rgb(6,38,75)] py-5'>Battery Life</h1>
                <p className=' text-[rgb(6,38,75)] text-lg '>Maximise your battery life on standby, and <br /> tilt your wrist.</p>
            </div>
            <div className="hero2sub2 border border-transparent h-full w-[20%] flex justify-center items-center">
            <i className="fa-regular fa-battery-full text-[50px] text-[rgb(6,38,75)]"></i>
            </div>
        </div>
        <div className="hero2sub border border-transparent h-[25%] w-full flex">
            <div className="hero2sub2 border border-transparent h-full w-[80%] text-end">
                 <h1 className='font-bold text-2xl text-[rgb(6,38,75)] py-5'>Personal Assistant</h1>
                <p className=' text-[rgb(6,38,75)] text-lg '>Receive incoming calls or speed dial <br /> contacts without phone</p>
            </div>
            <div className="hero2sub2 border border-transparent h-full w-[20%] flex justify-center items-center ">
            <i className="fa-solid fa-microphone-lines text-[50px] text-[rgb(6,38,75)] "></i>
            </div>
        </div>
        <div className="hero2sub border border-transparent h-[25%] w-full flex">
            <div className="hero2sub2 border border-transparent h-full w-[80%] text-end">
                 <h1 className='font-bold text-2xl text-[rgb(6,38,75)] py-5'>Anti Glare</h1>
                <p className=' text-[rgb(6,38,75)] text-lg '>Incoming calls or speed dial contacts <br /> without reaching.</p>
            </div>
            <div className="hero2sub2 border border-transparent h-full w-[20%] flex justify-center items-center">
            <i className="fa-regular fa-brightness text-[rgb(6,38,75)] text-[50px]"></i>
            </div>
        </div>
    </div>
    <div className="herosub2 border border-transparent h-[100%] w-[30%] flex justify-center items-center">
        <img src="https://template.hasthemes.com/sinp/sinp/assets/images/banner/featured2.webp" alt="" />
    </div>
    <div className="herosub2 border border-transparent h-[100%] w-[35%] ">
        <div className="hero2sub border border-transparent h-[25%] w-full flex">
        <div className="hero2sub2 border border-transparent h-full w-[20%] flex justify-center items-center">
        <i class="fa-duotone fa-watch-fitness  text-[45px] text-[rgb(6,38,75)]"></i>
            </div>
            <div className="hero2sub2 border border-transparent h-full w-[80%] ">
                <h1 className='font-bold text-2xl text-[hsl(212,85%,16%)] py-5'>Fitness Tracking</h1>
                <p className=' text-[rgb(6,38,75)] text-lg '>Monitor and track your steps and distance <br /> day to day</p>
            </div>
            
        </div>
        <div className="hero2sub border border-transparent h-[25%] w-full flex">
            <div className="hero2sub2 border border-transparent h-full w-[20%] flex justify-center items-center">
            <i className="fa-duotone fa-phone text-[50px] text-[rgb(6,38,75)]"></i>
            </div>
            <div className="hero2sub2 border border-transparent h-full w-[80%] ">
                 <h1 className='font-bold text-2xl text-[rgb(6,38,75)] py-5'>Manage Calls</h1>
                <p className=' text-[rgb(6,38,75)] text-lg '>Receive incoming calls or speed dial <br /> reaching your phone</p>
            </div>
            
        </div>
        <div className="hero2sub border border-transparent h-[25%] w-full flex">
            <div className="hero2sub2 border border-transparent h-full w-[20%] flex justify-center items-center ">
            <i className="fa-brands fa-android text-[50px] text-[rgb(6,38,75)]"></i>
            </div>
            <div className="hero2sub2 border border-transparent h-full w-[80%] ">
                 <h1 className='font-bold text-2xl text-[rgb(6,38,75)] py-5'>App Launch</h1>
                <p className=' text-[rgb(6,38,75)] text-lg '>Shortcuts to your favorite apps directly on <br/> your watchface</p>
            </div>
           
        </div>
        <div className="hero2sub border border-transparent h-[25%] w-full flex">
            <div className="hero2sub2 border border-transparent h-full w-[20%] flex justify-center items-center">
            <i className="fa-duotone fa-music text-[rgb(6,38,75)] text-[50px]"></i>
            </div>
            <div className="hero2sub2 border border-transparent h-full w-[80%] ">
                 <h1 className='font-bold text-2xl text-[rgb(6,38,75)] py-5'>Music Control</h1>
                <p className=' text-[rgb(6,38,75)] text-lg '>Easily accessible playback commands for <br /> your</p>
            </div>
            
        </div>
    </div>
    </div>

    
    <div className="disp2 h-[100px] border border-transparent w-full text-center">
        <h1 className=' text-[rgb(252,101,57)] py-3'>EXPLORE THE AWESOME</h1>
        <h1 className=' text-[rgb(6,38,75)] font-bold text-3xl'>Featured Products</h1>
    </div>

{/* hero3 */}
    <div className="hero3 h-[80vh] w-full border border-transparent flex justify-around items-center">
    <div className="herosub3 border border-transparent h-[90%] w-[22%]">
        <div className="herosub33 border border-transparent h-[70%] w-full overflow-hidden">
            <img src="https://template.hasthemes.com/sinp/sinp/assets/images/products/lg/product3.webp" className='product h-[100%] w-[100%] ' alt="" />
        </div>
        <div className="herosub33 border border-transparent h-[30%] w-full">
            <h1 className='pt-5 ps-5 text-lg'>Nemo Troduct Esde</h1>
            <h1 className='font-bold text-[rgb(252,101,57)] text-xl ps-5'>Price:-130$ </h1>
            <h1 className='font-bold text-lg ps-5'>Quentity :-{count}</h1>
            <div className="wrapper"><button onClick={increment}> ADD</button></div>
        </div>
    </div>
    <div className="herosub3 border border-transparent h-[90%] w-[22%]">
         <div className="herosub33 border border-transparent h-[70%] w-full overflow-hidden">
            <img src="https://kishop.in/wp-content/uploads/2023/07/61G5JoU9tTL._SL1500_.jpg" className='product h-[100%] w-[100%] ' alt="" />
        </div>
        <div className="herosub33 border border-transparent h-[30%] w-full">
            <h1 className='pt-5 ps-5 text-lg'>Nemo Troduct Esde</h1>
            <h1 className='font-bold text-[rgb(252,101,57)] text-xl ps-5'>Price:-130$ </h1>
            <h1 className='font-bold text-lg ps-5'>Quentity :-{count}</h1>
            <div className="wrapper"><button onClick={increment}> ADD</button></div>
        </div>
    </div>
    <div className="herosub3 border border-transparent h-[90%] w-[22%]">
         <div className="herosub33 border border-transparent h-[70%] w-full overflow-hidden">
            <img src="https://template.hasthemes.com/sinp/sinp/assets/images/products/lg/product2.webp" className='product h-[100%] w-[100%] ' alt="" />
        </div>
        <div className="herosub33 border border-transparent h-[30%] w-full">
            <h1 className='pt-5 ps-5 text-lg'>Nemo Troduct Esde</h1>
            <h1 className='font-bold text-[rgb(252,101,57)] text-xl ps-5'>Price:-130$ </h1>
            <h1 className='font-bold text-lg ps-5'>Quentity :-{count}</h1>
            <div className="wrapper"><button onClick={increment}> ADD</button></div>
        </div>
    </div>
    <div className="herosub3 border border-transparent h-[90%] w-[22%]">
         <div className="herosub33 border border-transparent h-[70%] w-full overflow-hidden">
            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016336/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/300119_0_enlffn.png?tr=w-600" className='product h-[100%] w-[100%] ' alt="" />
        </div>
        <div className="herosub33 border border-transparent h-[30%] w-full">
            <h1 className='pt-5 ps-5 text-lg'>Nemo Troduct Esde</h1>
            <h1 className='font-bold text-[rgb(252,101,57)] text-xl ps-5'>Price:-130$ </h1>
            <h1 className='font-bold text-lg ps-5'>Quentity :-{count}</h1>
            <div className="wrapper"><button  onClick={increment}> ADD</button></div>
        </div>
    </div>
    </div>


    </>
  )
}

export default main(Home)
