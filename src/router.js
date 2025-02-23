import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrolltotop";
import Home from "./home";
import MasterLayout from "./theme/masterLayout";
import About from "./about";
import Services from "./services";
import Team from "./team";
import Pricing from "./pricing";
import Blog from "./blog";
import Contact from "./contact";

const RouterComponent = () => {
  return (
    <Router>
      <ScrollToTop />
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
        <Route
          path="/services"
          element={
            <MasterLayout>
              <Services />
            </MasterLayout>
          }
        />
        <Route
          path="/team"
          element={
            <MasterLayout>
              <Team />
            </MasterLayout>
          }
        />
        <Route
          path="/pricing"
          element={
            <MasterLayout>
              <Pricing />
            </MasterLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MasterLayout>
              <Blog />
            </MasterLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MasterLayout>
              <Contact />
            </MasterLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
