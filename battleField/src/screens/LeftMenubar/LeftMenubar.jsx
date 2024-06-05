import React from "react";
import "./LeftMenubar.css";

import logo1 from "../../images/side-menu__game.png";
import logo2 from "../../images/side-menu__game (1).png";
import logo3 from "../../images/side-menu__game (2).png";
import logo4 from "../../images/side-menu__game (3).png";
import logo5 from "../../images/Vector.png";
import logo6 from "../../images/side-menu.png";
import logout from "../../images/Vector (1).png";

const LeftMenubar = () => {
  return (
    <div className="main-container">
      <div className="img-div">
        <div className="single-img" >
          <img src={logo1} alt="logo1" />
        </div>
        <div className="single-img" >
          <img src={logo2} alt="logo2" />
        </div>
        <div className="single-img" >
          <img src={logo3} alt="logo3" />
        </div>
        <div className="single-img" >
          <img src={logo4} alt="logo4" />
        </div>
        <div className="single-img" >
          <img src={logo5} alt="logo5" />
        </div>
        <div className="single-img" >
          <img src={logo6} alt="logo6" />
        </div>
      </div>

      <div className="img-div">
        <div style={{ marginTop:200 ,display: "flex", flexDirection:"column" ,gap:30 ,  alignItems: "center" }}>
          <div className="help-img">?</div>
          <img src={logout} alt="logout" />
        </div>
      </div>
    </div>
  );
};

export default LeftMenubar;
