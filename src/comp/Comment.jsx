import React, { useEffect, useState } from "react";
import axios from "axios";
import { icon_user } from "../assets/img";
import { db_connect } from "../Constants";
function Comment(props) {
  const [poster, setPoster] = useState({ name: "Unknown", img: icon_user });
  const fetchUser = async () => {
    await axios
      .get(`${db_connect}/user/getPostBy/${props.data.postedBy}`, {
        headers: { Authorization: `Bearer ${props.token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          let img = res.data.img;
          let name = res.data.firstName + " " + res.data.lastName;
          if (img === "" || img === null) {
            img = icon_user;
          }
          if (name === "" || name === null) {
            name = "Unknown";
          }
          setPoster({
            name,
            img,
          });
        }
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex my-4">
      <div className="flex">
        <div className="flex overflow-hidden items-center justify-center w-12 h-12 md:w-16 md:h-16 mx-2 rounded-full border-fuchsia-500 border flex items-center justify-center">
          <img src={poster.img} alt="artists image" className="w-auto h-auto" />
        </div>
      </div>
      <div className="w-full">
        <p className="my-2 ml-2 text-md text-fjord leading-3 text-sky-600 md:text-lg">
          {poster.name}
        </p>
        <p className="ml-2 leading-4 outline-none border-b border-gray-600 text-xs text-fjord md:text-sm">
          {props.data.text}
        </p>
      </div>
    </div>
  );
}

export default Comment;
