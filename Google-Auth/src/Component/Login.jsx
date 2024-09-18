import React, { useEffect } from 'react'
import { useState } from 'react'
import { auth, provider } from '../../firebaseConfig';
import { onAuthStateChanged,signInWithPopup,signOut } from 'firebase/auth';
import '../App.css';
import img from '../assets/Bg.png'


export default function Login() {
  
        const [user,setUser] = useState(null);

        useEffect(() => {
            const Sub = onAuthStateChanged(auth, (currentuser) => {
              if (currentuser) {
                setUser(currentuser);
                console.log(currentuser);
              } });
          }, []);
          

          const handleLogin = async () => {
            console.log();
            let result = await signInWithPopup(auth, provider);
            console.log(result.user);
            setUser(result.user);
          };
          

        const handleSignout = async()=>{
            await signOut(auth);
            setUser(null);
        }
    return (
    <div>
      {
        user ?
        
        <div>
            <div className="contain">
                <div className="display">
                    <div className="data">
                        <div className="user">
                            <div className="img">
                                <img src={user.photoURL} alt="" />
                            </div>
                        </div>
                        <div className="userr">
                            <h1>{user.displayName}</h1>
                        </div>
                    </div>
                    <div className="data">
                        <div className="name">
                            <h1>FULL  STACK DEVELOPER</h1>
                            <h2>NAME :- <span>{user.displayName}</span></h2>
                            <h2>EMAIL :- <span>{user.email}</span></h2>
                            <h2>ADDRESS :- <span>Atkot,Rajkot(360040)</span></h2>
                            <h2> PHONE-NO. :- <span>+1 123456789</span></h2>
                            <button class="btn-12" onClick={handleSignout}><span>SIGN OUT</span></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
<div className="containerlogin">
     <div className='main'>
        <div className="sub">
            <div className="form">
                    <h1>welcome</h1>
                    <p>We are glad to see you back with us</p>
                    <i className="fa-solid fa-user"></i><input type="text"  placeholder= 'Email address' /> <br />
                    <i className="fa-solid fa-lock"></i><input type="text" placeholder='Password' /> <br />
                    <button className='login'>Login </button>
                    
                    <p className='loginother'>Login <span className='other'>With Others</span> </p>

<button class="button google" onClick={handleLogin}>
  <svg
    viewBox="0 0 256 262"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    ></path>
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    ></path>
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    ></path>
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    ></path>
  </svg>
  Continue with Google
</button>

                    

<button class="facebook-button">
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg
        viewBox="0 0 320 512"
        height="1.2em"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        ></path>
      </svg>
      {/* <i class="fa-brands fa-facebook"></i> */}
    </div>
  </div>
  <span>Continue with Facebook</span>
</button>
    
                    
            </div>
        </div>
        
        <div className="sub2">
            <div className="img">
            <img src={img} alt="" />    
            </div>   
        </div>    
      
    </div>
</div>
      }
    </div>
  )
}


//   <h1>Hey...! <br />{user.displayName} <br />  WELCOME On Our Page</h1>
//             <h1>That's Your <br />{user.email} <br /> email</h1>
//             <img  src={user.photoURL} />
//             <button onClick={handleSignout}>SignOut</button>