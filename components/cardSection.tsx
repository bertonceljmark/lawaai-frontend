import React from "react";
import Card from "./card";

const CardSection = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col md:flex-row">
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default CardSection;
