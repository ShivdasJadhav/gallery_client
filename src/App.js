import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./comp/Navbar";
import Update from "./comp/Update";
import Home from "./comp/Home";
import About from "./comp/About";
import Profile from "./comp/Profile";
import Proposals from "./comp/Proposals";
import Add from "./comp/Add";
import Profile_view from "./comp/Profile_view.jsx";
import Admin_proposals from "./comp/Admin_proposals";
import { useState } from "react";
import Dashboard from "./comp/Dashboard";
import Art_pice from "./comp/Art_pice.jsx";
import { Toaster } from "react-hot-toast";
function App(props) {
  let user=JSON.parse(localStorage.getItem("user"))
  return (
    <>
      <BrowserRouter>
        <div className="h-screen w-full overflow-y-scroll">
          <Toaster />
          <Navbar />
          <Routes>
            <Route path="/*" element={<Home user={user}/>} />
            <Route path="/proposal" element={<Proposals user={user}/>} />
            <Route path="/art" element={<Art_pice user={user}/>} />
            <Route path="/profile" element={<Profile user={user}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
