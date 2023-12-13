import React, { useRef, useState } from "react";
import axios from "axios";
import Art from "./Art";
import { useNavigate } from "react-router-dom";
import { db_connect } from "../Constants";
import {
  icon_search,
  icon_upload,
  bg_logo,
  close_menu,
} from "../assets/img";

function Items_group(props) {
  //   const navigate=useNavigate();
  //   let [Arts,setArts]=useState();
  // const load_data = () => {
  //   let get_by=document.getElementById('load_by').value;
  //   axios.get(`${db_connect}/items/status/`+props.user.email+`/`+get_by).then((data)=>{
  //       if(data.status===200){
  //           if(Object.keys(data.data.item).length<=0){
  //             document.getElementById('text_none').innerText="Sorry you dont have Proposals!";
  //               document.getElementById('text_none').style.display="block";
  //           }else{
  //             document.getElementById('text_none').style.display="none";
  //           }
  //           setArts(data.data.item);
  //       }else{
  //           alert("some error occured");
  //       }
  //   })
  // };
  let popup_add = useRef();
  let popup_update = useRef();
  const popup_close = (from) => {
    from === "art"
      ? (popup_add.current.style.display = "none")
      : (popup_update.current.style.display = "none");
  };
  return (
    <>
      <div id="proposals" className="full px-4 md:w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row md:w-8/12 mx-auto">
          <div className="flex-1 flex items-center justify-between m-2">
            <div className="px-2 rounded-md md:text-lg">Your Artworks</div>
            <div className="flex border border-fuchsia-500 rounded-md py-1 ml-2 ">
              <input
                type="text"
                id="search_field"
                placeholder="title..."
                className="w-36 text-md text-fuchsia-600 text-fjord placeholder-fuchsia-400 pl-2 px-4 outline-none border-none md:w-52"
              />
              <img
                src={icon_search}
                alt="search symbol for search field"
                className="w-4 h-auto mr-2"
              />
            </div>
          </div>
          <div className="flex items-center justify-center md:w-5/12 md:justify-start">
            <div className="w-36 h-fit border mx-2 border-2 bg-fuchsia-500 px-4 py-1 rounded-md">
              <select
                name="search_by"
                id="search_by"
                className=" w-28 bg-fuchsia-500 text-white text-fjord relative w-20 outline-none border-none"
              >
                <option value="published" className="bg-white">
                  Published
                </option>
                <option value="requested" className="bg-white">
                  Requested
                </option>
                <option value="denied" className="bg-white">
                  Denied
                </option>
              </select>
            </div>
            <button className="px-4 py-1 h-fit mx-2 w-fit bg-sky-500 hover:bg-sky-600 rounded-md text-white text-fjord">
              New <b className="text-white font-bold">+</b>
            </button>
          </div>
        </div>
        <div className="my-6 md:grid md:grid-cols-4 md:gap-4">
          <Art from="editor" />
          <Art from="editor" />
          <Art from="editor" />
          <Art from="editor" />
          <Art from="editor" />
          <Art from="editor" />
          <Art from="editor" />
          <Art from="editor" />
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
      <div
        ref={popup_add}
        id="new_art"
        className="absolute top-0 bg-blue-cover hidden flex items-center justify-center h-screen w-full"
      >
        <div className="relative mx-auto w-11/12 flex flex-col items-center border border-fuchsia-400 border-2 rounded-xl py-4 bg-white md:w-6/12">
          <button
            onClick={() => popup_close("art")}
            className="ml-auto w-fit mx-4"
          >
            <img src={close_menu} alt="close popup" className="w-4 h-4" />
          </button>
          <div className="absolute w-10/12 md:w-3/6 mx-auto my-4 z-0">
            <img src={bg_logo} alt="background logo" />
          </div>
          <h1 className="text-fuchsia-500 text-2xl text-allura my-4 w-fit mx-auto">
            Request an Art to Publish
          </h1>
          <div className="w-10/12 pl-4 z-10">
            {" "}
            <div className="flex-1">
              <label className="block w-11/12 text-fjord_one text-md">
                Title
              </label>
              <input
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="text"
                name="title"
              />
            </div>
            <div className="flex-1">
              <label className="block w-full text-fjord_one text-md">
                Description
              </label>
              <textarea
                rows={3}
                cols={33}
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="text"
                name="desc"
              />
            </div>
          </div>
          <div className="md:flex w-10/12 pl-4 z-10">
            <div className="border border-fuchsia-400 bg-white rounded-md w-11/12 md:w-6/12 h-40 flex items-center justify-center">
              <img
                src={icon_upload}
                alt="user picture"
                className="w-4/12 md:w-2/12 h-auto"
              />
            </div>
            <div className="md:px-8 md:w-6/12">
              <button className="w-11/12 my-2 text-white bg-fuchsia-400 p-2 rounded-md text-fjord_one text-sm">
                Upload Art
              </button>
              <div className="w-1/4 mx-auto h-1 bg-fuchsia-400 my-2 rounded-md"></div>
              <button className="w-11/12 my-2 text-white bg-fuchsia-400 p-2 rounded-md text-fjord_one text-sm">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={popup_update}
        id="update_art"
        className="absolute top-0 bg-blue-cover hidden flex items-center justify-center h-screen w-full"
      >
        <div className="relative mx-auto w-11/12 flex flex-col items-center border border-fuchsia-400 border-2 rounded-xl py-4 bg-white md:w-6/12">
          <button
            onClick={() => popup_close("update")}
            className="ml-auto w-fit mx-4"
          >
            <img src={close_menu} alt="close popup" className="w-4 h-4" />
          </button>
          <div className="absolute w-10/12 md:w-3/6 mx-auto my-4 z-0">
            <img src={bg_logo} alt="background logo" />
          </div>
          <div className="absolute w-10/12 mx-auto my-4 z-0 md:w-3/6">
            <img src={bg_logo} alt="" />
          </div>
          <h1 className="text-fuchsia-500 text-2xl text-allura my-4 w-fit mx-auto">
            Update your Art piece
          </h1>
          <div className="w-10/12 pl-4 z-10">
            {" "}
            <div className="flex-1">
              <label className="block w-11/12 text-fjord_one text-md">
                Title
              </label>
              <input
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="text"
                name="title"
              />
            </div>
            <div className="flex-1">
              <label className="block w-full text-fjord_one text-md">
                Description
              </label>
              <textarea
                rows={3}
                cols={33}
                className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 my-2 py-2 rounded-lg focus:border-2 outline-none"
                type="text"
                name="desc"
              />
            </div>
          </div>
          <div className="md:flex w-10/12 pl-4 z-10">
            <div className="border border-fuchsia-400 bg-white rounded-md w-11/12 h-40 flex items-center justify-center md:w-6/12">
              <img
                src={icon_upload}
                alt="user picture"
                className="w-4/12 md:w-2/12 h-auto"
              />
            </div>
            <div className="md:flex-1 md:px-8 md:w-3/6">
              <button className="w-11/12 my-2 text-white bg-fuchsia-400 p-2 rounded-md text-fjord_one text-sm">
                Upload Art
              </button>
              <div className="w-1/4 mx-auto h-1 bg-fuchsia-400 my-2 rounded-md"></div>
              <button className="w-11/12 my-2 text-white bg-fuchsia-400 p-2 rounded-md text-fjord_one text-sm">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items_group;
