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
import AdCard from "./components/AdCard";

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
                <SimpleCard title={"Oculus"} />
                <SimpleCard title={"AmazonBasics"} />
                <AdCard />
              </div>
            </div>
          </div>
          <div className="home">
            <div className="home__container">
              <div className="home__row">
                <SimpleCard title={"AmazonBasics"} />
                <SimpleCard title={"Oculus"} />
                <MultiImageCard title={"Shop by Category"} />
                <SimpleCard title={"AmazonBasics"} />
              </div>
            </div>
          </div>
          <SliderProduct title={"Top Beauty & Personal Care products"} />

          <div className="home">
            <div className="home__container">
              <div className="home__row">
                <MultiImageCard title={"Shop by Category"} />
                <SimpleCard title={"Oculus"} />
                <SimpleCard title={"AmazonBasics"} />
                <MultiImageCard title={"Shop by Category"} />
              </div>
            </div>
          </div>

          <SliderProduct title={"Top Beauty & Personal Care products"} />
          <SliderProduct title={"Top Beauty & Personal Care products"} />
          <SliderProduct title={"Top Beauty & Personal Care products"} />
          <div className="amazon-end">
            <div className="">
              <hr />
            </div>
            <Button title={"Sign in to see personalized recommendations"} />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
