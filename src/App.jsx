import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./custom.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CarouselSlider from "./components/Carousel";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <CarouselSlider />
        <h1>Amazon Landing page clone</h1>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
