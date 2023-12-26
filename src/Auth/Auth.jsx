import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Hero from "./Hero";
import TopArts from "./TopArts";
import Community from "./Community";
import Review from "./Review";
import About from "./About";
import Footer from "./Footer";
import Signin from "./Signin";
import Register from "./Register";
import Forgot from "./Forgot";
import { Toaster } from "react-hot-toast";
axios.defaults.withCredentials = true;
function Auth() {
  return (
    <BrowserRouter>
      <div className="h-screen w-full overflow-y-scroll">
        <Toaster/>
        <Routes>
          <Route
            path="/*"
            element={
              <div>
                <Hero />
                <TopArts />
                <Community />
                <Review />
                <About />
                <Footer />
              </div>
            }
          ></Route>
          <Route path="/login" element={<Signin/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/forgot" element={<Forgot/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Auth;
