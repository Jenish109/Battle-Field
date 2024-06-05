import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainScreen from "./screens/MenuScreen/MainScreen";
import Home from "./screens/Home/Home";

const App = () => {
  const [showMainScreen, setShowMainScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainScreen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
