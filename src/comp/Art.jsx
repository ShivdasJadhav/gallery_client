import React from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { db_connect } from "../Constants";
import edit_art from "../assets/img/edit.png";
import del_art from "../assets/img/delete.png";
function Art(props) {
  let editor="hidden";
  if(props.from==="editor"){
    editor="absolute flex right-1 top-[-12px] block";
  }
  // const navigate = useNavigate();
  // const { _id, name, author, url_pic, description, user, status } = props.data;
  // const delete_item = async (id) => {
  //   await axios.delete(`${db_connect}/items/${id}`).then((msg) => {
  //     if (msg.status !== undefined && msg.status === 200) {
  //       alert(msg.data.message);
  //       props.fetch_new();
  //     } else {
  //       alert(msg.message);
  //     }
  //   });
  // };
  // const Accept_prop = async (id) => {
  //   await axios.get(`${db_connect}/items/accept/${id}`).then((msg) => {
  //     if (msg.status !== undefined && msg.status === 200) {
  //       alert(msg.data.message);
  //       props.fetch_new();
  //     } else {
  //       alert(msg.message);
  //     }
  //   });
  // };
  // const Reject_prop = async (id) => {
  //   await axios.get(`${db_connect}/items/reject/${id}`).then((msg) => {
  //     if (msg.status !== undefined && msg.status === 200) {
  //       alert(msg.data.message);
  //       props.fetch_new();
  //     } else {
  //       alert(msg.message);
  //     }
  //   });
  // };
  return (
    <div className="h-64 my-2 md:m-0 relative border border-sky-600 rounded-xl bg-[url('https://th.bing.com/th/id/OIP.LlPvc6ko9I9s8lUdIUOFaQHaF4?pid=ImgDet&w=206&h=163&c=7&dpr=1.3')] bg-no-repeat bg-center bg-cover hover:cursor-pointer">
      <div className={editor}>
        <button>
          <img src={edit_art} alt="edit artwork" className="mx-1" />
        </button>
        <button>
          <img src={del_art} alt="delete artwork" className="mx-1" />
        </button>
      </div>
      <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
        <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize ">
          Misty mood
        </h3>
        <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden ">
          He stood on the bridge, watching the mist rise from the river. He felt
          a chill in his bones, and a heaviness in his heart. He remembered the
          last time he saw her, how they had kissed goodbye, and how she had
          promised to come back. He waited for her every day, hoping to see her
          silhouette in the fog. But she never came. He wondered if she was
          still alive, or if she had forgotten him. He felt like he was fading
          away, like the mist that dissolved in the air.
        </p>
      </div>
    </div>
  );
}

export default Art;
