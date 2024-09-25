import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { addToCart } from '../Redux/action';
import { useDispatch } from 'react-redux';

export default function Third() {

  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  // Fetch products from server
  useEffect(() => {
    axios.get("http://localhost:5000/product")
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storeCart = localStorage.getItem("cart");
    if (storeCart) {
      const parseCart = JSON.parse(storeCart);
      parseCart.forEach(item => dispatch(addToCart(item)));
    }
  }, [dispatch]);

  // Function to add item to cart
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    const storeCart = localStorage.getItem('cart');
    let updateCart = storeCart ? JSON.parse(storeCart) : [];
    const existingProduct = updateCart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updateCart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(updateCart));
  };

  return (
    <>
      <div className="section3 h-[20vh] w-[100%] flex justify-center items-center">
        <h1 className="underline text-4xl px-5">Best Seller</h1>
        <h1 className="text-4xl text-gray-600 px-5 hover:text-black">New Arrivals</h1>
        <h1 className="text-4xl text-gray-600 px-5 hover:text-black">On Sale</h1>
      </div>

      <div className="section4 h-[100vh] w-[100%] border border-transparent flex justify-evenly flex-wrap">
        {product.map((product) => (
          <div key={product.id} className="product border border-transparent h-[inherit] w-[20%]">
            <div className="img border border-transparent h-[70%] w-[100%] mt-10">
              <img src={product.image} alt="" className="h-[100%] w-[100%]" />
            </div>
            <div className="text border border-transparent h-[20%] w-[100%]">
              <h1 className="hover:text-[rgb(252,87,50)]">{product.title}</h1>
              <h1 className="font-bold">${product.price}</h1>
              <div className="colorselect h-[20px] w-[100%] border border-transparent flex items-center">
                <div className="color ms-2 border border-black h-5 w-5 rounded-full flex justify-center items-center">
                  <div className="color h-3 w-3 rounded-full bg-yellow-500"></div>
                </div>
                <div className="color ms-2 border border-gray-300 h-5 w-5 rounded-full flex justify-center items-center">
                  <div className="color h-3 w-3 rounded-full bg-black"></div>
                </div>
                <div className="color ms-2 border border-gray-300 h-5 w-5 rounded-full flex justify-center items-center">
                  <div className="color h-3 w-3 rounded-full bg-white"></div>
                </div>
              </div>
              <button onClick={() => addToCartHandler(product)} className="ms-48 border border-black border-opacity-20 rounded-lg p-1 hover:font-semibold">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
