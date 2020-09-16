import React, { useState, useEffect } from 'react';
import './Subscribe.css'

export default function Subscribe() {
  const [subscribingEmail, updateSubscribingEmail] = useState('')
  const handleChange = (event) => {
    updateSubscribingEmail(event.target.value)
  }

  return (
    <div className='stayupdated'>
      <h3>This site is still currently under construction and is a prototype for a bigger project in the future! If you would like to stay up to date put your email here!</h3>
      <input 
        className='email-here'
        type='text'
        placeholder='your email here'
        value={subscribingEmail}
        onChange={handleChange} />
      <button className='subscribe' type='submit'>Subscibe</button>
    </div>
  )


}