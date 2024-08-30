import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'


export default function Api() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataFetched = async () => {
            try {
                let response = await axios.get(' https://fakestoreapi.com/products ');
                let jsonData = response.data;
                console.log(jsonData);
                setData(jsonData);
            } catch (err) {
                console.log(err);
            }
        };
        dataFetched();
    }, []);

    return (
        <>
            <h1 className=' font-bold text-2xl text-center'>API-STORE</h1>
            <div className=' h-[100vh] w-[100%] overflow-scroll flex flex-wrap bg-amber-800 '>
                {data.map((el,i)=>(
             <div key={i}  className='h-[60%] w-[30%] border border-transparent m-5 shadow-2xl rounded-lg bg-white '>
                <div className="img h-[70%] w-[100%] border border-transparent flex justify-center items-center  ">
                        <img src={el.image} alt="" className='h-[90%] w-[80%] grayscale-[100%] hover:grayscale-0 ' />
                </div>
                <h1 className=' px-5 font-semibold text-xl text-gray-600'>{el.title}</h1>
                <h1 className=' px-5 font-bold text-2xl'>Price:{el.price}</h1>
             </div>
             ))}
            </div>
         
        </>
    );
}
   // {data.map((el, index) => (
                //     <div key={index} className='p-4 border border-black w-[30%] h-[30%] '>
                //         <img src={el.image} alt={el.title} className='w-[30%] h-[30%] ' />
                //         <h2 className='text-lg font-semibold'>{el.title}</h2>
                //         <p className='text-lg font-bold'>${el.price}</p>
                //     </div>
                    
                // ))}