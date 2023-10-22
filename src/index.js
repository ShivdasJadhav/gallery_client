import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./assets/css/output.css";
import Controller from "./Controller";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   {/* <Controller/> */}
   <div id="notice_app" className="w-40 text-pink-500 h-40 mx-auto my-40 pt-5 text-xl font-bold">
    Art Gallery will be Art Exhibits Sooon...<br/>
    <progress value={5} max={100} className="w-40"/>
   </div>
  </React.StrictMode>
);
