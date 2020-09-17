import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  console.log(props)
  const { currentUser } = props;
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
              <NavLink exact to="/directory">
                Directory
              </NavLink>
            </li>
            <li className="page-links">
              <NavLink exact to='/tools'>
                Tools
              </NavLink>
            </li>
            <li className="page-links">
              <NavLink exact to="/services">
                Services
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
            <li className="page-links">
              {currentUser ? 
                <div>logged in</div>:
                <NavLink exact to='/login'>
                  Login</NavLink> | <NavLink exact to='/signup'>Sign Up</NavLink>
              }
            </li>
          </ul>
        </nav>
      </div>

    </header>
  )
}