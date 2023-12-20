import React from "react";
import { bg_logo, logo } from "../assets/img";
function About() {
  return (
    <div id="about" className="my-4 overflow-hidden py-8 w-10/12 mx-auto">
      <h2 className="text-center text-2xl text-medium text-allura text-fuchsia-900 my-4 md:text-4xl md:my-10">
        About Us
      </h2>
      <div className="relative w-full text-fjord_one text-sm text-justify mx-auto md:text-sm flex">
        <div className="flex flex-1 lg:px-14 ">
          <img
            src={bg_logo}
            alt=""
            className="absolute w-10/12 h-auto z-0 mx-auto left-0 right-0 top-10 md:hidden"
          />
          <div className="flex flex-col">
          <p className="my-3">
            “Art Exhibits”, where creativity and innovation collide in the
            digital realm. We are passionate about art and the immense talent
            that exists within the artistic community. Our platform was born out
            of the desire to create a space where artists can flourish, and
            organizations can discover the brilliance that lies within the world
            of art.
          </p>
          <p className="my-3">
            here, our mission is to provide artists with a platform to showcase
            their artistic prowess, connect with fellow creatives, and receive
            valuable feedback on their work. We also aim to empower
            organizations, art enthusiasts, and talent seekers to find the
            perfect artistic expressions that resonate with their vision.{" "}
          </p>
          </div>
        </div>
        <div className="hidden flex-1 md:flex  items-center">
          <img src={logo} alt="" className="w-54 h-auto mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default About;
