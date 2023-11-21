import React from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { db_connect } from "../Constants";

function Art(props) {
  // const navigate = useNavigate();
  const { _id, name, author, url_pic, description, user, status } = props.data;
  const delete_item = async (id) => {
    await axios.delete(`${db_connect}/items/${id}`).then((msg) => {
      if (msg.status !== undefined && msg.status === 200) {
        alert(msg.data.message);
        props.fetch_new();
      } else {
        alert(msg.message);
      }
    });
  };
  const Accept_prop = async (id) => {
    await axios.get(`${db_connect}/items/accept/${id}`).then((msg) => {
      if (msg.status !== undefined && msg.status === 200) {
        alert(msg.data.message);
        props.fetch_new();
      } else {
        alert(msg.message);
      }
    });
  };
  const Reject_prop = async (id) => {
    await axios.get(`${db_connect}/items/reject/${id}`).then((msg) => {
      if (msg.status !== undefined && msg.status === 200) {
        alert(msg.data.message);
        props.fetch_new();
      } else {
        alert(msg.message);
      }
    });
  };
  return (
    <div id="art">
      <img
        style={{
          width: "100%",
          height: "16rem",
        }}
        src={url_pic}
        alt="blog"
      />
      <div>
        <p id="art_title">{name}</p>
        <p id="art_desc">{description}</p>
        {props.from === "user" && (
          <div if="user_controles">
            <button
              onClick={() => {
                // navigate(`./update/${_id}`);
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                if (window.confirm("Are you sure to delete!")) {
                  delete_item(_id);
                }
              }}
            >
              Delete
            </button>
          </div>
        )}
        {props.from === "admin" && (
          <div id="admin_controle">
            <button
              onClick={() => {
                Accept_prop(_id);
              }}
            >
              Accept
            </button>
            <button
              onClick={() => {
                Reject_prop(_id);
              }}
            >
              Reject
            </button>
          </div>
        )}
      </div>
      {(props.from==="demo")?(<h2 ><i className="author_name">{author}</i></h2>):(<h2  onClick={() => {/*</div>navigate(`/user/Profile_view/${user}`);*/}}><i className="author_name">{author}</i></h2>)}

    </div>
  );
}

export default Art;
