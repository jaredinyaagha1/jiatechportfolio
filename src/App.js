import React from 'react';
import Nav from './components/HeadersFooters/Nav/index.js';
// import View from './components/View/index.js';
import Home from './components/View/Home/index.js';
import About from './components/View/About/index.js';
import Portfolio from './components/View/Portfolio/index.js';
import Contact from './components/View/Contact/index.js';
import Footer from "./components/HeadersFooters/Footer/index.js";
import Clouds1 from './assets/videos/clouds1.mp4';

function App() {
  return (
    <div className="App">
      <Nav />
      <video className="background-video" autoPlay loop muted>
        <source src={Clouds1} type="video/mp4" />
      </video>
      <main>
        <style type='text/css'>
          {`
.card {
    background-color: rgba(0, 0, 0, 0.1);
}
`}

        </style>
        <Home id="home" />
        <About id="about" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}


export default App;