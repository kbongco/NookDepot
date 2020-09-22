import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


export default function ForSaleAndWant(props) {
  return (
    <div className='sale-and-want'>
      <div className='looking-for'>
        <h1>These are the items I am looking for</h1>
        <img src='https://acnhcdn.com/latest/MenuIcon/SnowCrystal.png'/>
        <img src='https://acnhcdn.com/latest/MenuIcon/StarpieceGemini.png' />
        <img src='https://acnhcdn.com/latest/MenuIcon/ChristmasOrnamentB.png' />
        <img src='https://acnhcdn.com/latest/MenuIcon/Sakurapetal.png'/>
        
      </div>
      <div className='for-trade'>
        <h1>These are the items I have for trade</h1>
        <img src='https://acnhcdn.com/latest/MenuIcon/BanbooShoot.png' />
        <img src='https://acnhcdn.com/latest/MenuIcon/OreIron.png' />
        <img src='https://acnhcdn.com/latest/MenuIcon/EggGround.png' />
        <img src='https://acnhcdn.com/latest/MenuIcon/OreClay.png'/>
        
      </div>
      </div>
  )
}