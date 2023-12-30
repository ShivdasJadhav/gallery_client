import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { custom_toast, db_connect } from "../Constants";
import { icon_edit, icon_del } from "../assets/img";
function Art(props) {
  let navigate = useNavigate();
  const setView = async () => {
    await axios
      .put(
        `${db_connect}/app/setView/${props.data._id}`,
        {},
        { headers: { Authorization: `Bearer ${props.token}` } }
      )
      .then((res) => {
        if (res.status === 200) {
          navigate(`/art/${props.data._id}`);
        } else {
          custom_toast("failed to ser user view", "warning", "⚠️");
        }
      });
  };
  return (
    <div
      className={`h-64 relative my-4 md:my-2 md:m-0 relative border border-sky-600 rounded-xl`}
    >
      <img src={props.data.img} alt={props.data._id} className="absolute w-full h-full z-0 rounded-xl" />
      {props.isProfile && (
        <div className="absolute z-10 flex right-1 top-[-12px] block">
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
      <div
        onClick={async () => {
          if (props.isHome) {
            await setView();
          } else {
            navigate(`/art/${props.data._id}`);
          }
        }}
        className="mt-auto z-10 rounded-xl border border-fuchsia-600 border-x-0 border-b-0  bg-white hover:cursor-pointer absolute bottom-0 h-32 w-full"
      >
        <h3 className="text-fuchsia-900 text-allura text-base text-center my-1">
          {props.data.title}
        </h3>
        <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden ">
          {props.data.description}
        </p>
        <p className="text-allura pr-4 text-xs pt-2 text-right">
          - {props.data.author}
        </p>
      </div>
    </div>
  );
}

// pedpalliwar
// kamble

export default Art;
