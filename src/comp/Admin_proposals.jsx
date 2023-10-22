import React, { useEffect, useState } from "react";
import axios from "axios";
import Art from "./Art";
import { Route, useNavigate } from "react-router-dom";
import { db_connect } from "../Constants";
function Admin_proposals(props) {
  const navigate = useNavigate();
  let [Arts, setArts] = useState();
  const load_data = () => {
    axios
      .get(`${db_connect}/items/admin_/proposals/requested`)
      .then((data) => {
        if (data.status === 200) {
          if (Object.keys(data.data.item).length <= 0) {
            document.getElementById("text_none_admin").innerText =
              "Sorry you dont have Proposals!";
            document.getElementById("text_none_admin").style.display = "block";
          } else {
            document.getElementById("text_none_admin").style.display = "none";
          }
          setArts(data.data.item);
        } else {
          alert("some error occured");
        }
      });
  };
  useEffect(() => {
    if (props.user.email === "jshivdas07@gmail.com") {
      load_data();
    } else {
      navigate("/user");
    }
  }, []);
  return (
    <>
      <div>
        <div className="mt-1">Wellcome Shiv !</div>
      </div>
      <div className="full capitalize p-6">
        <h3 id="text_none_admin"></h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Arts && Arts.map((element) => <Art data={element} fetch_new={load_data} from="admin" />)}
        </div>
      </div>
    </>
  );
}

export default Admin_proposals;
