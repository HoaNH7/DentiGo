import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import MasterLayout from "./theme/masterLayout";

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
      </Routes>
    </Router>
  );
};

export default RouterComponent;
