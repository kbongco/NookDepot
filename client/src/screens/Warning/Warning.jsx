import React from 'react';

export default function Warning() {
  return (
    <>
      <div container='warning'>
        <h1 classname='ohno'>WARNING!</h1>
        <h3>YOU ARE ABOUT TO DELETE! ARE YOU SURE? YOU CAN'T RESET THIS ONCE YOU ARE DONE! </h3>
        <button>DELETE</button>
        <button>TAKE ME BACK</button>
      </div>
      <img src="https://i.ibb.co/Sd9sPn8/delete.jpg" />
    </>
  )
}