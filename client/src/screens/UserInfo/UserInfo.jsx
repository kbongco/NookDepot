import React from 'react';
import UserTownInfo from '../../components/UserTownInfo/UserTownInfo.jsx'
import UserServices from '../../components/UserServicesInfo/UserServices'
import { Link } from 'react-router-dom'
import './UserInfo.css'

export default function UserInfo(props) {
  const { townInfo } = props;

  return (
    <>
    <div className='userinfo-container'>
        <UserTownInfo townInfo={townInfo}/> 
    </div>

    <div className='user-gigs'>
        <UserServices townInfo={townInfo}/> 
      </div>
      <div className='listings'>
        <p>Follow the Link <Link to='/users/:user_id/listings'>here</Link> to view this user's listings!</p>
    </div>
    </>
  )
}