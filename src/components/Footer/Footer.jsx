import React from 'react';
import Icon from '../Icon/Icon';
import Reference from '../Reference/Reference';
import { iconData, referenceData } from './Data';
import style from "./style.module.css";
export default function Footer() {
  return (
    <>

    <div className={style.footer}>
        <div className={style.top}>

        <div>

        <h1>Tippy</h1>
        <p>Choose your favourite destination</p>
        
        </div>

        <div>

        {iconData.map((item)=>{
          return <Icon  key={item.id} iconName={item.iconName}></Icon>
        })}

        
        </div>

        </div>

        <div className={style.bottom}>

          {referenceData.map((item)=>{
            return (<Reference key={item.id} title={item.title} reff={item.reff}></Reference>)
          })}



          
        </div>




    </div>
    
    
    </>
  )
}
