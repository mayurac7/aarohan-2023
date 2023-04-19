import React from "react";
import Carousel from "react-material-ui-carousel";
import Footer from "./Footer";

// Celebrities Images
import celeb_01Icon from "../assets/celeb_01.jpg";
import celeb_02Icon from "../assets/celeb_02.jpg";
import celeb_03Icon from "../assets/celeb_03.JPG";
import celeb_04Icon from "../assets/celeb_04.JPG";
import celeb_05Icon from "../assets/celeb_05.JPG";
import celeb_06Icon from "../assets/celeb_06.JPG";
import celeb_07Icon from "../assets/celeb_07.JPG";
import celeb_08Icon from "../assets/celeb_08.JPG";
import celeb_09Icon from "../assets/celeb_09.jpg";
import celeb_10Icon from "../assets/celeb_10.jpg";
import celeb_11Icon from "../assets/celeb_11.jpg";

// Competition Images
import comp_01Icon from "../assets/comp_01.jpg";
import comp_02Icon from "../assets/comp_02.JPG";
import comp_03Icon from "../assets/comp_03.JPG";
import comp_04Icon from "../assets/comp_04.JPG";
import comp_05Icon from "../assets/comp_05.JPG";

// Informals Images
import informal_01Icon from "../assets/informal_01.JPG";
import informal_02Icon from "../assets/informal_02.jpg";
import informal_03Icon from "../assets/informal_03.JPG";
import informal_04Icon from "../assets/informal_04.JPG";
import informal_05Icon from "../assets/informal_05.JPG";
import informal_06Icon from "../assets/informal_06.JPG";
import informal_07Icon from "../assets/informal_07.JPG";

// Events Images
import event_01Icon from "../assets/event_01.JPG";
import event_02Icon from "../assets/event_02.JPG";
import event_03Icon from "../assets/event_03.JPG";
import event_04Icon from "../assets/event_04.JPG";
import event_05Icon from "../assets/event_05.JPG";
import event_06Icon from "../assets/event_06.jpg";
import event_07Icon from "../assets/event_07.jpg";

// Celebrities Images Array
const celebImages = [
  {
    name: "celeb01",
    image: celeb_01Icon,
  },
  {
    name: "celeb02",
    image: celeb_02Icon,
  },
  {
    name: "celeb03",
    image: celeb_03Icon,
  },
  {
    name: "celeb04",
    image: celeb_04Icon,
  },
  {
    name: "celeb05",
    image: celeb_05Icon,
  },
  {
    name: "celeb06",
    image: celeb_06Icon,
  },
  {
    name: "celeb07",
    image: celeb_07Icon,
  },
  {
    name: "celeb08",
    image: celeb_08Icon,
  },
  {
    name: "celeb09",
    image: celeb_09Icon,
  },
  {
    name: "celeb10",
    image: celeb_10Icon,
  },
  {
    name: "celeb11",
    image: celeb_11Icon,
  },
];

// Competitions Images Array
const compImages = [
  {
    name: "comp01",
    image: comp_01Icon,
  },
  {
    name: "comp02",
    image: comp_02Icon,
  },
  {
    name: "comp03",
    image: comp_03Icon,
  },
  {
    name: "comp04",
    image: comp_04Icon,
  },
  {
    name: "comp05",
    image: comp_05Icon,
  },
];

// Informals Images Array
const informalsImages = [
  {
    name: "informal01",
    image: informal_01Icon,
  },
  {
    name: "informal02",
    image: informal_02Icon,
  },
  {
    name: "informal03",
    image: informal_03Icon,
  },
  {
    name: "informal04",
    image: informal_04Icon,
  },
  {
    name: "informal05",
    image: informal_05Icon,
  },
  {
    name: "informal06",
    image: informal_06Icon,
  },
  {
    name: "informal07",
    image: informal_07Icon,
  },
];

// Events Images Array
const eventsImages = [
  {
    name: "event01",
    image: event_01Icon,
  },
  {
    name: "event02",
    image: event_02Icon,
  },
  {
    name: "event03",
    image: event_03Icon,
  },
  {
    name: "event04",
    image: event_04Icon,
  },
  {
    name: "event05",
    image: event_05Icon,
  },
  {
    name: "event06",
    image: event_06Icon,
  },
  {
    name: "event07",
    image: event_07Icon,
  },
];

const Photos = () => {
  return (
    <>
      <div className="bg-background-image bg-contain bg-repeat-y md:bg-cover p-10">
        <div className="bg-amber-50 bg-opacity-75g-amber-50 bg-opacity-75 max-w-xs m-auto md:max-w-4xl md:m-auto px-10 py-5 shadow-2xl rounded-md mb-5 md:mb-5">
          <h2 className="text-center text-xl text-purple-900 font-bold mb-5">
            CELEBRITIES
          </h2>
          <Carousel
            navButtonsAlwaysVisible={true}

          >
            {celebImages.map((celebImage) => {
              return (
                <>
                  <div key={celebImage.name}>
                    <img className="
                    md:w-max md:h-photoCustom md:m-auto rounded-md" src={celebImage.image} alt={celebImage.name} />
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
        <div className="bg-amber-50 bg-opacity-75 max-w-xs m-auto md:max-w-4xl md:m-auto px-10 py-5 shadow-2xl rounded-md mb-5 md:mb-5">
          <h2 className="text-center text-xl text-purple-900 font-bold mb-5">
            COMPETITIONS
          </h2>
          <Carousel
            navButtonsAlwaysVisible={true}
          >
            {compImages.map((compImage) => {
              return (
                <>
                  <div key={compImage.name}>
                    <img className="md:w-max md:h-photoCustom md:m-auto rounded-md" src={compImage.image} alt={compImage.name} />
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
        <div className="bg-amber-50 bg-opacity-75 max-w-xs m-auto md:max-w-4xl md:m-auto px-10 py-5 shadow-2xl rounded-md mb-5 md:mb-5">
          <h2 className="text-center text-xl text-purple-900 font-bold mb-5">
            INFORMALS
          </h2>
          <Carousel
            navButtonsAlwaysVisible={true}
          >
            {informalsImages.map((informalsImage) => {
              return (
                <>
                  <div key={informalsImage.name}>
                    <img className="md:w-max md:h-photoCustom md:m-auto rounded-md" src={informalsImage.image} alt={informalsImage.name} />
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
        <div className="bg-amber-50 bg-opacity-75 max-w-xs m-auto md:max-w-4xl md:m-auto px-10 py-5 shadow-2xl rounded-md mb-5 md:mb-5">
          <h2 className="text-center text-xl text-purple-900 font-bold mb-5">
            EVENTS
          </h2>
          <Carousel
            navButtonsAlwaysVisible={true}
          >
            {eventsImages.map((eventsImage) => {
              return (
                <>
                  <div key={eventsImage.name}>
                    <img className="md:w-max md:h-photoCustom md:m-auto rounded-md" src={eventsImage.image} alt={eventsImage.name} />
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
        <div className="hidden md:block md:mt-10">
          <Footer />
        </div>
      </div>
      <div className="md:hidden">
      <Footer />
      </div>
    </>
  );
};

export default Photos;