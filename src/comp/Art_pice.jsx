import React, { useEffect, useState } from "react";
import {
  icon_order,
  icon_like,
  icon_view,
  solid_like,
  logo,
} from "../assets/img";
import { custom_toast, db_connect } from "../Constants";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "./Comment";
function Art_pice(props) {
  const [art, setArt] = useState(null);
  const [artist, setArtist] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(null);
  let { id } = useParams();
  const fetchArtist = async (uid) => {
    await axios
      .get(`${db_connect}/user/getUserById/${uid}`, {
        headers: { Authorization: `Bearer ${props.user.token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          setArtist(res.data);
        }
      });
  };
  const fetchArt = async () => {
    await axios
      .get(`${db_connect}/app/getArtById/${id}`, {
        headers: { Authorization: `Bearer ${props.user.token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          setArt(res.data);
          fetchArtist(res.data.user_id);
          fetchComments(id);
        } else {
          custom_toast("Failed to load Details", "warning", "❌");
        }
      });
  };
  const fetchComments = async (reverse) => {
    await axios
      .get(`${db_connect}/app/getComments/${id}`, {
        headers: { Authorization: `Bearer ${props.user.token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          if (reverse) {
            setComments(res.data.comments.reverse());
          } else {
            setComments(res.data.comments);
          }
        } else {
          custom_toast("Failed to load Comments", "warning", "❌");
        }
      });
  };
  const likeArt = async () => {
    await axios
      .put(
        `${db_connect}/app/likeArt/${art._id}`,
        {},
        {
          headers: { Authorization: `Bearer ${props.user.token}` },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          fetchArt();
        } else {
          custom_toast("Failed to like Art piece", "warning", "🎑");
        }
      });
  };
  const disLikeArt = async () => {
    await axios
      .put(
        `${db_connect}/app/dislikeArt/${art._id}`,
        {},
        {
          headers: { Authorization: `Bearer ${props.user.token}` },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          fetchArt();
        } else {
          custom_toast("Failed to dislike Art piece", "warning", "🎑");
        }
      });
  };
  const postComment = async () => {
    if (comment === "") {
      custom_toast("Comment should not be empty", "warning", "⚠️");
      return;
    }
    await axios
      .put(
        `${db_connect}/app/postComment`,
        { art_id: art._id, text: comment },
        { headers: { Authorization: `Bearer ${props.user.token}` } }
      )
      .then((res) => {
        if (res.status === 200) {
          custom_toast("Commented Successfully!", "success", "📬");
          setComment("");
          fetchComments();
        } else {
          custom_toast("failed to comment", "alert", "❌");
        }
      });
  };
  const approveArt = async () => {
    await axios
      .put(
        `${db_connect}/app/approveArt/${id}`,
        {},
        { headers: { Authorization: `Bearer ${props.user.token}` } }
      )
      .then((res) => {
        if (res.status === 200) {
          custom_toast("Art Piece published!", "success", "✅");
        } else {
          custom_toast("failed to Publish", "alert", "❌");
        }
      });
  };
  const rejectArt = async () => {
    await axios
      .put(
        `${db_connect}/app/rejectArt/${id}`,
        {},
        { headers: { Authorization: `Bearer ${props.user.token}` } }
      )
      .then((res) => {
        if (res.status === 200) {
          custom_toast("Art Piece Rejected!", "success", "✅");
        } else {
          custom_toast("Failed to Reject", "alert", "❌");
        }
      });
  };
  useEffect(() => {
    fetchArt();
  }, []);
  return (
    <div id="art_pice" className="w-11/12 md:w-8/12 mx-auto">
      {art && (
        <div className="flex flex-col">
          <div className="md:flex-1 border border-sky-600 border-1 rounded-lg my-4">
            <img
              src={art.img}
              alt="art piece"
              className="w-10/12 h-auto mx-auto"
            />
          </div>
          <div className="flex justify-between my-4">
            {artist && (
              <div className="flex md:my-2">
                <div className="mr-2 flex items-center justify-center overflow-hidden rounded-full border-fuchsia-500 border w-12 h-12">
                  <img
                    src={artist.img === "" ? logo : artist.img}
                    alt="artists image"
                    className="w-auto h-auto"
                  />
                </div>
                <div className="w-fit mt-1">
                  <p className="text-md text-fjord leading-3 text-sky-600">
                    {artist.firstName} {artist.lastName}
                  </p>
                  <p className="text-md text-allura">{artist.user_type}</p>
                </div>
              </div>
            )}
            <div className="flex md:my-2">
              {art.likes.includes(props.user._id) ? (
                <button
                  onClick={() => disLikeArt()}
                  className=" bg-fuchsia-500 flex h-fit px-4 mr-2 items-center border border-1 border-fuchsia-600 rounded-lg py-1 w-18 justify-around hover:cursor-pointer"
                >
                  <img
                    className="w-4 mx-1 h-fit"
                    src={icon_like}
                    alt="like thumb"
                  />
                  <p className="text-fjord text-white text-sm">
                    {art.likes.length}
                  </p>
                </button>
              ) : (
                <button
                  onClick={() => likeArt()}
                  className="flex h-fit px-4 mr-2 items-center border border-1 border-fuchsia-600 rounded-lg py-1 w-18 justify-around hover:cursor-pointer"
                >
                  <img
                    className="w-4 mx-1 h-fit"
                    src={solid_like}
                    alt="like thumb"
                  />
                  <p className="text-fjord text-sm">{art.likes.length}</p>
                </button>
              )}
              <button className="flex h-fit bg-fuchsia-500 px-4 ml-2 items-center border border-1 border-fuchsia-600 rounded-lg py-1 w-18 justify-around">
                <img
                  className="w-4 mx-1 h-fit"
                  src={icon_view}
                  alt="eye view"
                />
                <p className="text-fjord text-white text-sm">
                  {art.views.length}
                </p>
              </button>
            </div>
          </div>
          <div className="md:flex-1 md:mx-8">
            <h2 className="w-fit mx-auto text-allura text-2xl text-fuchsia-600">
              {art.title}
            </h2>
            <p className="text-md text-fjord text-justify leading-5 h-56 overflow-y-scroll">
              {art.description}
            </p>
            {props.user.isAdmin && (
              <div className="w-fit mx-auto">
                <button
                  onClick={() => {
                    approveArt();
                  }}
                  className="border border-green-700 bg-green-500 text-white text-xs md:text-sm rounded-md mx-4 px-4 py-1 text-fjord hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => {
                    rejectArt();
                  }}
                  className="border border-red-700 bg-red-500 text-white text-xs md:text-sm rounded-md mx-4 px-4 py-1 text-fjord hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="h-1 w-3/12 md:w-1/12 my-2 bg-fuchsia-400 rounded-md mx-auto"></div>
      <div className="flex items-center my-4">
        {comments && (
          <p className="text-fjord text-md w-fit">{comments.length} comments</p>
        )}
        <div className="flex bg-fuchsia-400 rounded-md px-4 py-2 mx-2 items-center">
          <img
            src={icon_order}
            alt="image button to order the comment list"
            className="w-6 h-fit"
          />
          <select
            onChange={(e) => {
              if (e.target.value === "new_top") {
                fetchComments("reverse");
              } else {
                fetchComments();
              }
            }}
            name="order_comments"
            className="w-28 bg-fuchsia-400 text-white outline-none border-none"
          >
            {" "}
            <option value="new_top" className="text-fjord bg-white">
              Latest First
            </option>
            <option value="old_top" className="text-fjord bg-white">
              Oldest First
            </option>
          </select>
        </div>
      </div>
      <div>
        <div className="flex mt-8">
          <div className="flex items-center justify-center w-12 overflow-hidden h-12 mx-2 rounded-full border-fuchsia-500 border">
            <img
              src={props.user.img === "" ? logo : props.user.img}
              alt="artists image"
              className="w-auto h-auto"
            />
          </div>
          <div className="ml-4 flex-1 ">
            <textarea
              name="comment"
              id="comment"
              rows={2}
              placeholder="Add your comment..."
              className="leading-5 w-full outline-none border-b border-gray-600 text-sm text-fjord"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end my-2">
          <button
            onClick={() => postComment()}
            className="w-fit px-4 py-1 text-fjord text-sm text-white bg-sky-500 rounded-md"
          >
            Comment
          </button>
        </div>
      </div>
      <div id="comments" className="h-96 overflow-y-scroll">
        {comments &&
          comments.map((com) => {
            return (
              <Comment key={com._id} data={com} token={props.user.token} />
            );
          })}
      </div>
    </div>
  );
}

export default Art_pice;
