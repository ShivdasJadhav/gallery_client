import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import Add from "./comp/Add";
import Art from "./comp/Art";
import Navbar from "./comp/Navbar";
import Update from "./comp/Update";
import Home from "./comp/Home";
import About from "./comp/About";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/update/:id" element={<Update />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
