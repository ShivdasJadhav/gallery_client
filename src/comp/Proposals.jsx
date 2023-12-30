import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Art from "./Art";
import { useNavigate, useParams } from "react-router-dom";
import { db_connect } from "../Constants";
import {
  icon_search,
  icon_upload,
  bg_logo,
  close_menu,
} from "../assets/img";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { custom_toast } from "../Constants";
import CoverLoad from "./CoverLoad";
const artSchema = yup.object().shape({
  title: yup.string().max(30).required(),
  description: yup.string().max(700).required(),
  img: yup.string(),
});
function Proposals(props) {
  var { paramStatus } = useParams();
  if (!paramStatus) {
    paramStatus = "published";
  }
  const [art, setArt] = useState({
    title: "",
    description: "",
    img: "",
  });
  const [inpSearch, setInpSearch] = useState("");
  const [artData, setArtData] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [workOn, setWorkOn] = useState(false); //workOn false="addArt" true="updateArt"
  const [delArt, setDelArt] = useState({
    titleDel: "",
    info: null,
  });
  const [statusType, setStatusType] = useState(paramStatus);
  const fetchArt = () => {
    axios
      .get(
        `${db_connect}/app/getByStatus/?status=${statusType}&search=${inpSearch}&page=${pageCount}&limit=9`,
        {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false)
          setArtData(res.data);
        }
      });
  };
  useEffect(() => {
    setIsLoading(true)
    fetchArt();
  }, [statusType, inpSearch, pageCount]);
  let popup_del = useRef();
  let inp_img = useRef();
  let out_img = useRef();
  const handleChange = (e) => {
    setArt({ ...art, [e.target.name]: e.target.value });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(artSchema),
  });
  const saveFile = () => {
    if (inp_img.current.files[0].size > 200000) {
      custom_toast("your image size is too Big!", "warning", "⚠️");
      return;
    } else {
      let reader = new FileReader();
      reader.onload = (e) => {
        setArt({ ...art, img: e.target.result });
        out_img.current.setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(inp_img.current.files[0]);
    }
  };
  const artWork = async () => {
    let url = `${db_connect}/app/newArt`;
    if (workOn) {
      url = `${db_connect}/app/updateArt`;
    }
    await axios
      .post(url, art, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((res) => {
        if (res.status === 201) {
          custom_toast(
            "You'r Art piece has been Requested to publish!",
            "success",
            "🔍"
          );
          handlePopup("art", "none");
          resetWork();
          fetchArt();
        } else if (res.status === 200) {
          custom_toast(
            "You'r Art piece has been Updated to publish!",
            "success",
            "📚"
          );
          handlePopup("update", "none");
          resetWork();
          fetchArt();
        } else {
          custom_toast(res.data.msg, "alert", "❌");
        }
      });
  };
  const resetWork = () => {
    setArt({ title: "", description: "", img: "" });
    out_img.current.setAttribute("src", icon_upload);
  };
  let popup_artWork = useRef();
  const handlePopup = (from, todo, data) => {
    if (todo === "none" && from !== "delete") {
      resetWork();
      popup_artWork.current.style.display = todo;
      return;
    }
    switch (from) {
      case "delete":
        {
          setDelArt({ titleDel: "", info: null });
          if (data) {
            popup_del.current.style.display = todo;
            setDelArt({ ...delArt, info: data });
          } else {
            popup_del.current.style.display = todo;
          }
        }
        break;
      case "art":
        {
          setWorkOn(false);
          popup_artWork.current.style.display = todo;
        }
        break;
      case "update":
        {
          setWorkOn(true);
          setArt(data);
          out_img.current.setAttribute("src", data.img);
          popup_artWork.current.style.display = todo;
        }
        break;
      default:
        return;
    }
  };
  const deleteArt = () => {
    if (delArt.titleDel === delArt.info.title) {
      axios
        .delete(`${db_connect}/app/deleteArt/${delArt.info.id}`, {
          headers: { Authorization: `Bearer ${props.user.token}` },
        })
        .then((res) => {
          if (res.status === 200) {
            custom_toast("Art Piece deleted Successfully", "success", "✅");
            handlePopup("delete", "none");
            fetchArt();
          } else {
            custom_toast("Failed To Delete the Art Piece", "alert", "❌");
          }
        });
    } else {
      custom_toast("Titles Not Match!", "warning", "⚠️");
    }
  };
  return (
    <>
      <div id="proposals" className="w-full px-4 md:w-10/12 mx-auto">
        <div className="px-2 w-fit my-3 mx-auto rounded-md md:text-lg">
          Your Artworks
        </div>
        <div className="flex flex-col md:justify-center md:flex-row w-full">
          <div className="flex w-full items-center justify-center md:w-fit">
            <button
              onClick={() => handlePopup("art", "block")}
              className="px-4 py-1 h-fit mx-2 whitespace-nowrap w-fit bg-sky-500 hover:bg-sky-600 rounded-md text-white text-fjord"
            >
              New <b className="text-white font-bold">+</b>
            </button>
            <div className="w-36 h-fit border mx-2 border-2 bg-fuchsia-500 px-4 py-1 rounded-md">
              <select
                name="search_by"
                id="search_by"
                value={statusType}
                onChange={(e) => setStatusType(e.target.value)}
                className=" w-28 bg-fuchsia-500 text-white text-fjord relative w-20 outline-none border-none"
              >
                <option value="published" className="bg-white">
                  Published
                </option>
                <option value="review" className="bg-white">
                  Requested
                </option>
                <option value="rejected" className="bg-white">
                  Denied
                </option>
              </select>
            </div>
          </div>
          <div className="w-full flex sm:w-6/12 md:w-fit sm:mx-auto md:mx-2 my-2 flex border border-fuchsia-500 rounded-md py-1">
            <input
              type="text"
              id="search_field"
              placeholder="title..."
              value={inpSearch}
              onChange={(e) => {
                setPageCount(1);
                setInpSearch(e.target.value);
              }}
              className="w-full text-md text-fuchsia-600 text-fjord placeholder-fuchsia-400 pl-2 px-4 outline-none border-none md:w-52"
            />
            <img
              src={icon_search}
              alt="search symbol for search field"
              className="w-4 h-auto mr-2"
            />
          </div>
        </div>
        <div className="my-6 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-2 md:gap-4 items-center justify-center">
          {isLoading
          ? [1, 2, 3, 4, 5, 6].map((item) => <CoverLoad />)
          : artData &&
            artData.arts.map((item) => {
              return (
                <Art
                  key={item._id}
                  isProfile
                  data={item}
                  handlePopup={handlePopup}
                />
              );
            })}
        </div>
        {artData && artData.arts.length === 0 && (
          <div className="h-40 w-fit mx-auto text-center">
            <h1 className="text-allura text-2xl text-fuchsia-400">
              Sorry!
              <br />
              You have no Art Piece in {statusType}
            </h1>
          </div>
        )}
         {isLoading ? (
        <div className="flex items-center animate-pulse justify-between">
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
      ) : (
        artData &&
        artData.arts.length !== 0 && (
          <div className="flex items-center justify-between pb-6">
            <button
              onClick={() => {
                if (pageCount > 1) {
                  setPageCount(pageCount - 1);
                }
              }}
              className="px-4 py-1 bg-sky-600 text-white text-fjord rounded-md"
            >
              {" "}
              &#8617; Prev
            </button>
            <div className="flex">
              <p className="h-2 w-2 mx-1 bg-fuchsia-500 rounded-full"></p>
              <p className="h-2 w-2 mx-1 bg-fuchsia-400 rounded-full"></p>
              <p className="h-2 w-2 mx-1 bg-fuchsia-300 rounded-full"></p>
            </div>
            <button
              onClick={() => {
                if (pageCount === artData.totalPages) {
                  custom_toast(
                    "you have caught up with everything we have!",
                    "warning",
                    "👨🏽‍💻"
                  );
                }
                if (pageCount < artData.totalPages) {
                  setPageCount(pageCount + 1);
                }
              }}
              className="px-4 py-1 bg-sky-600 text-white text-fjord rounded-md"
            >
              {" "}
              Next &#8618;
            </button>
          </div>
        )
      )}
      </div>
      <form
        method="POST"
        onSubmit={handleSubmit(artWork)}
        ref={popup_artWork}
        id="new_art"
        className="absolute z-50 top-0 bg-blue-cover hidden flex items-center justify-center h-screen w-full"
      >
        <div className="relative mx-auto w-11/12 flex flex-col mt-4 md:mt-14 items-center border border-fuchsia-400 border-2 rounded-xl py-4 bg-white md:w-6/12">
          <button
            type="button"
            onClick={() => handlePopup("art", "none")}
            className="ml-auto w-fit my-4 mx-4"
          >
            <img src={close_menu} alt="close popup" className="w-4 h-4" />
          </button>
          <div className="absolute w-10/12 md:w-3/6 mx-auto my-4 z-0">
            <img src={bg_logo} alt="background logo" />
          </div>
          <h1 className="text-fuchsia-500 text-2xl text-allura my-2 w-fit mx-auto">
            {workOn ? " Update your Art piece" : "Request an Art to Publish"}
          </h1>
          <div className="w-10/12 pl-4 z-10">
            {" "}
            <div className="flex-1">
              <label className="block w-11/12 text-fjord_one text-md">
                Title
              </label>
              <div className=" my-2">
                <input
                  {...register("title")}
                  className="w-11/12 px-2 text-fjord_one text-sm border border-fuchsia-400 py-2 rounded-lg focus:border-2 outline-none"
                  type="text"
                  name="title"
                  value={art.title}
                  onChange={handleChange}
                />
                <p className="alert">{errors.title?.message}</p>
              </div>
            </div>
            <div className="flex-1">
              <label className="block w-full text-fjord_one text-md">
                Description
              </label>
              <div className="my-2">
                <textarea
                  {...register("description")}
                  rows={3}
                  cols={33}
                  className="w-11/12 px-2 text-fjord_one text-xs border border-fuchsia-400 py-2 rounded-lg focus:border-2 outline-none"
                  type="text"
                  name="description"
                  value={art.description}
                  onChange={handleChange}
                />
                <p className="alert">{errors.description?.message}</p>
              </div>
            </div>
          </div>
          <div className="md:flex items-center w-10/12 pl-4 z-10">
            <div className="border border-fuchsia-400 bg-white rounded-md w-11/12 md:w-6/12 h-40 flex items-center justify-center">
              <img
                src={icon_upload}
                ref={out_img}
                alt="user picture"
                className="w-auto h-full"
              />
            </div>
            <div className="md:px-8 md:w-6/12">
              <label
                htmlFor="inp_img"
                className="w-11/12 my-2 block text-center text-white bg-fuchsia-400 p-2 rounded-md text-fjord_one text-sm hover:cursor-pointer"
              >
                Upload Art
              </label>
              <input
                id="inp_img"
                type="file"
                className="hidden"
                name="inp_img"
                ref={inp_img}
                onChange={saveFile}
              />
              <div className="w-1/4 mx-auto h-1 bg-fuchsia-400 my-2 rounded-md"></div>
              <button
                type="submit"
                className="w-11/12 my-2 text-white bg-sky-400 p-2 rounded-md text-fjord_one text-sm"
              >
                {workOn ? "Update" : "Send Request"}
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* Popup delete art */}
      <div
        id="popup_del"
        ref={popup_del}
        className="absolute hidden top-4 w-fit mx-auto right-0 left-0 border bg-white border-rose-500 rounded-md p-4"
      >
        <button
          onClick={() => handlePopup("delete", "none")}
          className="w-fit absolute right-4"
        >
          <img src={close_menu} alt="close Popup" />
        </button>
        <p className="text-fjord mt-6 text-sm my-1 ">
          Confirm the Art piece to <span className="text-red-600">Delete</span>{" "}
          by typing the Title.
        </p>
        <input
          type="text"
          name="titleDel"
          value={delArt.titleDel}
          className="text-fjord w-full text-sm px-3 my-1 text-rose-500 border block focus:outline-red-300"
          onChange={(e) =>
            setDelArt({ ...delArt, [e.target.name]: e.target.value })
          }
        />
        <button
          onClick={deleteArt}
          className="text-white text-xs px-3 py-1 my-1 bg-rose-500 rounded-md hover:bg-rose-600"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default Proposals;
