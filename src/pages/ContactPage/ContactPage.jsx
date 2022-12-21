import React from 'react';
import contactimg from "../../assets/2.jpg";
import Hero from "../../components/Hero/Hero";

export default function ContactPage() {
  return ( 
    <>
      <Hero
        cName="heroMid"
        heroImg={contactimg}
        title="Contact"
        btnClass="hide"

      />
    </>
  )
}
