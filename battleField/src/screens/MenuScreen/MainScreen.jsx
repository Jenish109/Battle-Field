import React from "react";
import "./mainScreen.css";
import logo from "../../images/main-screen__logos.png";

const MainScreen = () => {
  return (
    <div className="app-container">
      <div className="yellow-container">
        <div className="center-content">
          Personalizing the experience for you...
        </div>
        <div className="red-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="copyright-text">© 2017 electronic arts inc.</div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
