import React from 'react';
import serviceimg from "../../assets/1.jpg";
import Hero from "../../components/Hero/Hero";
import Service from '../../components/Service/Service';
export default function ServicePage() {
  return (
 <>
      <Hero
        cName="heroMid"
        heroImg={serviceimg}
        title="Service"
        btnClass="hide"

      />
      <Service/>
    </>
  )
}
