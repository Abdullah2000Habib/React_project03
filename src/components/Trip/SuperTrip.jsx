import React from 'react';
import tripData from './Data';
import Trip from "./Trip";
import style from "./style.module.css";
export default function SuperTrip() {
  return (
    <div className={style.trip}>

        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Map</p>

        <div className={style.tripCard}>

           {tripData.map((item)=>{

            return ( 
            <Trip key={item.id} img={item.img} titel={item.title} description={item.description}/>
            )
           })}


        </div>

    </div>
  )
}
