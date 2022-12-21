import React from 'react';
import aboutimg from "../../assets/night.jpg";
import Hero from "../../components/Hero/Hero";


export default function AboutPage() {
  return (
 <>
      <Hero
        cName="heroMid"
        heroImg={aboutimg}
        title="About"
        btnClass="hide"

      />
    </>
  )
}

