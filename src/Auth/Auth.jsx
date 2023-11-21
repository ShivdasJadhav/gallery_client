import React, { useEffect } from "react";
import axios from "axios";
import Hero from "./Hero";
import TopArts from "./TopArts";
import Community from "./Community";
import Review from "./Review";
import About from "./About";
import Footer from "./Footer";
import Signin from "./Signin";
import Signup from "./signup";
import Forgot from "./Forgot";
axios.defaults.withCredentials = true;
function Auth() {
  useEffect(() => {
    window.alert(
      "We are in the development phase the application is Buggy for now, hope you be will patient about the app.\nThank you"
    );
  });
  return (
    <>
      {/* <Hero />
      <TopArts />
      <Community />
      <Review />
      <About />
      <Footer /> */}
      {/* <Signin />
      <Signup/>
      <Forgot /> */}
      <div
        id="notice_app"
        className="w-40 text-pink-500 h-40 mx-auto my-40 pt-5 text-xl font-bold"
      >
        Art Gallery will be Art Exhibits Sooon...
        <br />
        <progress value={5} max={100} className="w-40" />
      </div>
    </>
  );
}

export default Auth;
