import React, { useState, useEffect } from 'react';
import { useParams, matchPath } from 'react-router-dom';
import { getOneTownInfo } from '../../services/towninfo.js'

export default function UserTownInfo(props) {
  const [townInfo, updateTownInfo] = useState('')

  const match = matchPath('/users/1/towninfos/1', {
    path: '/users/:user_id/towninfos/:id',
    exact: true,
  })

 
  useEffect(() => {
    const fetchTowns = async () => {
      const singleTown = await 
         getOneTownInfo(match.params.user_id,match.params.id)
      updateTownInfo(singleTown)
    }
    fetchTowns();

  }, [])

  return (
    <div container='user-information'>
      <h3>Some User's shop</h3>
      <img src="https://i.ibb.co/MD2LXvm/onomichio.jpg" alt="onomichio" border="0" height='250px' width='250px' />
      <a href='#'>Edit</a>
      <div className='user-towns'>
        {/* <p>InGameName: 'Chibi'</p>
        <p>Town Name: 'Kamurocho'</p>
        <p>Hemisphere: 'Northern'</p>
        <p>Native Fruit:'Apple'</p> */}
        <p>InGameName: {townInfo.gamename}</p>
        <p>Town Name: {townInfo.townname}</p>
        <p>Hemisphere: {townInfo.hemisphere}</p>
        <p>Native Fruit: {townInfo.nativefruit}</p>
        <p>Add | Edit</p>



      </div>
    </div>
  )
}