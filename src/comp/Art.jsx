import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { db_connect } from "../Constants";
import { icon_edit, icon_del } from "../assets/img";
function Art(props) {
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
    <div
      className={`h-64 my-2 md:m-0 relative border border-sky-600 rounded-xl bg-[url('${props.data.img}')] bg-no-repeat bg-center bg-cover hover:cursor-pointer`}
    >
      {props.isProfile && (
        <div className="absolute flex right-1 top-[-12px] block">
          <button
            onClick={() => props.handlePopup("update", "block", props.data)}
          >
            <img src={icon_edit} alt="edit artwork" className="mx-1" />
          </button>
          <button
            onClick={() =>
              props.handlePopup("delete", "block", {
                id: props.data._id,
                title: props.data.title,
              })
            }
          >
            <img src={icon_del} alt="delete artwork" className="mx-1" />
          </button>
        </div>
      )}
      <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
        <h3 className="text-fuchsia-900 text-allura text-base text-center my-1">
          {props.data.title}
        </h3>
        <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden ">
          {props.data.description}
        </p>
      </div>
    </div>
  );
}

export default Art;
