import React, { useState } from 'react';
import './AddListings.css'

export default function AddListings(props) {
  const [formData, setFormData] = useState({
    name: '',
    links:''
  })

  const { name } = formData
  const { links } = formData
  const { createSubmit } = props;
console.log(props)
  const handleChange = (e) => {
    const { value } = e.target;
    const { value2 } = e.target;
    setFormData({ name: value, links:value2  });
  }

  return (
    <>
      <h3 className='listing'>Add your listing here</h3>
      <div className='register-container'>
    <form onSubmit={(e) => {
      e.preventDefault();
      createSubmit(formData)
    }}>
      <label>
            Listing Name:
      <input
        className='listing-name'
        type='text'
        value={name}
        onChange={handleChange}
        />
          </label>
          <br/>
      <label>
            Link to your listings
      <input
        className='links'
        type='text'
        value={links}
        onChange={handleChange}
        />
      </label><br/>
      <button>Create </button>
        </form>
        </div>
    </>
  )
 }
