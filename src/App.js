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
function App() {
  let navigate = useNavigate();
  if (!localStorage.getItem("authentic")) {
    navigate("/");
  } else {
    return (
      <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/*" element={<Home />} />
            <Route exact path="/proposals" element={<Proposals />} />
            <Route exact path="/proposals/add" element={<Add/>}/>
            <Route exact path="/proposals/update/:id" element={<Update />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/Profile_view/:email_id" element={<Profile_view />} />
            <Route exact path="/admin_proposals" element={<Admin_proposals />} />
          </Routes>
      </div>
    );
  }
}

export default App;
