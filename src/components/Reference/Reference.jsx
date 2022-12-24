import React from 'react';
import { Link } from 'react-router-dom';

export default function Reference({title,reff}) {
  return (
    <div>
        <h4>{title}</h4>

        {
        reff.map((item,index)=>{
            return (
            <Link key={index} to="/">{item}</Link>
            
            )
        })

        }
        


    </div>
  )
}
