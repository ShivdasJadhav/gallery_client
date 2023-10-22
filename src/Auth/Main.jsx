import React, { useState } from "react";
import Login from "./Login";
import Signup from "./signup";
import "../assets/css/Auth/main.css";
import Header from "./Header";
import Forgot from "./Forgot";
function Main() {
  const changeComp = (get_to) => {
    if (get_to === "login") {
      setToggle(<Login changeComp={changeComp} />);
    } else if ((get_to === "signup")) {
      setToggle(<Signup changeComp={changeComp} />);
    } else {
      setToggle(<Forgot changeComp={changeComp} />);
    }
  };
  const [toggle, setToggle] = useState(<Login changeComp={changeComp} />);
  return (
    <>
      <Header />
      <div id="main">
        <div>
          <h1 id="title">
            ART <br /> GALLERY
          </h1>
          <p id="description">
            Art galleries are spaces where visual art is displayed and sold.
            They provide a formal environment for artists to showcase their work
            and engage with gallery officials on the sale, marketing,
            networking, and customer relations associated with the sale of an
            artwork
          </p>
          <a id="btn_demo" href="#art_demo">
            Demo
          </a>
        </div>
        <div>{toggle}</div>
      </div>
    </>
  );
}

export default Main;
