import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  const { currentUser } = props;
  console.log(props)
  return (
    <header>
      <div className="header-content">
        <h1 className='nookdepot'>NookDepot</h1>
        <nav className='nav'>
          <ul className='navLinks'>
            <li className='page-links'>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className='page-links'>
              <NavLink exact to="/listings">
                Listings
              </NavLink>
            </li>
            <li className="page-links">
              <NavLink exact to='/tools'>
                Tools
              </NavLink>
            </li>
            <li className="page-links">
              <NavLink exact to="/gigs">
                Gigs
              </NavLink>
              <NavLink exact to='/Garden'>
                Garden
              </NavLink>
            </li>
            <li className="page-links">
              <NavLink exact to="/materials">
                DIY Materials
              </NavLink>
            </li>
            <li className="page-links">
              <NavLink exact to='/recipes'>
                DIY Recipes
              </NavLink>
            </li>
            <li className='page-links'>
              <NavLink exact to='/test'>
                Test Screens
              </NavLink>
            </li>
            <li className="page-links">
              {
                currentUser ?
                  <div> <NavLink exact to='/login'>
                  Your Profile</NavLink> | <NavLink exact to='/signup'>Add Listing</NavLink>
                  </div> : <NavLink exact to='/login'>
                    Login</NavLink> | <NavLink exact to='/signup'>Sign Up</NavLink>}
            </li> 
          </ul>
        </nav>
      </div>

    </header>
  )
}