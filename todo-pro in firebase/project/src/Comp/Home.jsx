import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import "../App.css"

export default function Home() {
  const [user, setUser] = useState(null);
  const [record, setRecord] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (User) => {
      if (User) {
        setUser(User);
      } else {
        console.log("No user logged in");
      }
    });


    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchData(user);
    }
  }, [user]); 

  const fetchData = async (user) => {
    try {
      const data = await getDoc(doc(firestore, "users", user.uid));
      if (data.exists()) {
        console.log(data.data());
        setRecord(data.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  return (
    <>
     <section>
      <header>
        
        <div className="navigation">
          <a href=" ">Home</a>
          <a href=" ">About</a>
          <a href=" ">Info</a>
          <a href=" ">Services</a>
          <a href=" ">Contact</a>
        </div>
      </header>
      <div className="content">
        <div className="info">
          <h2> Hello {record.fname}  <br /> <span> YOU Like Nature </span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <a href=" " className="info-btn">More Info</a>
        </div>
      </div>
      <div className="media-icons">
        <a href=" "><i className="fab fa-facebook-f"></i></a>
        <a href=" "><i className="fab fa-twitter"></i></a>
        <a href=" "><i className="fab fa-instagram"></i></a>
      </div>
    </section>

    </>
  );
}
