import React, { createContext, useEffect, useState } from "react";
import App from "./App";
import Auth from "./Auth/Auth";
import { custom_toast } from "./Constants";
export const AuthStatus = createContext(null);
function Controller() {
  const [statusAuth, setStatusAuth] = useState(false);
  const [user,setUser]=useState(null);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setStatusAuth(true);
    }
  });
  const configureAuth = (isLogin,data=null) => {
    if (isLogin) {
      setStatusAuth(true);
      setUser(data);
      custom_toast(`Welcome Back ${data.firstName}`, "success", "📚",5000);
    } else {
      setStatusAuth(false);
      setUser(data);
    }
  };
  return (
    <AuthStatus.Provider value={configureAuth}>
      {statusAuth ? <App user={user}/> : <Auth />}
    </AuthStatus.Provider>
  );
}

export default Controller;
