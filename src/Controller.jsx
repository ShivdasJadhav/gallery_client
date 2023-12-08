import React, { createContext, useState } from "react";
import App from "./App";
import Auth from "./Auth/Auth";
export const AuthStatus = createContext(null);
function Controller() {
  const [statusAuth, setStatusAuth] = useState(false);
  const [user, setUser] = useState(null);
  const configureAuth = (data = null) => {
    if (data === null) {
      setUser(null);
      setStatusAuth(false);
    } else {
      setUser(data);
      setStatusAuth(true);
    }
  };
  return (
    <AuthStatus.Provider value={configureAuth} >
      {statusAuth ? <App user={user} /> : <Auth />}
    </AuthStatus.Provider>
  );
}

export default Controller;
