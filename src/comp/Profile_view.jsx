import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function Profile_view() {
  const navigate = useNavigate();
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [contact, setcontact] = useState("");
  let [address, setaddress] = useState("");
  let [about, setabout] = useState("");
  let [img, setimg] = useState("");
  let { email_id } = useParams();

  const fetch_data = async () => {
    await axios
      .post("https://gallary-server.vercel.app/auth/getUser/",{email:email_id})
      .then((data) => {
        console.log(data);
        let obj = data.data.user;
        setname(obj.name);
        setemail(obj.email);
        setcontact(obj.contact);
        setaddress(obj.address);
        setabout(obj.about);
        setimg(obj.img);
      });
  };
  useEffect(() => {
    fetch_data();
  }, []);
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="w-10/12 lg:w-4/6 mx-auto  border-2 p-4 rounded-lg border-orange-300 shadow-lg">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8 border-orange-300 md:border-r">
              <div class="w-20 h-20 rounded-full inline-flex items-center border-orange-600 border-2 border overflow-hidden justify-center bg-gray-200 text-gray-400">
                <img src={img} alt="profile_pic" />
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <input
                  readOnly
                  class="font-medium title-font mt-4 text-gray-900 text-center w-full border-2 border-orange-600 rounded-md  text-sm"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Your Good Name..."
                />
                <div class="bg-gray-500 rounded mt-2 mb-4 h-2 w-full"></div>
                <textarea
                  readOnly
                  class="text-base text-justify text-xs p-1 w-full border-2 border-orange-600 rounded-md"
                  id="about"
                  name="about"
                  value={about}
                  placeholder="About you!"
                />
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-orange-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <textarea
              readOnly
                class="leading-relaxed text-justify text-xs mb-4 p-1 w-full border-2 border-orange-600 rounded-md"
                id="address"
                name="address"
                value={address}
                placeholder="Parmanat Address?"
              />{" "}
              <div class="flex flex-col md:flex-row">
                <input
                  readOnly
                  class="text-base text-justify text-xs p-1 md:mr-1 w-full border-2 border-orange-600 rounded-md"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="jondoy@cfs.com"
                />
                <input
                  readOnly
                  class="text-base text-justify text-xs p-1 md:ml-1  w-full border-2 border-orange-600 rounded-md"
                  id="contact"
                  name="contact"
                  value={contact}
                  placeholder="+91 983****34"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile_view;
