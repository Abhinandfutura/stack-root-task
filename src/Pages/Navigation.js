import React, { lazy, useEffect } from "react";
import { Routes as Switch, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import Signup from "./SignUp";
import { useSelector } from "react-redux";
function Navigation() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.user);
  useEffect(() => {
    navigate("/signin");
  }, []);
  return (
    <div>
      <Switch>
        {data.access && data.isAuth ? (
          <Route path="/home" element={<Home />} />
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
          </>
        )}
      </Switch>
    </div>
  );
}

export default Navigation;
