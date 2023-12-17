import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./comp/Navbar";
import Home from "./comp/Home";
import Profile from "./comp/Profile";
import Proposals from "./comp/Proposals";
import Dashboard from "./comp/Dashboard";
import Art_pice from "./comp/Art_pice.jsx";
import { Toaster } from "react-hot-toast";
function App(props) {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <BrowserRouter>
        <div className="h-screen w-full overflow-y-scroll">
          <Toaster />
          <Navbar user={user} />
          <Routes>
            <Route path="/*" element={<Home user={user} />} />
            <Route path="/proposal" element={<Proposals user={user} />} />
            <Route path="/proposal/:paramStatus" element={<Proposals user={user} />} />
            <Route path="/art/:id" element={<Art_pice user={user} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            {user.isAdmin && (
              <Route path="/dashboard" element={<Dashboard user={user} />} />
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
