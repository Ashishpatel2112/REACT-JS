import { createUserWithEmailAndPassword } from 'firebase/auth/cordova'
import React, { useState } from 'react'
import { auth, firestore } from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"
import img from "../../src/01.png"

export default function Signin() {
    const [fname,setfname]=useState("")
    const [lname,setlname]=useState("")
    const [email,SetEmail]=useState("")
    const [pass,setpass]=useState("")

    const navigate =useNavigate();

    const signin=()=>{
        createUserWithEmailAndPassword(auth,email,pass)
        .then((user)=>{
            console.log(user.user.uid);
            setDoc(doc(firestore,"users",user.user.uid),{
                fname,
                lname,
                email
            });
        })
        .catch((error) => {
            console.log(error);
        });
        navigate("/home")

    };
  return (
    <>
  
 <div className="wrapper h-[50%]">
        <img src={img} alt=""/>
        <h2 className="text-right">Welcome</h2>

        <div className="form-wrapper login">
            <form action="/home">
                <h2>Sign up</h2>
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="text" placeholder="Enter Your Fname"  onChange={(e)=>setfname(e.target.value)}/>
                </div>

                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="text" placeholder="Enter Your Lname"  onChange={(e)=>setlname(e.target.value)}/>
                </div>

                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="text" placeholder="Enter Your email address"  onChange={(e)=>SetEmail(e.target.value)}/>
                </div>

                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" placeholder="Password"  onChange={(e)=>setpass(e.target.value)}/>
                </div>
                
                <div className="forgot-pass">
                
                    <Link to=" ">Forgot Password?</Link>
                </div>
                <button  onClick={signin}>Sign up</button>
               
            </form>
        </div>

       
    </div>
    </>
  )
}
