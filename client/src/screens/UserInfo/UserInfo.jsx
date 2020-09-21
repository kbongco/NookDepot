import React from 'react';
import UserTownInfo from '../../components/UserTownInfo/UserTownInfo.jsx'
import UserServices from '../../components/UserServicesInfo/UserServices'
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
        <p>Follow the Link here to view this user's listings!</p>
    </div>
    </>
  )
}