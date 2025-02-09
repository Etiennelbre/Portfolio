import React from 'react'
import {useState} from "react";
import "./Contact.css"

const Contact = () => {

      const onSubmit = async (event) => {
        event.preventDefault();
        const info = new FormData(event.target);
        info.append("access_key", "7cbd82df-f59f-4114-b5a7-ae746e775241");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: info
        });
    
        const data = await response.json();
    
        if (data.success) {
            console.log("Succes", data);
            event.target.reset();
        } else {
          console.log("Error", data);
        }
      };

  return (
    <div className='contact'>
        <div className='contact-title'>
            <h1>Contact me</h1>
        </div>
        <div className='contact-section'>
            <form onSubmit={onSubmit}>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name' required/>
                <label htmlFor=''>Your Email</label>
                <input type='text' placeholder='Enter your email' name='email' required/>
                <label htmlFor=''>Write your message here</label>
                <textarea name='message' rows="8" placeholder='Enter your message' required/>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact