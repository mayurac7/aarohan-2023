import React from "react";
import Event from "./Event";
import Footer from "./Footer";

const Events = () => {
  return (
    <>
      <div className="inner-div-margin bg-background-image bg-contain bg-repeat-y md:bg-cover rounded-sm p-10">
        <div className="flex flex-col space-y-10">
        <div className="inner-div-margin bg-proNite bg-cover md:bg-proNite_desktop md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
          <Event
            title="PRO NITE"
            text={`An evening full of euphoria, the Pronite is back again in the 10th version of MIT WPU Aarohan. It is the conclusion and the crescendo to the fest's three days. It captures the essence and the passion of the fest invested in by the students for the last six months nearing its end. We have had Papon, Ash King, The Local Train and much more grace our stages with their performances.Entry is open to all, but you better hurry as the venue is packed with enthusiastic fans. So buckle up for the last destination on the roller coaster of Aarohan, Pronite.`}
          />
        </div>
        <div className="inner-div-margin bg-comedyNite bg-cover md:bg-comedyNite_desktop md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
          <Event
            title="COMEDY NITE"
            text={`MIT WPU Aarohan is back with Comedy Nite, an event where stand-up comedians have the crowd bawling in laughter. When the fest is at its peak, iconic comedians glamour the stage as they entertain the crowds. Comedians like Sapan Varma, Rahul Dua, Nishant Suri have performed on our stage previously. The event is a once-a-year opportunity for fans to watch live performances of their favourite artists.Join us to enjoy the 10th Edition of MIT Aarohan and get the chance to witness Comedy Nite in its full-fledged glory.`}
          />
        </div>
        <div className="inner-div-margin bg-youtubers bg-cover md:bg-youtubers_desktop md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
          <Event
            title="YOUTUBERS FEST"
            text={`The YouTubers, in particular, enjoyed a major chunk of the limelight, as they propelled their way up the audience's hearts. The 10th edition of MIT Aarohan offers you the chance to interact with and be enthralled by the YouTubers.Creators like Viraj Ghelani, Suhani Shah,  and MC Altaf have already interacted with our audiences in our previous fests.The event breaks the wall between the artist and the viewer turning reel-life moments into experiences.Join us and chill with your friends at MIT Aarohan and experience the fever dream known as YouTuber Fest.`}
          />
        </div>
        <div className="inner-div-margin bg-theatre bg-cover md:bg-theatre_desktop md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
          <Event
            title="THEATRE"
            text={`The fine art of theatre is hard to imitate or replicate as it boasts continuity, with no room for errors, no retakes, and a live audience to witness the spectacle that the performers put forth. Purshotam Karandak Fame 'Tangent' and 'Sahal', Anathema, Bhumika, and Bambai, are some of the acts that the stage of Aarohan has previously hosted. The stage is the home place for talent, skill and critical acclaim. Do come to witness the literary masterpiece known as Theatre FestFest at MIT Aarohan.`}
          />
        </div>
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

export default Events;
