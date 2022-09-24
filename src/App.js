import "./App.css";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";
import Footer from "./Pages/Footer";
import { useSelector } from "react-redux";

function App() {
  // const data = useSelector((state) => state.user);
  // const Signup = lazy(() => import("../src/Pages/SignUp"));
  const Navigation = lazy(() => import("../src/Pages/Navigation"));
  // const Signin = lazy(() => import("../src/Pages/SignIn"));

  return (
    <Container>
      <Suspense
        fallback={
          <Box>
            <CircularProgress />
          </Box>
        }
      >
        <Router>
          <Header />
          <Switch>
            <Route path="/*" element={<Navigation />} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Box = styled.div`
  width: 96%;
  height: 100vh;
  display: grid;

  place-items: center;
`;
