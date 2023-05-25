import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";

// pie chart

function Dashboard(props) {
  const [user_data, setUserData] = useState({
    artist: null,
    art_lover: null,
    orgs: null,
    users: null,
  });
  let navigate = useNavigate();
  useEffect(() => {
    if (props.user.user_type != "admin") {
      navigate("/user");
    }
    axios.get("https://gallary-server.vercel.app/auth/getUserData").then((data) => {
      setUserData({
        artist: data.data.artist,
        art_lover: data.data.art_lover,
        orgs: data.data.orgs,
        users: data.data.users,
      });
    });
  }, []);
  const delete_user = (id) => {
    axios
      .delete("https://gallary-server.vercel.app/auth/deleteUser", { id })
      .then((data) => {
        if (data.status === 200) {
          alert("user Deleted successfully!");
        }
      });
  };
  const data = [
    ["Task", "Hours per Day"],
    ["Artists", user_data.artist],
    ["Art Lovers", user_data.art_lover],
    ["Organisation", user_data.orgs],
  ];

  const options = {
    title: "Gallery Users",
  };
  let user_count = 1;
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 w-full h-96 border rounded-md mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead className="bg-orange-500">
                <tr className="sticky top-0">
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm  rounded-tl w-fit rounded-bl">
                    Sr. No.
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                    Name
                  </th>

                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                    Email
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                    Contact No.
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                    User Type
                  </th>
                  <th class="px-4 py-3 title-font text-center tracking-wider font-medium text-gray-900 text-sm ">
                    Profile
                  </th>
                </tr>
              </thead>
              <tbody>
                {user_data.users &&
                  user_data.users.map((user) => (
                    <tr className="hover:bg-blue-100" key={user_count}>
                      <td class="px-4 py-3 w-fit">{user_count++}</td>
                      <td class="flex align-center text-xs px-4 py-3">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={user.img}
                          alt="#"
                        />
                        &nbsp; <p className="h-full ml-2">{user.name}</p>
                      </td>
                      <td class="px-4 text-xs py-3">{user.email}</td>
                      <td class="px-4 py-3 text-xs text-gray-900">
                        {user.contact}
                      </td>
                      <td class="px-4 py-3 text-xs text-gray-900">
                        {user.use_type}
                      </td>
                      <td class="px-1 text-xs text-center py-3 ">
                        <button
                          onClick={() =>
                            navigate(`/user/Profile_view/${user.email}`)
                          }
                          className="px-3 py-1 mx-1 bg-blue-100 border border-blue-300 rounded-md"
                        >
                          View
                        </button>
                        <button className="px-3 py-1 mx-1 bg-red-100 border border-red-300 rounded-md">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
