import React from "react";
import homeimg from "../../assets/homeimg.jpg";
import Destination from "../../components/Destination/Destination";
import Hero from "../../components/Hero/Hero";

export default function HomePage() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={homeimg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination ."
        url="/"
        btnClass="show"
        btnText="Travel Plane"
      />

      <Destination/>
    </>
  );
}
