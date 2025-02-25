import React, { useState, useEffect } from "react";
import RoutesComponent from "./router";
import Loader from "./loader";
import "@fontsource/inter";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">{loading ? <Loader /> : <RoutesComponent />}</div>
  );
}

export default App;
