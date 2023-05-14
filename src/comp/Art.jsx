import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/Art.css";

function Art(props) {
  const navigate = useNavigate();
  const { _id, name, author, url_pic, description, user, status } = props.data;
  const delete_item = async (id) => {
    await axios.delete(`https://gallary-server.vercel.app/items/${id}`).then((msg) => {
      if (msg.status!=undefined && msg.status === 200) {
        alert(msg.data.message);
        window.location.reload();
      }else{
        alert(msg.message)
      }
    });
  };
  const Accept_prop = async (id) => {
    await axios.get(`https://gallary-server.vercel.app/items/accept/${id}`).then((msg) => {
      if (msg.status!=undefined && msg.status === 200) {
        alert(msg.data.message);
        window.location.reload();
      }else{
        alert(msg.message)
      }
    });
  };
  const Reject_prop = async (id) => {
    await axios.get(`https://gallary-server.vercel.app/items/reject/${id}`).then((msg) => {
      if (msg.status!=undefined && msg.status === 200) {
        alert(msg.data.message);
        window.location.reload();
      }else{
        alert(msg.message)
      }
    });
  };
  let controle_buttons="flex";
  let controle_admin="flex";
  if(props.from==='home'){
    controle_buttons="flex hide_controles";
    controle_admin="flex hide_controles";
  }else if(props.from==='user'){
    controle_admin="flex hide_controles";
  }else if(props.from==='admin'){
    controle_buttons="flex hide_controles";
  }
  return (
    <div>
      <div className="p-4 md:w-full ">
        <div className="h-full border-2 hover:shadow-md border-orange-200 border-2 border-opacity-60 rounded-lg overflow-hidden">
          <img
            style={{
              width: "100%",
              height: "200px",
            }}
            className=" object-cover object-center"
            src={url_pic}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-sm mx-auto font-semibold w-fit text-orange-900 mb-3">
              {name}
            </h1>
            <h2 className="tracking-widest text-sm title-font mr-4  text-left font-semibold text-gray-700 mb-1">
              Description:
            </h2>
            <p className="text-justify mb-1 h-24 text-xs no-scrollbar overflow-y-scroll">
              {description}
            </p>
            <div className={controle_buttons}>
              <button
                onClick={() => {
                  navigate(`./update/${_id}`);
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
              </button>
            </div>
            <div className={controle_admin}>
            <button
                onClick={()=>{Accept_prop(_id)}}
                class="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-sm"
              >
                Accept
              </button>
              <button
                onClick={()=>{Reject_prop(_id)}}
                class="flex mx-auto mt-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-sm"
              >
                Reject
              </button>
            </div>
          </div>
          <h2 onClick={()=>{navigate(`/user/Profile_view/${user}`)}} className="tracking-widest text-orange-700 text-xs title-font mr-4 hover:cursor-pointer hover:underline text-right font-medium text-gray-700 mb-1">
            by - {author}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Art;
