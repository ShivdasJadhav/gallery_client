import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import { custom_toast, db_connect } from "../Constants";
import { close_menu } from "../assets/img";
import Art from "./Art";
function Dashboard(props) {
  const [userCount, setUserCount] = useState({
    artist: 0,
    enthusiast: 0,
    orgs: 0,
  });
  const [users, setUsers] = useState(null);
  const [review, setReview] = useState(null);
  const [userId, setUserId] = useState("");

  let navigate = useNavigate();

  let popup_del = useRef();

  useEffect(() => {
    axios.get(`${db_connect}/auth/getUserCount`).then((res) => {
      if (res.status === 200) {
        setUserCount({
          artist: res.data.artist,
          enthusiast: res.data.enthusiast,
          orgs: res.data.orgs,
        });
      } else {
        custom_toast("Failed to Load information", "alert", "🎑");
      }
    });
    axios
      .get(`${db_connect}/user/getUsers`, {
        headers: { Authorization: `Bearer ${props.user.token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          setUsers(res.data);
        } else {
          custom_toast("Failed to Load Users", "alert", "❌");
        }
      });
    axios
      .get(`${db_connect}/app/getByStatus/review`, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setReview(res.data);
        }
      });
  }, []);
  const deleteUser = (id) => {
    axios
      .delete(
        `${db_connect}/user/deleteUser`,
        { id },
        { headers: { Authorization: `Bearer ${props.user.token}` } }
      )
      .then((res) => {
        if (res.status === 200) {
          custom_toast("User Account deleted Successfully", "success", "👨🏽‍💻");
        } else {
          custom_toast("Failed to Delete the user Account", "alert", "👨🏽‍💻");
        }
      });
  };
  const data = [
    ["Task", "Hours per Day"],
    ["Artists", userCount.artist],
    ["Enthusiasts", userCount.enthusiast],
    ["Organizations", userCount.orgs],
  ];
  const confirmDel = (id) => {
    popup_del.current.style.display = "block";
    setUserId(id);
  };
  let count = 1;
  return (
    <div className="w-9/12 mx-auto">
      <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
      <div className="container px-5 py-10 mx-auto w-full">
        <div className="w-full h-96 border border-sky-700 rounded-md mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead className="bg-sky-700">
              <tr className="sticky border-sky-700 border rounded-md top-0">
                <th className="pl-2 py-3 text-white text-xs md:text-sm tracking-wider font-medium text-gray-900 text-sm  rounded-tl w-fit rounded-bl">
                  Sr. No.
                </th>
                <th className="pl-8 py-3 text-white text-xs md:text-sm tracking-wider font-medium text-gray-900 text-sm ">
                  Name
                </th>
                <th className="pl-4 py-3 text-white text-xs md:text-sm tracking-wider font-medium text-gray-900 text-sm ">
                  Email
                </th>
                <th className="pl-4 py-3 text-white text-xs md:text-sm tracking-wider font-medium text-gray-900 text-sm ">
                  Ph. No.
                </th>
                <th className="pl-4 py-3 text-white text-xs md:text-sm tracking-wider font-medium text-gray-900 text-sm ">
                  User Type
                </th>
                <th className="pl-4 py-3 text-white text-xs md:text-sm text-center tracking-wider font-medium text-gray-900 text-sm "></th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr className="hover:bg-gray-200 border border" key={count}>
                    <td className="px-4 py-1 w-fit">{count++}</td>
                    <td className="flex items-center text-xs px-4 py-3">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={user.img}
                        alt="#"
                      />
                      &nbsp;{" "}
                      <p className="h-full ml-2">
                        {user.firstName} {user.lastName}
                      </p>
                    </td>
                    <td className="px-4 text-xs py-1">{user.email}</td>
                    <td className="px-4 py-1 text-xs text-gray-900">
                      {user.contact}
                    </td>
                    <td className="px-4 py-1 text-xs text-gray-900">
                      {user.user_type}
                    </td>
                    <td className="px-1 text-xs text-center py-1 ">
                      <button
                        onClick={() => confirmDel(`${user.id}`)}
                        className="px-3 py-1 mx-1 bg-red-100 border border-red-300 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="text-allura text-fuchsia-800 w-fit mx-auto text-2xl">Requests to publish</h1>
      <div className="my-6 md:grid md:grid-cols-4 md:gap-4">
        {review &&
          Object.entries(review).map(([key, value]) => {
            return <Art key={value._id} data={value} />;
          })}
      </div>
      {/* Popup confirm user to delete */}
      <div
        id="popup_del"
        ref={popup_del}
        className="absolute hidden top-4 w-8/12 md:w-4/12 mx-auto right-0 left-0 border bg-white border-rose-500 rounded-md p-4"
      >
        <button
          onClick={() => {
            popup_del.current.style.display = "none";
          }}
          className="w-fit absolute right-4"
        >
          <img src={close_menu} alt="close Popup" />
        </button>
        <p className="text-fjord mt-6 text-sm my-1 ">
          Confirmation to{" "}
          <span className="italic text-red-600">Delete User Account</span>{" "}
        </p>
        <p className="text-[10px] leading-4">
          All account details will be deleted including art pieces and other
          impressions to the
        </p>
        <button
          onClick={() => deleteUser(userId)}
          className="text-white text-xs px-3 py-1 my-1 bg-rose-500 rounded-md hover:bg-rose-600"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
