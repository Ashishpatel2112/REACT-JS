import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import "../App.css"
import img from "../../src/01.png"


export default function Signup() {
    const [email,SetEmail]=useState("")
    const [pass,SetPass]=useState("")

    const navigate =useNavigate()

    const login =()=>{
        createUserWithEmailAndPassword(auth,email,pass)
        .then((user)=>{
            console.log(user);
        })
        .catch((err)=>{
            console.log(err);
            
        });
        navigate("/home")
    }
  return (
    <> 
     <div className="wrapper">
        <img src={img} alt=""/>
        <h2 className="text-right">Welcome</h2>

        <div className="form-wrapper login">
            <form action="">
                <h2>Login</h2>
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="email" placeholder="Email" required onChange={(e)=>SetEmail(e.target.value)} />
                </div>
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" placeholder="Password" required onChange={(e)=>SetPass(e.target.value)}/>
                </div>
                <div className="forgot-pass">
                    <Link to="">Forgot Password?</Link>
                </div>
                <button type="submit" onClick={login}>Login</button>
                <div className="sign-link">
                    <p>Don't have an account?  <Link to="/signin">Register</Link> </p>
                </div>
            </form>
        </div>

       
    </div>
  
</>
  )
}
