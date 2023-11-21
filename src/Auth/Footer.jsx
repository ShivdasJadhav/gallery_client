import React from "react";
function Footer() {
  return (
    <>
      <div id="footer" className="bg-black text-fjord_one py-8">
        <div className="w-11/12 mx-auto">
          <h2 className="text-white text-xl">
            Do not miss any update
            <br /> Subscribe to the Newsletter
          </h2>
          <div className="w-full bg-white flex justify-between h-8 rounded-md my-4 mx-auto">
            <input className="text-fuchsia-600 px-2 text-xs flex-1 border-none outline-none rounded-md placeholder-fuchsia-400" type="email" placeholder="your@email.com |"  />
            <button className="px-4 border border-white rounded-md bg-sky-500 text-white text-xs hover:bg-sky-600">Subscribe</button>
          </div>
        </div>
        <div className="w-11/12 text-white mx-auto pt-8">
          <h4 className="text-xl mb-4 text-white">Sitemap</h4>
          <ul className="ml-2">
            <li key="login"><a className="text-sm text-white" href="#login">Login</a></li>
            <li key="register"><a className="text-sm text-white" href="#register">Register</a></li>
            <li key="exhibits"><a className="text-sm text-white" href="#exhibits">Exhibits</a></li>
            <li key="community"><a className="text-sm text-white" href="#community">Community</a></li>
            <li key="review"><a className="text-sm text-white" href="#review">Review</a></li>
            <li key="about"><a className="text-sm text-white" href="#about">About us</a></li>
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
