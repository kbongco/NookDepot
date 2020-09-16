import React from 'react';
import Layout from '../../layouts/Layout.jsx'
import './Home.css';

export default function Home() {
  return (
    <Layout>
      <div className='items'>
        <h5>Here are some things you can find here ranging from DIY materials, to gigs, to 
        plants to tools!
        </h5>
        <div className='info-container'>
        <img className='diy-mats' src="https://i.ibb.co/wMKW8qs/gold.png" alt="gold" border="0"/>
          <img className='plants' src="https://i.ibb.co/Qdm7p0G/peach.png" alt="peach" border="0" />
          <img className='tools' src="https://i.ibb.co/2P14fnx/fishingrod.png" alt="fishingrod" border="0"/>
          <img className='fishing' src="https://i.ibb.co/YjD6b2X/Fishing.jpg" alt="Fishing" border="0" />
        </div>
      </div>
      <div className=
    </Layout>
  )
}