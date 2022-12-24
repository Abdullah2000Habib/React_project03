import React from 'react';
import aboutimg from "../../assets/night.jpg";
import Hero from "../../components/Hero/Hero";
import SuperTrip from '../../components/Trip/SuperTrip';


export default function AboutPage() {
  return (
 <>
      <Hero
        cName="heroMid"
        heroImg={aboutimg}
        title="About"
        btnClass="hide"

      />
  <SuperTrip/>
    </>
  )
}

