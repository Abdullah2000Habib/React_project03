import React, { useState } from 'react';
import { navbarData } from './Data';

import style from "./style.module.css";

export default function Navbar() {



    const [clicked,setClicked] = useState("false");

    const handleClick = ()=>{
        setClicked((prevState)=> {
            return !prevState
        }
         )

    }



  return (
    <>

    <nav className= {style.navbarItems}>
        
        <h1 className={style.navbarLogo}>Trippy</h1>

        <div className={style.menuIcons}>

        <i className={clicked?"fas fa-times":"fas fa-bars"} onClick={handleClick}></i>




        </div>



        <ul className={clicked ?` ${style.navMenu } ${style.navMenuActive}` :style.navMenu } >

            {navbarData.map((item)=>{

                return (

            <li key={item.id}>

                <a  className={item.cName === "navLinks"? style.navLinks:style.navLinksMobile} href={item.url}>
                <i className={item.icon}></i>
                    {item.title}
                    
                </a>


            </li>

                )
            })}

            

            <button>Sign Up</button>

        </ul>





    </nav>


    
    
    </>
  )
}
