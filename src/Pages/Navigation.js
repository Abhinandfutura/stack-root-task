import React, { lazy, useEffect } from "react";
import { Routes as Switch, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import Signup from "./SignUp";

function Navigation() {
  //   const navigate = useNavigate();

  return (
    <div>
      <Switch>
        <>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
        </>
      </Switch>
    </div>
  );
}

export default Navigation;
