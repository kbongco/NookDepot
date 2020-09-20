import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search.jsx'
import './Header.css';

export default function Header(props) {
  const { currentUser } = props;
  console.log(props)
  return (
    <header>
      <div className="header-content">
        <h1 className='nookdepot'>NookDepot</h1>
        <div className='search-container'>
          <Search />
          </div>
        <nav className='nav'>
          <ul className='navLinks'>
            <li className='page-Links'>
              <Link exact to="/">
                Home
              </Link>
            </li>
            <li className='page-Links'>
              <Link exact to="/listings">
                Listings
              </Link>
            </li>
            <li className="page-Links">
              <Link exact to='/tools'>
                Tools
              </Link>
            </li>
            <li className="page-Links">
              <Link exact to="/gigs">
                Gigs
              </Link>
              <Link exact to='/Garden'>
                Garden
              </Link>
            </li>
            <li className="page-Links">
              <Link exact to="/materials">
                DIY Materials
              </Link>
            </li>
            <li className="page-Links">
              <Link exact to='/recipes'>
                DIY Recipes
              </Link>
            </li>
            <li className='page-Links'>
              <Link exact to='/test'>
                Test Screens
              </Link>
            </li>
            <li className="page-Links">
              {
                currentUser ?
                  <div> <Link exact to='/users'>
                    Your Profile</Link> | <Link exact to={`/listings/new`}>Add Listing</Link> | 
                    <button onClick={props.handleLogout}>Logout</button>
                  </div> : <div><Link exact to='/login'>
                    Login</Link>  <Link exact to='/signup'>Sign Up</Link></div>}
            </li> 
          </ul>
        </nav>
      </div>

    </header>
  )
}