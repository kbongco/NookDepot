import React from 'react';
import Layout from '../../layouts/Layout.jsx'
import './Home.css';

export default function Home() {
  return (
    <Layout>
      <div className='items'>
        <h5 className='whatcanIfind'>Here are some things you can find here ranging from DIY materials, to gigs, to 
        plants to tools!
        </h5>
        <div className='info-container'>
        <img className='diy-mats' src="https://i.ibb.co/wMKW8qs/gold.png" alt="gold" border="0"/>
          <img className='plants' src="https://i.ibb.co/Qdm7p0G/peach.png" alt="peach" border="0" />
          <img className='tools' src="https://i.ibb.co/2P14fnx/fishingrod.png" alt="fishingrod" border="0"/>
          <img className='fishing' src="https://i.ibb.co/YjD6b2X/Fishing.jpg" alt="Fishing" border="0" />
        </div>
      </div>
      <div className='popular'>
        <h4 className='demand'>Currently On Demand</h4>
        <div className='on-demand'>
          <img className='sakura' src="https://i.ibb.co/3z7K5x1/cherryblossom.png" alt="cherryblossom" border="0" />
          <img className='rusted' src="https://i.ibb.co/yNH9bW6/blueroses.png" alt="blueroses" border="0" />
          <img className='roses' src="https://i.ibb.co/y4qFd1p/Rusted-Parts.png" />
        </div>
      </div>
      <div className='about-nook'>
      <div className='detailed'>
        <h2 className='about-it'>What is NookDepot?</h2>
        <p>Inspired by a certain website
          where you can buy/sell home-made items as well as a certain website 
          for the animal crossing series. NookDepot focuses more on DIY Materials, DIY Recipes, Tools and plants as well as various gigs like bug-catching, and material gathering. 
        </p>
        </div>
      </div>
    </Layout>
  )
}