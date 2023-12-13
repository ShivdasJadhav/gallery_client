import React, { useEffect, useState } from "react";
import axios from "axios";
import Art from "./Art";
import { db_connect } from "../Constants";
import { custom_toast } from "../Constants";
import {icon_search} from "../assets/img";
function Home(props) {
  // const [items, setItems] = useState();
  useEffect(() => {
    console.log(props)
    // const controller = new AbortController();
    // axios
    //   .get(`${db_connect}/items`, { signal: controller.signal })
    //   .then((data) => {
    //     if (data.status === 200) {
    //       setItems(data.data.Items);
    //     } else {
    //       alert(data.message);
    //     }
    //   });
    // return () => {
    //   controller.abort();
    // };
    custom_toast(`Welcome Back ${props.user.firstName}`, "success", "📚");
  }, []);
  let slide_as_screen = "auto";
  if (window.innerWidth > 600) {
    slide_as_screen = 3;
  }
  return (
    <div id="home" className="full p-4 md:w-10/12 md:mx-auto">
      <div className="flex items-center justify-center">
        <div className="border border-2 bg-fuchsia-500 px-4 rounded-md py-1">
          <select
            name="search_by"
            id="search_by"
            className=" bg-fuchsia-500 text-white text-fjord relative w-20 outline-none border-none"
          >
            <option value="title" className="bg-white">
              Title
            </option>
            <option value="artist" className="bg-white">
              Artist
            </option>
          </select>
        </div>
        <div className="flex border border-fuchsia-500 rounded-md py-1 ml-2 ">
          <input
            type="text"
            id="search_field"
            placeholder="search..."
            className="w-36 text-fuchsia-600 text-fjord placeholder-fuchsia-400 pl-2 outline-none border-none md:w-40"
          />
          <img
            src={icon_search}
            alt="search symbol for search field"
            className="w-4 h-auto mr-2"
          />
        </div>
      </div>
      <div className="my-6 md:grid md:grid-cols-4 md:gap-4">
        <Art />
        <Art />
        <Art />
        <Art />
        <Art />
        <Art />
      </div>
      <div className="flex items-center justify-between">
        <button className="px-4 py-1 bg-sky-600 text-white text-fjord rounded-md">
          {" "}
          &#8617; Prev
        </button>
        <div className="flex">
          <p className="h-2 w-2 mx-1 bg-fuchsia-500 rounded-full"></p>
          <p className="h-2 w-2 mx-1 bg-fuchsia-400 rounded-full"></p>
          <p className="h-2 w-2 mx-1 bg-fuchsia-300 rounded-full"></p>
        </div>
        <button className="px-4 py-1 bg-sky-600 text-white text-fjord rounded-md">
          {" "}
          Next &#8618;
        </button>
      </div>
    </div>
  );
}

export default Home;
