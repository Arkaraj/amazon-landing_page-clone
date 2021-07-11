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
import { MultiCarouselList as MultiCarouselList1 } from "./components/MultiCarouselList1";
import { MultiCarouselList as MultiCarouselList2 } from "./components/MultiCarouselList2";
import { MultiCarouselList as MultiCarouselList3 } from "./components/MultiCarouselList3";

function App() {
  const multiCardData1 = {
    title: "Shop by Category",
    items: [
      {
        imgPath: "headset.jpg",
        name: "headset",
      },
      {
        imgPath: "keyboard.jpg",
        name: "Keyboards",
      },
      {
        imgPath: "mouse.jpg",
        name: "Computer mouse",
      },
      {
        imgPath: "game_chair.jpg",
        name: "Chairs",
      },
    ],
  };
  const multiCardData2 = {
    title: "Comfy styles for her",
    items: [
      {
        imgPath: "s1.jpg",
        name: "sweatshirts",
      },
      {
        imgPath: "s2.jpg",
        name: "joggers",
      },
      {
        imgPath: "s3.jpg",
        name: "cardigans",
      },
      {
        imgPath: "s4.jpg",
        name: "easy tees",
      },
    ],
  };

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
                <SimpleCard
                  title={"AmazonBasics"}
                  imgPath={"./Images/amazonbasic.jpg"}
                />
                <MultiImageCard data={multiCardData1} />
                <SimpleCard
                  title={"Computers & Accessories"}
                  imgPath={"./Images/amazonbasic2.jpg"}
                />
                <AdCard />
              </div>
            </div>
          </div>
          <div className="home">
            <div className="home__container">
              <div className="home__row">
                <SimpleCard title={"Oculus"} />
                <SimpleCard
                  title={"Get fit at home"}
                  tagline={"Explore now"}
                  imgPath={"./Images/amazonbasic3.jpg"}
                />
                <MultiImageCard
                  data={multiCardData1}
                  title={"Find your ideal TV"}
                />
                <SimpleCard
                  title={"Find your ideal TV"}
                  imgPath={"./Images/amazonbasic4.jpg"}
                />
              </div>
            </div>
          </div>
          <SliderProduct
            title={"Top Beauty & Personal Care products"}
            datalist={MultiCarouselList1}
          />
          <SliderProduct
            title={"Our favorite Toys"}
            datalist={MultiCarouselList3}
          />

          <div className="home">
            <div className="home__container">
              <div className="home__row">
                <MultiImageCard data={multiCardData2} />
                <SimpleCard
                  title={"Shop Laptops & Tablets"}
                  imgPath={"./Images/laptop.jpg"}
                />
                <SimpleCard
                  title={"Explore home bedding"}
                  imgPath={"./Images/bedding.jpg"}
                />
                <MultiImageCard
                  title={"Gaming merchandise"}
                  data={multiCardData1}
                />
              </div>
            </div>
          </div>

          <SliderProduct
            title={"Amazon Top Sellers"}
            datalist={MultiCarouselList2}
          />
          <SliderProduct
            title={"Best Sellers in Baby"}
            datalist={MultiCarouselList3}
          />
          <SliderProduct
            title={"Stuffed Animals & Toys under $10"}
            datalist={MultiCarouselList3}
          />
          <SliderProduct
            title={"Home Décor Under $20"}
            datalist={MultiCarouselList3}
          />
          <SliderProduct
            title={"Popular Gifts in Baby"}
            datalist={MultiCarouselList3}
          />
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
