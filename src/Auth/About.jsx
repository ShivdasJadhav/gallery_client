import React from "react";
import "../assets/css/Auth/about.css";

function About() {
  return (
    <div id="about">
      <div id="container_about">
        <p className="about_txt">
          {" "}
          A web application designed and developed to provide a community
          plateform for the artists and the Art enthosiasts. here they can
          publish there arts publicly for free so their Artworks will get
          appreciated.
        </p>
        <p className="about_txt">
          Artists here are able to publish there arts with the title, as well
          defined description for the art along with the a Art_Pic.
        </p>
        <p className="about_txt">
          An organization up here can find the required art skills by getting
          through the Bio and the Arts published by an artist.
        </p>
      </div>
    </div>
  );
}

export default About;
