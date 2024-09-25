
{/* 
      <div class="section4 h-[100vh] w-[100%] border border-transparent flex justify-evenly">
        <div class="product border border-transparent h-[70%] w-[20%]">
            <div class="img border border-transparent h-[70%] w-[100%] mt-10">
                <img src="p-d2.png" alt="" class="h-[100%] w-[100%] "/>
            </div>
            <div class="text border border-transperant h-[20%] w-[100%]">
                <h1 class="hover:text-[rgb(252,87,50)]">Ribbed Tank Top</h1>
                <h1 class="font-bold">$18.00</h1>
                <div class="colorselect h-[20px] w-[100%] border border-transparent flex items-center">
                    <div class="color  ms-2 border border-black h-5 w-5 rounded-full flex justify-center items-center">
                        <div class="color h-3 w-3 rounded-full bg-yellow-500"></div>
                    </div>

                    <div class="color  ms-2 border border-gray-300 h-5 w-5 rounded-full flex justify-center items-center ">
                        <div class="color h-3 w-3 rounded-full bg-black"></div>
                    </div>

                    <div class="color  ms-2 border border-gray-300 h-5 w-5 rounded-full flex justify-center items-center ">
                        <div class="color h-3 w-3 rounded-full bg-white"></div>
                    </div>
                </div>
               <button class=" ms-48 border border-black border-opacity-20 rounded-lg p-1  hover:font-semibold ">Remove</button>
            </div>
        </div>

      
      
    
    </div> */}
  

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Redux/action';
import Navbar from './Navbar';

export default function Cart() {
    const shippingFee = 5;
    const taxRate = 0.1; 

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function deleteItem(productId) {
        dispatch(removeFromCart(productId));
        const updatedCart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    function increaseQuantity(productId) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            dispatch(updateQuantity(productId, item.quantity + 1));
        }
    }

    function decreaseQuantity(productId) {
        const item = cart.find(item => item.id === productId);
        if (item && item.quantity > 1) {
            dispatch(updateQuantity(productId, item.quantity - 1));
        } else if (item && item.quantity === 1) {
            deleteItem(productId);
        }
    }

    function proceedToPayment() {
        alert("Redirecting to payment page...");
        
    }

    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
    const paymentTotal = total + shippingFee + (total * taxRate);

    return (
        <div>
            <Navbar/>
            <h1 className=' text-center text-2xl font-semibold'>Your Cart PAGE</h1>
            {cart.length === 0 ? (
                <>
                    <p className='err'>Your cart is empty.</p>
                    
                </>
            ) : (
                <>
                    <div id="cart" className=' flex '>
                      {cart.map((el)=>(
                        <div className="product border border-black ms-10 h-[80vh] w-[25%]" key={el.id}>
                            <div className="img border border-black h-[75%] w-[100%] ">
                                    <img src={el.image} alt="" className=' h-[100%] w-[100%]' />
                            </div>
                                <div className=" text-center info h-[25%] w-[100%] border border-red-600">
                                    <h2 className=' font-semibold text-xl'>{el.title}</h2>
                                    <p> <span className=' font-semibold'>PRICE:- </span> ${paymentTotal.toFixed(2)}  </p> 
                                    
                                    <button onClick={() => decreaseQuantity(el.id)} className=' text-xl border border-black bg-black text-white font-extrabold w-[30px]' >-</button>
                                    <span className='font-bold px-3'>{el.quantity}</span>
                                    <button onClick={() => increaseQuantity(el.id)} className=' text-xl border border-black bg-black text-white font-extrabold w-[30px]' >+</button> <br />

                                    <button className='h-[30px] border border-black bg-black text-white font-semibold px-2 ms-5'>Buy</button>
                                    <button className='h-[30px] border border-black bg-black text-white font-semibold px-2 m-4'>REMOVE</button>
                                </div>
                        </div>
                      ))}
                    </div>
                  
                </>
            )}
        </div>
    );
}

// {cart.map((el) => (
    //     <div key={el.id} className="cart-item">
    //         <img src={el.image} alt={el.title} />
    //         <div className="item-details">
    //             <h3>{el.title}</h3>
    //             <p>Price: ${el.price.toFixed(2)}</p>
    //             <p>final Price: ${paymentTotal.toFixed(2)}</p>
    //             <div className="quantity-controls">
    //                 <button onClick={() => decreaseQuantity(el.id)}>-</button>
    //                 <span>{el.quantity}</span>
    //                 <button onClick={() => increaseQuantity(el.id)}>+</button>
    //             </div>
    //             <button onClick={() => deleteItem(el.id)}>Remove</button>
    //         </div>
    //     </div>
    // ))}


// 
// <div className="text border border-transparent h-[20%] w-[100%]">
//   <h1 className="hover:text-[rgb(252,87,50)]">{product.title}</h1>
//   <h1 className="font-bold">${product.price}</h1>
//   <div className="colorselect h-[20px] w-[100%] border border-transparent flex items-center">
//     <div className="color ms-2 border border-black h-5 w-5 rounded-full flex justify-center items-center">
//       <div className="color h-3 w-3 rounded-full bg-yellow-500"></div>
//     </div>
//     <div className="color ms-2 border border-gray-300 h-5 w-5 rounded-full flex justify-center items-center">
//       <div className="color h-3 w-3 rounded-full bg-black"></div>
//     </div>
//     <div className="color ms-2 border border-gray-300 h-5 w-5 rounded-full flex justify-center items-center">
//       <div className="color h-3 w-3 rounded-full bg-white"></div>
//     </div>
//   </div>
//   <button onClick={() => addToCartHandler(product)} className="ms-48 border border-black border-opacity-20 rounded-lg p-1 hover:font-semibold">Add to cart</button>
// </div>


