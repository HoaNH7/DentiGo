import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import MasterLayout from "./theme/masterLayout";
import About from "./about";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/DentiGo"
          element={
            <MasterLayout>
              <Home />
            </MasterLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MasterLayout>
              <About />
            </MasterLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
