import React from 'react';
import serviceData from './Data';
import SubService from './SubService';
import style from "./style.module.css";
export default function Service() {
  return (
    <div className={style.serviceContainer}>

      {serviceData.map((item)=>{

        return (< SubService key={item.id} title={item.title} descriptoin={item.description}/>)
      })}



    </div>
  )
}
