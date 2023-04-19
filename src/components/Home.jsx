import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";
import image4 from "../assets/Image4.png";
import image5 from "../assets/Image5.png";
import image6 from "../assets/Image6.png";
import image7 from "../assets/Image7.png";

import aarohanLogo from "../assets/logo_aarohan.png";

import Desktop_image1 from "../assets/Desktop_image1.png";
import Desktop_image2 from "../assets/Desktop_image2.png";
import Desktop_image3 from "../assets/Desktop_image3.png";
import Desktop_image4 from "../assets/Desktop_image4.png";
import Desktop_image5 from "../assets/Desktop_image5.png";
import Desktop_image6 from "../assets/Desktop_image6.png";
import Desktop_image7 from "../assets/Desktop_image7.png";

import colleges from "../assets/colleges.png";
import footfall from "../assets/footfall.png";
import participants from "../assets/participants.png";
import prizes from "../assets/prizes.png";
import reach from "../assets/reach.png";

import lgbtqIcon from "../assets/LGBTQ.png";
import plantationIcon from "../assets/TREE PLANTATION.png";
import runnerIcon from "../assets/MARATHON.png";
import bloodDonationIcon from "../assets/BLOOD DONATION.png";

import sc_01 from "../assets/sc_01.jpg";
import sc_02 from "../assets/sc_02.jpg";
import sc_03 from "../assets/sc_03.jpeg";
import sc_04 from "../assets/sc_04.png";

import Footer from "./Footer";
import SocialCause from "./SocialCause";

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
import aarohan_ilu from "../assets/aarohan_ilu.png"

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

const isMobile = window.innerWidth <= 768;

const stats = [
  {
    name: "stat1",
    image: prizes,
  },
  {
    name: "stat2",
    image: reach,
  },
  {
    name: "stat3",
    image: colleges,
  },
  {
    name: "stat5",
    image: footfall,
  },
  {
    name: "stat4",
    image: participants,
  },
];

const socialCauses = [
  {
    name: "socialCause1",
    icon: lgbtqIcon,
    image: sc_02,
    title: "LGBTQ + SOCIAL AWARENESS",
    color: "purple-500",
    text: "Gender identity belongs to the person who lives with it. Every human born is to be compassionate and accepting towards each other, not criticizing and holding them down and with this vision, a social cause event was hosted for the LGBTQ community in the 2019 edition of Aarohan The Cultural Fest of MITWPU. Aarohan's LGBTQ event was organized to spread awareness against homophobia and ensure that we don't disrupt an individual's peace of mind if they find their true identity.",
  },
  {
    name: "socialCause2",
    icon: bloodDonationIcon,
    image: sc_01,
    title: "BLOOD DONATION",
    color: "bg-amber-400",
    text: "Donating is the ultimate sign of solidarity. Sharing life through blood donation is what motivated Aarohan to conduct its other social cause event. The blood donation camp was organized by Aarohan to spread the word about the importance of blood donation. The blood donation camp was conducted on the campus of MIT World Peace University. A great number of students actively participated in this camp and gained the proud tag of 'Blood Donor'. Blood donation is a noble act of generosity and Aarohan encourages today's youth to step forward and contribute to saving someone's life.",
  },
  {
    name: "socialCause3",
    icon: runnerIcon,
    image: sc_03,
    title: "RUN FOR A CAUSE",
    color: "bg-purple-500",
    text: "Get fit and make your running more meaningful by raising awareness and funds to support a worthwhile cause.  Every year, Aarohan the Cultural fest of MIT World Peace University organizes a marathon, Run For A Cause- Education for the underprivileged. Aarohan's social event, Run for a Cause helps the non-profitable organization- Jazz Hands to help raise awareness and funds for the education of underprivileged children to provide them with equal access to education. Being a youth fest, a key part of Aarohan's vision is to support national social causes, take the initiatives to make a difference, and bring positive change in society.",
  },
  {
    name: "socialCause4",
    icon: plantationIcon,
    image: sc_04,
    title: "TREE PLANTATION",
    color: "bg-amber-400",
    text: "Each one, plant one. Tree plantation is a necessity and an urgent need of an hour and with this vision, a tree plantation campaign-Plant the future was organized in the 2019 edition of Aarohan. With a positive outlook, the enthusiastic team of Aarohan planted 220 saplings of herbal plants in Wadachi Wadi and successfully conducted the campaign. We feel honored and privileged as we took an initiative to preserve our mother nature and again strived to contribute to society.",
  },
];

