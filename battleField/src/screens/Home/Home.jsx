  import React from 'react';
  import { BrowserRouter as Router } from 'react-router-dom';
  import './home.css';
  import LeftMenubar from '../LeftMenubar/LeftMenubar';
  import RightMenuBar from '../RightMenuBar/RightMenuBar';
  import Menubar from '../Menubar/Menubar';
import Header from './Header/Header';
import Rightbar from '../Rightbar/Rightbar';
  // import ContentArea from '../ContentArea/ContentArea'; // Create this component for the content area

  const Home = () => {
    return (
        <div className="app-container">
          <LeftMenubar />
          <Header />
          <Menubar />
          <Rightbar />
        </div>
    );
  };

  export default Home;
