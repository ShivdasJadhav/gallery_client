import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Art(props) {
  const navigate = useNavigate();
  const { _id, name, author, price, url_pic, description } = props.data;
  const delete_item = async (id) => {
    await axios.delete(`https://gallary-server.vercel.app/items/${id}`).then((msg) => {
      console.log(msg);
      if (msg.status=== 200) {
        alert(msg.data.message);
        window.location.reload();
      }
    });
  };
  return (
    <div>
      <div className="p-4 md:w-full">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
          style={{
            width:'100%',
            height:"200px"
          }}
            className=" object-cover object-center"
            src={url_pic}
            alt="blog"
          />
          <div className="p-6">
           
            <h1 className="title-font text-sm mx-auto font-semibold w-fit text-gray-900 mb-3">
              {name}
            </h1>
            <h2 className="tracking-widest text-sm title-font mr-4  text-left font-semibold text-gray-700 mb-1">
              Description:
            </h2>
            <p className="text-justify mb-1 h-24 text-xs no-scrollbar overflow-y-scroll">{description}</p>
            <div className="flex items-left flex-wrap ">
              <a className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">
                Rs. {price}
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 px-2 border-l-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {price.toString().substring(1,2)}.2K
              </span>
            </div>
            <div className="flex">
            <button
              onClick={() => {
                navigate(`/update/${_id}`);
              }}
              class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-sm"
            >
              Update
            </button>
            <button
              onClick={() => {
                if (window.confirm("Are you sure to delete!")) {
                  delete_item(_id);
                }
              }}
              class="flex mx-auto mt-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-sm"
            >
              Delete
            </button></div>
            
          </div>
          <h2 className="tracking-widest text-xs title-font mr-4  text-right font-medium text-gray-700 mb-1">
              by - {author}
            </h2>
        </div>
      </div>
    </div>
  );
}

export default Art;
