import React from 'react';
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function Layout(props) {
  return (
  <>
      <Header />
      <div className='layout-children'>{props.children}</div>
      <Footer />
  </>
  )

}