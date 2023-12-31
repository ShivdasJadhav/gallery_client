import React, { useState } from "react";
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
import { Loader } from "../Constants";
axios.defaults.withCredentials = true;
function Auth() {
  const [loader, setLoader] = useState(false);
  return (
    <BrowserRouter>
      <div className="h-screen w-full overflow-y-scroll">
        {loader && <Loader />}
        <Toaster />
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
          <Route
            path="/login"
            element={<Signin setLoader={setLoader} />}
          ></Route>
          <Route
            path="/register"
            element={<Register setLoader={setLoader} />}
          ></Route>
          <Route
            path="/forgot"
            element={<Forgot setLoader={setLoader} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Auth;
