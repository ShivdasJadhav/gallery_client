import React from "react";
import axios from "axios";
import Main from "./Main";
import ArtDemo from "./ArtDemo";
import About from "./About";
import Footer from "./Footer";
import "../assets/css/Auth/auth.css";
axios.defaults.withCredentials = true;
function Auth() {
  return (
    <>
    <Main/>
    <ArtDemo/>
    <About/>
    <Footer/>
    </>
  ) ;
}

export default Auth;
