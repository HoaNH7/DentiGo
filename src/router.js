import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./scrolltotop";
import Home from "./home";
import MasterLayout from "./theme/masterLayout";
import About from "./about";
import Services from "./services";
import Team from "./team";
import Pricing from "./pricing";
import Blog from "./blog";
import Contact from "./contact";
import Loader from "./loader";

const RouteWithLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return loading ? <Loader /> : children;
};

const RouterComponent = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/DentiGo"
          element={
            <RouteWithLoader>
              <MasterLayout>
                <Home />
              </MasterLayout>
            </RouteWithLoader>
          }
        />
        <Route
          path="/about"
          element={
            <RouteWithLoader>
              <MasterLayout>
                <About />
              </MasterLayout>
            </RouteWithLoader>
          }
        />
        <Route
          path="/services"
          element={
            <RouteWithLoader>
              <MasterLayout>
                <Services />
              </MasterLayout>
            </RouteWithLoader>
          }
        />
        <Route
          path="/team"
          element={
            <RouteWithLoader>
              <MasterLayout>
                <Team />
              </MasterLayout>
            </RouteWithLoader>
          }
        />
        <Route
          path="/pricing"
          element={
            <RouteWithLoader>
              <MasterLayout>
                <Pricing />
              </MasterLayout>
            </RouteWithLoader>
          }
        />
        <Route
          path="/blog"
          element={
            <RouteWithLoader>
              <MasterLayout>
                <Blog />
              </MasterLayout>
            </RouteWithLoader>
          }
        />
        <Route
          path="/contact"
          element={
            <RouteWithLoader>
              <MasterLayout>
                <Contact />
              </MasterLayout>
            </RouteWithLoader>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
