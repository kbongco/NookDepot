import React from 'react';
import './Warning.css'

export default function Warning(props) {
  const { listings, handleDelete } = props
  console.log(props)
  return (
    <>
      <div container='warning'>
        <h1 classname='ohno'>WARNING!</h1>
        <h3>YOU ARE ABOUT TO DELETE! ARE YOU SURE? YOU CAN'T RESET THIS ONCE YOU ARE DONE! </h3>
        <button onClick={() => handleDelete(props.id)}>DELETE</button>
        <button>TAKE ME BACK</button>
      </div>
      <img className='warning'src="https://i.ibb.co/Sd9sPn8/delete.jpg" />
    </>
  )
}