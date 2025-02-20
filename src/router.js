import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./theme/header";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
