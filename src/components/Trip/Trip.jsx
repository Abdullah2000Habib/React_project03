import React from 'react';
import style from "./style.module.css";
export default function Trip({img,title,description}) {
  return (
    <>

    <div className={style.tCard}>

        <div className={style.tImage}>
            <img alt='img' src={img}/>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
    
    
    </>
  )
}
