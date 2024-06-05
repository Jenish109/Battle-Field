import React, { useEffect, useState } from "react";
import "./Menubar.css";
import axios from "axios";
import back from "../../images/back.png";
import demoImg from "../../images/main-screen__background.jpg";

const Menubar = () => {
  const [lists, setLists] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5008/home");
        setLists(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    console.log(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const FlatList = ({ items }) => {
    return (
      <ul className="list-menu">
        {items.map((item, index) => (
          <li
            key={index}
            style={item.style || {}}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item.title}
            {hoveredIndex === index && (
              <div className="hoverDiv">
                <div className="imgdiv">
                  <img src={demoImg} style={{ height: 180, width: "100%" }} alt="Demo" />
                </div>
                <div style={{ fontSize: 25, color: "white" }}>{item.title}</div>
                <div style={{ fontSize: 15, color: "white" }}>
                  {item.description}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="menu-container">
      <div className="menu-inside">
        <div className="first-menu">
          <div>
            <img src={back} alt="back" />
          </div>
          <div>MULTIPLAYER </div>
          <div>/</div>
        </div>
        <div className="second-menu">QUICKMATCH</div>
      </div>
      <div id="style-1" style={{ height: '100vh',overflow:"auto",overflowX:'hidden', }}>
        <FlatList items={lists} />
      </div>
    </div>
  );
};

export default Menubar;