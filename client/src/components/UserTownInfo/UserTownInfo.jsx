import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserTownInfo(props) {
  const params = useParams();
  return (
    <div container='user-information'>
      <h3>Some User's shop</h3>
      <img src="https://i.ibb.co/MD2LXvm/onomichio.jpg" alt="onomichio" border="0" height='250px' width='250px' />
      <a href='#'>Edit</a>
      <div className='user-towns'>
        <p>InGameName: 'Chibi'</p>
        <p>Town Name: 'Kamurocho'</p>
        <p>Hemisphere: 'Northern'</p>
        <p>Native Fruit:'Apple'</p>
      </div>
    </div>
  )
}