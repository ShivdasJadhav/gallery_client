import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./comp/Navbar";
import Update from "./comp/Update";
import Home from "./comp/Home";
import About from "./comp/About";
import { useNavigate } from "react-router-dom";
import Profile from "./comp/Profile";
import Proposals from "./comp/Proposals";
import Add from "./comp/Add";
import Profile_view from "./comp/Profile_view.jsx";
import Admin_proposals from "./comp/Admin_proposals";
import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./comp/Dashboard";
function App() {
  const [user, setUser] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authentic")) {
      navigate("/");
    } else {
    axios
      .post("http://localhost:5000/auth/getUser", { email: localStorage.getItem('authentic') })
      .then((data) => {
        setUser(data.data.user);
        localStorage.removeItem('authentic');
      });}
  }, []);
  
    return (
      user && (
        <div className="App">
          <Navbar user={user}/>
          <Routes>
            <Route exact path="/*" element={<Home user={user} />} />
            <Route
              exact
              path="/proposals"
              element={<Proposals user={user} />}
            />
            <Route exact path="/proposals/add" element={<Add user={user} />} />
            <Route
              exact
              path="/proposals/update/:id"
              element={<Update user={user} />}
            />
            <Route exact path="/about" element={<About user={user} />} />
            <Route exact path="/profile" element={<Profile user={user} />} />
            <Route
              exact
              path="/Profile_view/:email_id"
              element={<Profile_view user={user} />}
            />
            <Route
              exact
              path="/admin_proposals"
              element={<Admin_proposals user={user} />}
            />
            <Route
              exact
              path="/dashboard"
              element={<Dashboard user={user} />}
            />
          </Routes>
        </div>
      )
    );
}

export default App;
