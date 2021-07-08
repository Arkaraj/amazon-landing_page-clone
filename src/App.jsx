import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./custom.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CarouselSlider from "./components/Carousel";
import SimpleCard from "./components/SimpleCard";
import Button from "./components/Button";
import SliderProduct from "./components/SliderProduct";
import MultiImageCard from "./components/MultiImageCard";
import InfoStrip from "./components/InfoStrip";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <CarouselSlider />
        <div className="content__body">
          <InfoStrip />
          <div className="home">
            <div className="home__container">
              <div className="home__row">
                <SimpleCard title={"AmazonBasics"} />
                <SimpleCard title={"AmazonBasics"} />
                <SimpleCard title={"AmazonBasics"} />
                <MultiImageCard title={"Shop by Category"} />
              </div>
            </div>
          </div>
          <SliderProduct title={"Top Beauty & Personal Care products"} />
          <h1>Amazon Landing page clone</h1>
          <hr />
          <Button title={"Sign in to see personalized recommendations"} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
