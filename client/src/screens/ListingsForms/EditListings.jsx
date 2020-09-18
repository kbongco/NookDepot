import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getOneListings } from '../../services/listings'

export default function EditListings(props) {
  const [formData, setFormData] = useState({
    name: "",
    links:""
  })

  const {name, links } = formData
  const { id } = useParams();
  const { listings, updateSubmit } = props;
  const history = useHistory();

  useEffect(() => {
    const preFilForm = () => {
      const singleListing = listings.find(listing => listing.id === Number(id))
      setFormData({
        name: singleListing.name,
        links: singleListing.links
      })
    }
    if (listings.length) {
      preFilForm();
    }
  }, [listings])

  const handleChange = (e) => {
    const { name, value } = e.target 
    const editData = { [name]: value }
    setFormData((formData) => {
      return {...formData, ...editData}
    })
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      updateSubmit(id, formData)
      history.push('/listings')
    }}>
      <h3>Edit your listing </h3>
      <label><br/>
        Name:<br/>
         <input
          name='name'
          type='text'
          value={name}
          onChange={handleChange}
        />
        <label><br/>
          Link:<br/> 
           <input 
            name='links'
            type='text'
            value={links}
            onChange={handleChange}
          /><br/>
          <button>Edit your listing! </button>
        </label>
      </label>
    </form>
  )
}