const Home = () => {
  const [socialCauseTitle, setSocialCauseTitle] = useState("");
  const [socialCauseText, setSocialCauseText] = useState("");
  const [socialCauseImage, setSocialCauseImage] = useState(null);
  const [socialCauseDisplay, setSocialCauseDisplay] = useState(false);

  const DisplaySocialCause = (image, title, text) => {
    setSocialCauseImage(image);
    setSocialCauseTitle(title);
    setSocialCauseText(text);

    setSocialCauseDisplay(true);
  }

  return (
    <>
    {socialCauseDisplay ? (
      <SocialCause
      image={socialCauseImage}
      title={socialCauseTitle}
      text={socialCauseText}
      setSocialCauseDisplay={setSocialCauseDisplay}
    />
    ) : (
      <>
      <div className="bg-background-image bg-contain bg-repeat-y md:bg-cover p-10 md:p-16 rounded-sm shadow-lg">
      <section class="hero container max-w-screen-lg mx-auto text-center pb-10 desktop-only">
            <div class="transition ease-in-out hover:scale-x-110 hover:scale-y-110 duration-500">
            <img src={aarohan_ilu} alt="screenshot" width="1000" height="550" />
          </div>
        </section>  
      <div className="bg-amber-50 bg-opacity-75 m-auto md:w-custom md:h-custom md:m-auto md:p-20 p-4 text-ellipsis overflow-y-auto shadow-2xl rounded-md">
          <div className="hidden md:flex justify-evenly">
            <div>
              <img className="w-28" src={aarohanLogo} alt="aarohanLogo" />
            </div>
            <div>
              <h2 className="font-bold text-center md:mt-5 text-xl md:text-xl">
                ABOUT US
              </h2>
              <p className="max-w-2xl font-normal text-left text-xs md:text-sm md:mt-5">
                Everything has its starting point, and its own story, and just
                like that the annual cultural fest of MIT World Peace
                University, Aarohan, has its own beginning and a unique story.
                Aarohan had its outset in the year 2014, founded by a group of
                passionate and spirited individuals at MIT College of
                Engineering. By the students, for the students is what Aarohan
                believes in and that's what makes it exceptional. We feel
                honored and privileged to host magnificent events such as
                Pronite, Comedy Nite, Theatre fest, and Youtuber fest along with
                various Cultural competitions for the young artists to provide
                them with a platform that is cultured, artistically inspired,
                and graceful. Throughout its legacy of 10 years, Aarohan has
                strived to set a new standard every year. Aarohan is a moment to
                live in, a time to remember, and a place to thrive in.
              </p>
            </div>
          </div>
          <h2 className="md:hidden font-bold text-center md:mt-5 text-xl md:text-xl">
            ABOUT US
          </h2>
          <p className="md:hidden font-normal text-center text-xs md:text-sm md:mt-5">
            Everything has its starting point, and its own story, and just like
            that the annual cultural fest of MIT World Peace University,
            Aarohan, has its own beginning and a unique story. Aarohan had its
            outset in the year 2014, founded by a group of passionate and
            spirited individuals at MIT College of Engineering. By the students,
            for the students is what Aarohan believes in and that's what makes
            it exceptional. We feel honored and privileged to host magnificent
            events such as Pronite, Comedy Nite, Theatre fest, and Youtuber fest
            along with various Cultural competitions for the young artists to
            provide them with a platform that is cultured, artistically
            inspired, and graceful. Throughout its legacy of 10 years, Aarohan
            has strived to set a new standard every year. Aarohan is a moment to
            live in, a time to remember, and a place to thrive in.
          </p>
        </div>
        <div className="mt-7 md:bg-amber-50 md:bg-opacity-75 md:mt-24 p-6 md:w-custom md:m-auto md:shadow-2xl md:rounded-md statistics">
          <h2 className="font-bold text-center md:text-center text-xl md:text-xl md:mb-2">
            STATISTICS
          </h2>
          <Carousel className="md:hidden">
            {stats.map((stat) => {
              return (
                <>
                  <div key={stat.name} className="font-bold w-32 m-auto mt-4">
                    <img src={stat.image} alt="statImage" />
                  </div>
                </>
              );
            })}
          </Carousel>
          <div className="hidden md:flex md:space-x-10 md:max-w-full md:justify-evenly md:m-auto">
            {stats.map((stat) => {
              return (
                <>
                  <div key={stat.name} className="font-bold w-32 mt-4">
                    <img src={stat.image} alt="statImage" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="mt-10 md:mt-24 bg-amber-50 bg-opacity-75 h-72 text-ellipsis overflow-y-auto md:overflow-hidden m-auto max-w-7xl md:w-custom md:h-custom md:m-auto md:p-20 p-4 shadow-2xl rounded-md">
          <h2 className="font-bold text-center md:mt-5 text-xl md:text-xl">
            VISION AND MISSION
          </h2>
          <p className="font-normal text-left text-xs md:text-sm md:mt-5">
            The grandest fest of Pune, MIT WPU Aarohan marks a decade of culture
            and tradition with its most monumental rendition yet. Boasting
            multiple competitions and events with esteemed guests of honor as
            well as judges, Aarohan stays true to its name and raises the bar
            year after year. The youthful and enthusiastic crowd sets an
            scintillating atmosphere that encapsulates the true essence of
            college life. The fest is by the students, for the students as each
            and every aspect of the event from the financing, management,
            designing, and decoration is handled by the students themselves.
            This promotes holistic personality development of the students while
            inculcating productivity, time management, decision making and
            discipline in them. Meanwhile, the entire fest is a non profitable
            event, as all the funds are utilised to facilitate the participants
            and the audience with no intent of financial gain. With events like
            Run For A Cause (Marathon), MIT WPU Aarohan gives back to the
            society by utilising all of its proceedings to charity, in
            sponsoring the education of the underprivileged children. Blood
            Donation and Tree Plantation drives are some of the camps organised
            to spread awareness about social issues, widening the net positive
            social footprint of Aarohan. To an invigorating and vibrant fest, we
            cordially invite you
          </p>
        </div>
        <div className="mt-16 md:mt-24 p-6 md:bg-amber-50 md:bg-opacity-75 md:w-custom md:m-auto md:shadow-2xl md:rounded-md socialCauses">
          <h2 className="font-bold text-center md:text-center text-xl md:text-xl md:mb-2">
            SOCIAL CAUSE
          </h2>
          <Carousel className="md:hidden">
            {socialCauses.map((socialCause) => {
              return (
                <>
                  <div
                    className="font-bold w-32 m-auto mt-4 hover:cursor-pointer"
                    onClick={() =>
                      DisplaySocialCause(
                        socialCause.image,
                        socialCause.title,
                        socialCause.text
                      )
                    }
                  >
                    <img
                      className="w-48 m-auto mt-3"
                      src={socialCause.icon}
                      alt="socialCauseIcon"
                    />
                  </div>
                </>
              );
            })}
          </Carousel>
          <div id="socialCauses" className="hidden md:flex">
            {socialCauses.map((socialCause) => {
              return (
                <>
                  <div
                    className="transition ease-in-out delay-150 font-bold w-32 m-auto mt-4 hover:cursor-pointer hover:scale-110 duration-500"
                    onClick={() =>
                      DisplaySocialCause(
                        socialCause.image,
                        socialCause.title,
                        socialCause.text
                      )
                    }
                  >
                    <img
                      className="w-48 m-auto mt-3 ml-3"
                      src={socialCause.icon}
                      alt="socialCauseIcon"
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-center md:mt-1 text-xl md:text-xl">
            
          </h2>
          {isMobile ? (
            /* render mobile-specific content */
            <div className="bg-amber-50 bg-opacity-75g-amber-50 bg-opacity-75 max-w-xs m-auto md:max-w-4xl md:m-auto px-10 py-5 shadow-2xl rounded-md mb-5 md:mb-5">
          <h2 className="text-center text-xl text-purple-900 font-bold mb-5">
          GLIMPSE OF THE FEST
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
          ) : (
            /* render desktop-specific content */
            <div className="mt-16 md:mt-24 bg-amber-50 bg-opacity-75 m-auto mb-5 max-w-7xl md:w-custom md:m-auto md:p-4 p-4 shadow-2xl rounded-md">
          <h2 className="font-bold text-center md:mt-1 text-xl md:text-xl">
            GLIMPSE OF THE FEST
          </h2>
          <div className="md:hidden max-w-xs m-auto p-8">
            <div className="flex">
              <img src={image7} alt="image7" />
              <div className="flex flex-col ml-4">
                <img src={image5} alt="image5" />
                <img className="mt-3" src={image2} alt="image2" />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col mt-2">
                <img src={image3} alt="image3" />
                <img className="mt-3" src={image4} alt="image4" />
              </div>
              <img className="ml-4 mt-2" src={image6} alt="image6" />
            </div>
          </div>
          <div className="hidden md:block max-w-6xl m-auto p-8">
            <div className="flex space-x-4">
              <img src={Desktop_image7} alt="dImage7" />
              <div className="flex flex-col space-y-5">
                <img src={Desktop_image5} alt="dImage5" />
                <div className="flex space-x-2">
                  <img src={Desktop_image1} alt="dImage1" />
                  <img src={Desktop_image4} alt="dImage4" />
                </div>
              </div>
              <div className="flex flex-col grow space-y-7 space-x-2">
                <img src={Desktop_image2} alt="dImage2" />
                <div className="flex space-x-2">
                  <img src={Desktop_image3} alt="dImage3" />
                  <img src={Desktop_image6} alt="dImage6" />
                </div>
              </div>
            </div>
          </div>
        </div>
            
          )}
          
        </div>
        <div className="hidden md:block md:mt-10">
          <Footer />
        </div>
      </div>
      <div className="md:hidden">
        <Footer />
      </div>
      </>
    )}
    </>
  );
};

export default Home;
