import React from "react";
import Competition from "./Competition";
import Carousel from "react-material-ui-carousel";
import Footer from "./Footer";

const competitions = [
  <div className="inner-div-margin bg-groupDance_mobile bg-cover md:bg-groupDance md:bg-cover max-w-sm m-auto md:max-w-4xl rounded-md shadow-2xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat">
  <Competition
  title="IN SYNC"
  text={`As Jacques d'Ambrose once said, "Dance is your pulse, your heartbeat, your breathing. It's the rhythm of your life. It's the expression in time and movement, in happiness, joy, sadness and envy." Reinvigorate this pulse at the grand stage of the 10th Edition of Aarohan as your team synchronizes their passions and sets the platform on fire at INSYNC, the group dance off. Register soon, a cheering audience awaits your performance!`}
  />
  </div>,
  <div className="inner-div-margin bg-bandWars_mobile bg-cover md:bg-bandWars md:bg-cover max-w-sm m-auto md:max-w-4xl rounded-md shadow-2xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat">
  <Competition
  title="BAND WARS"
  text={`Music is to the soul as words are to the mind. Music gives wings to the mind and flights to the imagination and to reach the heights of euphoria Aarohan The Annual Cultural Fest of MITWPU brings you "Head Bang" An uplifting and upbeat band wars with different tones and pitches with melodies and harmonies. Get ready with your rhythms, blues, bass guitars, and percussion instruments creating a soundtrack to the good times.`}
  />
  </div>,
  <div className="inner-div-margin bg-streetPlay_mobile bg-cover md:bg-streetPlay md:bg-cover max-w-sm m-auto md:max-w-4xl rounded-md shadow-2xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat">
  <Competition
  title="DASTAK"
  text={`Performing a street play needs the presence of mind, enthusiasm and energy level to make a great impact on society. Encouraging this idea of performing street plays, Aarohan the Annual Cultural Fest of MITWPU presents to you "Dastak" a competition for the most popular wind spread form of drama, street plays. The catchy phrases and songs and humor are what Dastak is looking for to make a long-lasting and powerful effect on youth. Ready up your crew and lead the way towards positive change in society.`}
  />
  </div>,
  <div className="inner-div-margin bg-soloDance_mobile bg-cover md:bg-cover md:bg-soloDance max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
  <Competition
  title="INNERFLAME"
  text={`Aarohan -the cultural fest is back with Solo Dance Competition - 'INNERFLAME', 
  the ultimate platform to showcase your talent, passion and creativity.
  Whether you are a classical dancer, a contemporary dancer, a hip-hop dancer, or any other style. We invite you to participate in Innerflame. The competition is judged by a panel of renowned dance experts.      
  So, what are you waiting for ? Register now for Aarohan and join us in the celebration of dance. We look forward to seeing you on stage!`}
  />
  </div>,
  <div className="inner-div-margin bg-soloSinging_mobile bg-cover md:bg-soloSinging md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
  <Competition
      title="HUMMING"
      text={`The joy of singing arouses a feeling of completeness within. It all starts from bathroom singing, to singing in front of relatives to dreaming of being an idol. It is time to move a step forward and let your dreams come true.
      We at Aarohan are waiting for soulful singers like you to participate in our solo singing competition, for which we have judges of the highest caliber to guide you on your musical journey. Top performers who outshine their competition will be rewarded with exciting cash prizes.`}
      />
      </div>,
      <div className="inner-div-margin bg-platform_mobile bg-cover md:bg-platform md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
      <Competition
      title="PLATFORM"
      text={`Become the trendsetter and showcase your inner artist at the Platform (Open Mic) in the 10th edition of Aarohan.
      Stand Up Comedy, Slam Poetry, Story Telling, Shayari, Beat-Boxing,
      Rapping and Mono-Acting are the formats you can utilize to encapsulate your talents. Humour, entertain or act your way to victory, and win exhilarating cash prizes.
      Make haste and start registering, the Open Mic waits for its patron.`}
      />
      </div>,
      <div className="inner-div-margin bg-instrumental_mobile bg-cover md:bg-instrumental md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
      <Competition
      title="EUPHONY"
      text={`Instrumental- a music genre where melody overcomes lyrics as emotions overtake thought. Aarohan the Annual Cultural Fest of MITWPU brings you the essence of this timeless music genre "Instrumental". A harmonious and graceful competition where one can express feelings in tones beyond words. Let your emotions radiate and shine without restricting them to intellect, enriched by your sentiments.`}
      />
      </div>,
      <div className="inner-div-margin bg-artMaestro_mobile bg-cover md:bg-artMaestro md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
      <Competition
      title="ART MAESTRO"
      text={`With never ending imagination what everyone needs is a place where we can showcase our imagination and art being such a creative field, it never fail to amuse us. We know that art is way to deliver your thoughts on the paper which cannot be expressed through words . At Aarohan, we organize “Art maestro” for young talent to participate and showcase their talent. The topics for this artistic competition are “Elemental”, “Environment ” and “Deep sea” . It is a dedicated event for all the young artists out there to participate and win exciting gifts and prizes.`}
      />
      </div>,
      <div className="inner-div-margin bg-fashion_mobile bg-cover md:bg-fashion md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
        <Competition
          title="GLAMOUR NOVA"
          text={`Fashion is an expression of the body, an expression of identity combined with passion, fashion is a set of fascinating ideas and to illustrate these ideas Aarohan The Annual Cultural Fest of MITWPU brings you a vogue of elegant fashion show competition "Glamour Nova". Showcase the style you possess, elevate it with fashion, express it with confidence and ignite the runway with your desire.`}
        />
      </div>,
  <div className="inner-div-margin bg-boxCricket_mobile bg-cover md:bg-boxCricket md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
    <Competition
      title="BOX CRICKET"
      text={`The main emotion of a sports fan lies in the sport which they have playing since their childhood and for us Indians, it is none other than cricket. The craze for cricket is always more than anything on planet for us. 
      So to add a spark to it we organize a box cricket tournament, a new and trending format of cricket which is played on the turf for all the cricket fans. Yes! you read that right on the turf. Don't just read this, visit Aarohan and experience it along with your team and win exciting cash prizes.`}
    />
  </div>,
  <div className="inner-div-margin bg-football_mobile bg-cover md:bg-football md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
    <Competition
      title="BOX FOOTBALL"
      text={`With the steadily rising fan support for football, young supporters and players of this sport have been taking it in the next level. But a major problem is that there are less number of platforms where such tournaments are hosted.
    As you are aware in Aarohan we tend to leave no leaf unturned and to anticipate your expectation we have box football which will be played on turf, so gather your team to participate in this competition and get a chance to win overwhelming cash prizes.`}
    />
  </div>,
  <div className="inner-div-margin bg-eSports_mobile bg-cover md:bg-eSports md:bg-cover max-w-sm m-auto md:max-w-4xl md:m-auto py-4 px-4 md:py-4 bg-no-repeat rounded-md shadow-2xl">
    <Competition
      title="VALORANT"
      text={`"Well, this looks dangerous. Good thing we brought guns." Dangerously thrilling you mean, aye Harbor? Satchel out and jump right into Valorant and raise mayhem with your preffered Agents or go oldschool and decimate your opponents tactically through CS GO in the 10th Edition of Aarohan. Gather your teams, co-ordinate your plays and one tap your way to victory, or just spam Odin to frustrate your opponents. Register now and we'll see you soon at the Spawn!`}
    />
  </div>,
];

const Competitions = () => {
  return (
    <>
      <div className=" bg-background-image bg-cover bg-repeat-y md:bg-cover p-10">
        <div className="md:hidden">
          <Carousel
            autoPlay={false}
          >
            {competitions.map((competition) => {
              return competition;
            })}
          </Carousel>
        </div>
        <div className="hidden md:flex md:flex-col space-y-6">
          {competitions.map((competition) => {
            return competition;
          })}
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

export default Competitions;
