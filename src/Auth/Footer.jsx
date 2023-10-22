import React from "react";
import "../assets/css/Auth/footer.css";
function Footer() {
  return (
    <>
      <div id="footer">
        <div id="contact">
          <h3 className="foot_heads">Contact Us</h3>
          <label className="c_lable" htmlFor="c_email">Email</label>
          <input className="c_input" type="email" id="c_email" required />
          <label className="c_lable" htmlFor="message">Meassage</label>
          <textarea className="c_input" name="message" id="message" cols="30" rows="5"></textarea>
          <button id="c_btn">Submit</button>
        </div>
        <div id="sitemap">
          <h3 className="foot_heads">Sitemap</h3>
          <ul>
            <li key="header" className="site_links">
              <a href="#header">Home</a>
            </li>
            <li key="art_demo" className="site_links">
              <a href="#art_demo">Art</a>
            </li>
            <li key="about" className="site_links">
              <a href="#about">About</a>
            </li>
            <li key="contact" className="site_links">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div id="about_c">
          <div id="foot_insights">
            <img
            id="foot_logo"
              src={
                "https://th.bing.com/th/id/OIP.PiVAroIzyKIHonjV-PItRQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.4"
              }
              alt="App logo"
            />
            <h3 className="foot_heads">Gallery insights</h3>
          </div>
          <p id="about_c_p">
            The ultimate art app. Browse, collect and sell artworks with ease
            and convenience. Art is everywhere. Capture it with  The app
            that lets you create and share your own artworks Art is in the eye
            of the beholder. Find your perfect match on  Where art
            lovers meet. Discover, share and buy amazing artworks on the go. The
            world is your gallery. Explore thousands of artworks from around the
            globe. 
          </p>
        </div>
      </div>
      <div id="copyright">
        <p>adnfk al ds@copyright 2023</p>
      </div>
    </>
  );
}

export default Footer;
