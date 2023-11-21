import React from "react";
import bg_logo from "../assets/img/bg_logo.png";
function About() {
  return (
    <div id="about">
      <h2 className="text-center text-2xl text-medium text-allura text-fuchsia-900 my-4">
        About Us
      </h2>
      <div className="relative w-10/12 text-fjord_one text-sm text-justify mx-auto">
        <img src={bg_logo} alt="" className="absolute w-10/12 h-auto top-10 left-6" />
        <p className="my-5">
          “Art Exhibits”, where creativity and innovation collide in the digital
          realm. We are passionate about art and the immense talent that exists
          within the artistic community. Our platform was born out of the desire
          to create a space where artists can flourish, and organizations can
          discover the brilliance that lies within the world of art.
        </p>
        <p className="my-5">
          here, our mission is to provide artists with a platform to showcase
          their artistic prowess, connect with fellow creatives, and receive
          valuable feedback on their work. We also aim to empower organizations,
          art enthusiasts, and talent seekers to find the perfect artistic
          expressions that resonate with their vision.
        </p>
      </div>
    </div>
  );
}

export default About;
