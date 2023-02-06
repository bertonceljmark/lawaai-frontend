import React from "react";
import Card from "./card";

const CardSection = () => {
  return (
    <div className="">
      <h2 className="text-4xl w-full text-center mb-5 text-white">
        What drives us
      </h2>
      <div className="w-full flex justify-center items-center flex-col lg:flex-row">
        <Card
          label="The People"
          info="Everything we do comes back to people. People are what makes us tick, people are what makes what we do worth it."
          imgPath="media/people-icon.png"
        />
        <Card
          label="The Music"
          info="We founded Lawaai group, because we wanted to make sure that best quality music gets delivered to techno fans on local level."
          imgPath="media/music-icon.png"
        ></Card>
        <Card
          label="The Passion"
          info="What ties everything together is our passion. Our passion towards our guests and towards our music is what makes unique and makes as what we are."
          imgPath="media/passion-icon.png"
        ></Card>
      </div>
    </div>
  );
};

export default CardSection;
