import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
import { Routes as Switch, Route } from "react-router-dom";

function Navigation() {
  const Home = lazy(() => import("../Pages/Home"));

  return (
    <div>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default Navigation;
