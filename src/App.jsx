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
                <MultiImageCard title={"Shop by Category"} />
                <SimpleCard title={"AmazonBasics"} />
                <SimpleCard title={"Computers & Accessories"} />
                <AdCard />
              </div>
            </div>
          </div>
          <div className="home">
            <div className="home__container">
              <div className="home__row">
                <SimpleCard title={"Oculus"} />
                <SimpleCard title={"Get fit at home"} tagline={"Explore now"} />
                <MultiImageCard title={"Gaming accessories"} />
                <SimpleCard title={"Find your ideal TV"} />
              </div>
            </div>
          </div>
          <SliderProduct title={"Top Beauty & Personal Care products"} />
          <SliderProduct title={"Our favorite Toys"} />

          <div className="home">
            <div className="home__container">
              <div className="home__row">
                <MultiImageCard title={"Comfy styles for her"} />
                <SimpleCard title={"Shop Laptops & Tablets"} />
                <SimpleCard title={"Explore home bedding"} />
                <MultiImageCard title={"Gaming merchandise"} />
              </div>
            </div>
          </div>

          <SliderProduct title={"Amazon Top Sellers"} />
          <SliderProduct title={"Best Sellers in Baby"} />
          <SliderProduct title={"Stuffed Animals & Toys under $10"} />
          <SliderProduct title={"Home Décor Under $20"} />
          <SliderProduct title={"Popular Gifts in Baby"} />
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
