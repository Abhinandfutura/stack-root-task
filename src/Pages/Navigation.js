import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "./Home";

function Navigation() {
  //   const navigate = useNavigate();

  return (
    <div>
      <Switch>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Switch>
    </div>
  );
}

export default Navigation;
