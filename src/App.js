import React from 'react';
import NavigationBar from './components/NavigationBar';
import { TitleSection } from './components/TitleSection';
import { Profile } from './components/Profile';
import { TitlePage } from './components/TitlePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import video from "./assets/video1.mp4"
import profileImg from "./assets/tahamahaseem.jpg";



function App() {
  return (
    <div className="app">
      <Router >
        <NavigationBar />
        <video className="video-background" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <TitleSection />
        <TitlePage title="About Me" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, metus et tincidunt viverra, urna tellus laoreet elit, non luctus sapien odio in lectus. Aliquam erat volutpat. Ut interdum pellentesque nisl, vel rhoncus ex venenatis ac. Fusce congue tincidunt nibh in convallis. In hac habitasse platea dictumst. Nam interdum eros sed ante fringilla finibus. Maecenas sed metus a odio tincidunt congue. Nullam tristique, elit a laoreet convallis, nunc leo eleifend leo, vitae dictum neque dui vitae lacus. Pellentesque eu pellentesque purus, sed pulvinar lectus. Sed id ligula malesuada, aliquet mauris sit amet, bibendum lorem. Etiam volutpat mauris nec fermentum aliquet. Aenean eu lectus consequat, tempus ligula et, lacinia sem. Nulla facilisi. Curabitur ut tristique ex. Integer fermentum malesuada tortor, in eleifend metus eleifend id. Sed nec ullamcorper metus." />
        <TitlePage title="My Skills" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, metus et tincidunt viverra, urna tellus laoreet elit, non luctus sapien odio in lectus. Aliquam erat volutpat. Ut interdum pellentesque nisl, vel rhoncus ex venenatis ac. Fusce congue tincidunt nibh in convallis. In hac habitasse platea dictumst. Nam interdum eros sed ante fringilla finibus. Maecenas sed metus a odio tincidunt congue. Nullam tristique, elit a laoreet convallis, nunc leo eleifend leo, vitae dictum neque dui vitae lacus. Pellentesque eu pellentesque purus, sed pulvinar lectus. Sed id ligula malesuada, aliquet mauris sit amet, bibendum lorem. Etiam volutpat mauris nec fermentum aliquet. Aenean eu lectus consequat, tempus ligula et, lacinia sem. Nulla facilisi. Curabitur ut tristique ex. Integer fermentum malesuada tortor, in eleifend metus eleifend id. Sed nec ullamcorper metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, metus et tincidunt viverra, urna tellus laoreet elit, non luctus sapien odio in lectus. Aliquam erat volutpat. Ut interdum pellentesque nisl, vel rhoncus ex venenatis ac. Fusce congue tincidunt nibh in convallis. In hac habitasse platea dictumst. Nam interdum eros sed ante fringilla finibus. Maecenas sed metus a odio tincidunt congue. Nullam tristique, elit a laoreet convallis, nunc leo eleifend leo, vitae dictum neque dui vitae lacus. Pellentesque eu pellentesque purus, sed pulvinar lectus. Sed id ligula malesuada, aliquet mauris sit amet, bibendum lorem. Etiam volutpat mauris nec fermentum aliquet. Aenean eu lectus consequat, tempus ligula et, lacinia sem. Nulla facilisi. Curabitur ut tristique ex. Integer fermentum malesuada tortor, in eleifend metus eleifend id. Sed nec ullamcorper metus." />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
