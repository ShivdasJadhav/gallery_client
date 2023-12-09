import React, { createContext, useEffect, useState } from "react";
import App from "./App";
import Auth from "./Auth/Auth";
export const AuthStatus = createContext(null);
function Controller() {
  const [statusAuth, setStatusAuth] = useState(false);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setStatusAuth(true);
    }
  });
  const configureAuth = (isLogin) => {
    if (isLogin) {
      setStatusAuth(true);
    } else {
      setStatusAuth(false);
    }
  };
  return (
    <AuthStatus.Provider value={configureAuth}>
      {statusAuth ? <App /> : <Auth />}
    </AuthStatus.Provider>
  );
}

export default Controller;
