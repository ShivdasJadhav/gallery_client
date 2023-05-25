import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function Profile(props) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    about: "",
    img: "",
  });
  const fetch_data = () => {
    axios
      .post("https://gallary-server.vercel.app/auth/getUser", { email: props.user.email })
      .then((data) => {
        let obj = data.data.user;
        setProfile({
          name: obj.name,
          email: obj.email,
          contact: obj.contact,
          address: obj.address,
          about: obj.about,
          img: obj.img,
        });
      });
  };
  useEffect(() => {
    fetch_data();
  }, []);

  const update_info = (e) => {
    setProfile((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };

  function Update_profile() {
    alert("are you sure about the update;");
    axios
      .post("https://gallary-server.vercel.app/auth/setUser", { profile })
      .then((msg) => {
        if (msg.status === 200) {
          alert("Your profile has been updated!");
          fetch_data();
        } else {
          alert("failed to Update your Profile!");
        }
      });
  }
  const saveLogo = () => {
    let input = document.getElementById("profile_pic");
    if (input.files && input.files[0]) {
      if(input.files[0].size>1000000){
        alert("your file size is too Big!");
      }
      let reader = new FileReader();
      reader.onload = (e) => {
        setProfile({ img: e.target.result });
        document.getElementById("img_pic").setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col ">
        <div class="w-10/12 lg:w-4/6 mx-auto border-2 p-4 rounded-lg border-orange-300 shadow-lg">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8 border-orange-300 md:border-r">
              <div
                id="pic_container"
                class="w-20 h-20 rounded-full overflow-hidden inline-flex items-center hover:cursor-pointer justify-center bg-gray-200 text-gray-400"
              >
                <label htmlFor="profile_pic">
                  <img id="img_pic" src={profile.img} alt="profile_pic" />
                </label>
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <input
                  class="font-medium title-font mt-4 text-gray-900 text-center w-full border-2 border-gray-600 rounded-md text-sm"
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={update_info}
                  placeholder="Your Good Name..."
                />
                <div class="bg-gray-500 rounded mt-2 mb-4 h-2 w-full"></div>
                <textarea
                  class="text-base text-justify text-xs p-1 w-full border-2 border-gray-600 rounded-md"
                  id="about"
                  name="about"
                  value={profile.about}
                  onChange={update_info}
                  placeholder="About you!"
                />
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <textarea
                class="leading-relaxed text-justify text-xs mb-4 p-1 w-full border-2 border-gray-600 rounded-md"
                id="address"
                name="address"
                value={profile.address}
                onChange={update_info}
                placeholder="Parmanat Address?"
              />{" "}
              <div class="flex flex-col md:flex-row">
                <input
                  class="text-base text-justify text-xs p-1 md:mr-1  w-full border-2 border-gray-600 rounded-md"
                  id="email"
                  name="email"
                  readOnly
                  value={profile.email}
                  onChange={update_info}
                  placeholder="jondoy@cfs.com"
                />
                <input
                  class="text-base text-justify text-xs p-1 md:ml-1  w-full border-2 border-gray-600 rounded-md"
                  id="contact"
                  name="contact"
                  value={profile.contact}
                  onChange={update_info}
                  placeholder="+91 983****34"
                />
              </div>
              <div id="action" class="w-fit mx-auto mt-6">
                <button
                  onClick={Update_profile}
                  id="Update_profile"
                  class="text-white bg-orange-400 whitespace-nowrap px-3 rounded-md py-1 mx-2"
                >
                  Update
                </button>
                <input
                  onChange={saveLogo}
                  accept="image/gif,image/jpeg,image/jpg,image/png"
                  id="profile_pic"
                  class="hidden"
                  type="file"
                  name="profile_pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
