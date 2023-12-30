import React, { createContext, useEffect, useState } from "react";
import App from "./App";
import Auth from "./Auth/Auth";
import { custom_toast, db_connect } from "./Constants";
import axios from "axios";
export const AuthStatus = createContext(null);
function Controller() {
  const [statusAuth, setStatusAuth] = useState(false);
  const [user, setUser] = useState(null);
  const fetchUser = async (utkn) => {
    const uid = JSON.parse(window.atob(utkn.split(".")[1])).id;
    await axios
      .post(
        `${db_connect}/user/userInfo`,
        { uid },
        {
          headers: {
            Authorization: `Bearer ${utkn}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setUser({...res.data,token:utkn});
          setStatusAuth(true);
          custom_toast(
            `Welcome Back ${res.data.firstName}`,
            "success",
            "📚",
            5000
          );
        } else {
          setStatusAuth(false);
          window.location.href("/login");
        }
      });
  };
  useEffect(() => {
    let utkn = localStorage.getItem("utkn");
    if (utkn) {
      fetchUser(utkn);
    }
  }, []);
  const configureAuth = (isLogin, utkn = null) => {
    if (isLogin) {
      fetchUser(utkn);
    } else {
      setStatusAuth(false);
    }
  };
  return (
    <AuthStatus.Provider value={configureAuth}>
      {statusAuth ? <App user={user} /> : <Auth />}
    </AuthStatus.Provider>
  );
}

export default Controller;
