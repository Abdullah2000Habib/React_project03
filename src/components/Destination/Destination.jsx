import React from 'react';
import SubDestination from './SubDestination';
import style from "./style.module.css";
export default function Destination() {
  return (
    <div className={style.destination}>

        <h1>Popular Destinations</h1>
        <p>Tours give you the opportuniy to see a ot vithin a time frome</p>
        <SubDestination/>


    </div>
  )
}
