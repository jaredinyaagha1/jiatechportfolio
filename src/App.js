import React from 'react';
import Nav from './components/HeadersFooters/Nav/index.js';
import View from './components/View/index.js';
import Footer from "./components/HeadersFooters/Footer/index.js";
// // import './App.css';
import Clouds1 from './assets/videos/clouds1.mp4';
function App() {

  // const [pages] = useState([
  //   { name: "About" },
  //   { name: "portfolio" },
  //   { name: "contact" },
  //   { name: "resume" }
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Nav />
      <video id="background-video" autoPlay loop muted>
        <source src={Clouds1} type="video/mp4" />
      </video>
      <main>
        <View />
      </main>
      <Footer />
    </div>
  );
}


export default App;