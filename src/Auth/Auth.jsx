import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
function Auth(props) {
  const [user, setUser] = useState();
  let navigate = useNavigate();
  let authenticated = false;
  useEffect(() => {
    if (!localStorage.getItem("authentic")) {
      navigate("/");
    }else{
      authenticated=true;
    }
  }, []);
  return <div>Auth</div> ;
}

export default Auth;
