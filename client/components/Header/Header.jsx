import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1 className='title'>NookDepot</h1>
          <ul className='navLinks'>
            <li className='pageLinks'>
              <NavLink exact to='/'>
                Home 
              </NavLink>
            </li>
            <li className='pageLinks'>
              <NavLink exact to='/directory'>
                Directory 
              </NavLink>
            </li>
            <li className='pageLinks'>
              <NavLink exact to='/Tools'>
                Tools
              </NavLink>
            </li>
            <li className='pageLinks'>
              <NavLink exact to='/Services'>
                Services
              </NavLink>
            </li>
          </ul>
          </div>
      </header>
      </>
  )
}