import React from 'react';
import { Link } from 'react-router-dom';
import './Listings.css'

export default function Listings(props) {
  const { listings } = props;
  return (
    <>
      <h1 className='current-listings'>Check out the current Listings here!</h1>
      <h4>Want to add your listing? Go <Link to={`/listings/new`}>Here</Link></h4>
      <div className='container'>
        <table className='styled'>
          <thead>
            <tr>
              <th>Shop Name</th>
              <th>Link to shop</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr>
                <td>
                  <p> {listing.name}</p>
                </td>
                <td>
                  <p>{listing.links}</p>
                </td>
                <td><Link to={`/listings/${listing.id}/edit`}>
                  Edit
                   </Link>
                </td>
                <td>
                  <Link to={`/warning/${listing.id}`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}