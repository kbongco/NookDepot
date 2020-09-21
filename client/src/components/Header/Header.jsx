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
              </li>
            <li className='page-Links'>
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
            {/* Remove Test link prior to presentation */}
            <li className='page-Links'>
              <Link exact to='/test'>
                Test Screens
              </Link>
            </li>
            <li className="page-Links">
              {
                currentUser ?
                  <div> <Link exact to='/users/:id'>
                    Your Profile</Link> | <Link exact to={`/listings/new`}>Add Listing</Link> | <Link exact to='/user/:user_id/listings'><img src="https://i.ibb.co/RNrKwsN/Stall.png" alt="Stall" border="0" height='30px' width='30px'/></Link> |
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

{/* <img src="https://i.ibb.co/RNrKwsN/Stall.png" alt="Stall" border="0" max-height='25px' max-width='25px'/> */}