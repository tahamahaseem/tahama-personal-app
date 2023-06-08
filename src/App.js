import React from 'react';
import NavigationBar from './components/NavigationBar';
import { TitleSection } from './components/TitleSection';
import { Profile } from './components/Profile';
import { TitlePage } from './components/TitlePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import video from "./assets/video1.mp4"
import profileImg from "./assets/tahamahaseem.jpg";
import { Home } from './components/Home';
import { PageData } from './components/PageData';



function App() {
  return (
    <div className="app">
      <Router >
        <NavigationBar />
        <video className="video-background" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <Routes>
          {PageData.map((item, index) => {
            return(
             item.path != "/" ? <Route path={item.path} Component={item.component}/> : <Route exact path={item.path} Component={item.component}/>
            );
          })}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
