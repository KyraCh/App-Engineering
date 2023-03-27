import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";


import API from "./pages/API";
import Login from "./pages/Login";
import Nav from "./Nav";
// import Footer from "./Footer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/Main";
import Upload from "./pages/Upload";
import ExercisePage from "./pages/Exerciseedited";
import Exercise from "./pages/Exercise";
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      const url = window.location.href;
      const apiUrl = url.includes("ucl") ? "http://localhost:5000/auth/user" : "http://localhost:5000/auth/login/success";
      fetch(apiUrl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject.user); // add this line to log the user object
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  
  console.log(user)
  
  return (
    <BrowserRouter>
      <div>
        <Nav user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/api" element={<API />} />
          <Route 
          path="/login" 
          element={user ? <Navigate to="/main"/> : <Login/>} 
          />
          <Route path="/upload" element={<Upload />} />
          <Route path="/exerciseedited" element={<ExercisePage/>} />
          <Route path="/exercise" element={<Exercise/>} />
         
    
        </Routes>
      </div>
    </BrowserRouter>
  );
};


export default App;

