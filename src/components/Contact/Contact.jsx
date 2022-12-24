import React from 'react';
import style from "./style.module.css";
export default function Contact() {
  return (
    <div className={style.formContainer}>
    
    <h1>Send Message To Us !</h1>
    <form>
        <input type="name"placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Subject'/>
        <textarea placeholder='Message' rows={4}/>
        <button type='submit' >Send Message</button>
    </form>
    
    
    </div>
  )
}
