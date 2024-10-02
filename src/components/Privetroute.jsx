import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Privetroute = ({ children }) => {
  const isLogin = useSelector((store) => store.users.isLoggedIn);
  console.log(isLogin);

  const localUser = JSON.parse(localStorage.getItem("user"));
  console.log("loaclUser", localUser);

  if (isLogin || localUser !== null) {
    console.log("user is logged in");
    return children;
  } else {
    console.log("user is not logged in");
    return <Navigate to="/login" />;
  }
};

export default Privetroute;
