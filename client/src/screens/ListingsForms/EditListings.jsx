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
        link: singleListing.links
      })
    }
    if (listings.length) {
      preFilForm();
    }
  }, [listings])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ name: value})
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      updateSubmit(id,formData)
    }}>
      <h3>Edit your listing </h3>
      <label>
        Name:
         <input
          name='name'
          type='text'
          value={name}
          onChange={handleChange}
          />
      </label>
    </form>
  )
}