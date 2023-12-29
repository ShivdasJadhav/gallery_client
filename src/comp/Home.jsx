import React, { useEffect, useState } from "react";
import axios from "axios";
import Art from "./Art";
import { db_connect } from "../Constants";
import { custom_toast } from "../Constants";
import { icon_search } from "../assets/img";
import Cover_load from "./CoverLoad";
function Home(props) {
  const [artData, setArtData] = useState(null);
  const [inSearch, setInSearch] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    let url = `${db_connect}/app/getByStatus/?status=published&search=${inSearch}&limit=9&page=${pageCount}&view=true`;
    if (searchBy === "artist") {
      url = `${db_connect}/app/getByStatus/?status=published&search=${inSearch}&artist=true&limit=9&page=${pageCount}&view=true`;
    }
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setArtData(res.data);
          setIsLoading(false);
        }
      });
  }, [inSearch,searchBy, pageCount]);
  let slide_as_screen = "auto";
  if (window.innerWidth > 600) {
    slide_as_screen = 3;
  }
  return (
    <div id="home" className="full p-4 md:w-10/12 md:mx-auto">
      <div className="flex items-center justify-center">
        <div className="border border-2 bg-fuchsia-500 px-4 rounded-md py-1">
          <select
            value={searchBy}
            onChange={(e) => {
              setSearchBy(e.target.value);
            }}
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
            value={inSearch}
            onChange={(e) => {
              setPageCount(1);
              setInSearch(e.target.value);
            }}
            className="w-36 text-fuchsia-600 text-fjord placeholder-fuchsia-400 pl-2 outline-none border-none md:w-40"
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
          ? [1, 2, 3, 4, 5, 6].map((item) => <Cover_load />)
          : artData &&
            artData.arts.map((item) => {
              return (
                <Art
                  isHome
                  token={props.user.token}
                  key={item._id}
                  data={item}
                />
              );
            })}
      </div>
      {artData && artData.arts.length === 0 && (
        <div className="h-40 w-fit mx-auto text-center">
          <h1 className="text-allura text-2xl text-fuchsia-400">
            Sorry!
            <br />
            We don't have Art Pieces with this match
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
          <div className="flex items-center justify-between">
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
  );
}

export default Home;
