import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = () => {
  const data = useSelector((state) => state.user);
  console.log("auth", data.isAuth);

  return data.access && data.isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
