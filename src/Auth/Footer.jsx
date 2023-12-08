import React from "react";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <>
      <div id="footer" className="flex flex-col bg-black text-fjord_one py-8 px-4 mx-auto md:flex-row justify-center md:py-20">
        <div className="md:w-4/12 mx-8">
          <h2 className="text-white text-xl md:text-2xl">
            Do not miss any update
            <br /> Subscribe to the Newsletter
          </h2>
          <div className="w-full bg-white flex justify-between h-8 rounded-md my-4 mx-auto">
            <input className="text-fuchsia-600 px-2 text-xs flex-1 border-none outline-none rounded-md placeholder-fuchsia-400" type="email" placeholder="your@email.com |"  />
            <button className="px-4 border border-white rounded-md bg-sky-500 text-white text-xs hover:bg-sky-600">Subscribe</button>
          </div>
        </div>
        <div className="md:w-4/12 mx-8 text-white pt-8 md:pt-0 md:pl-20">
          <h4 className="text-xl mb-4 md:mb-2 text-white">Sitemap</h4>
          <ul className="ml-2 md:ml-0">
            <li key="login"><Link className="text-sm text-white" to="login">Login</Link></li>
            <li key="register"><Link className="text-sm text-white" to="register">Register</Link></li>
            <li key="exhibits"><a className="text-sm text-white" href="/#top_arts">Exhibits</a></li>
            <li key="community"><a className="text-sm text-white" href="/#community">Community</a></li>
            <li key="review"><a className="text-sm text-white" href="/#review">Review</a></li>
            <li key="about"><a className="text-sm text-white" href="/#about">About us</a></li>
          </ul>
        </div>
      </div>
      <div id="cp_rights" className="bg-neutral-700 h-10 flex items-center">
        <p className="text-xs text-white w-fit mx-auto italic text-fjord_one">All copyrights reserved by @2024 exhibits.art</p>
      </div>
    </>
  );
}

export default Footer;
