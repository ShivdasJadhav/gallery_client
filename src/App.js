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
function App(props) {
  const [user, setUser] = useState(props.user);
  return (
    user && (
      <div className="App">
        <Navbar user={user} />
        <BrowserRouter>
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
        </BrowserRouter>
      </div>
    )
  );
}

export default App;
