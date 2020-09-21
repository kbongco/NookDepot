import React from 'react';
import UserTownInfo from '../../components/UserTownInfo/UserTownInfo.jsx'
import UserServices from '../../components/UserServicesInfo/UserServices'
import './UserInfo.css'

export default function UserInfo(props) {
  const { towninfo } = props;
  console.log(props)
  return (
    <>
    <div className='userinfo-container'>
      <UserTownInfo /> 
    </div>

    <div className='user-gigs'>
        <UserServices towninfo={towninfo}/> 
      </div>
      <div className='listings'>
        <p>Follow the Link here to view this user's listings!</p>
    </div>
    </>
  )
}