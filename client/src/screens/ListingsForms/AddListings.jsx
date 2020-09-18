import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddListings.css";

export default function AddListings(props) {
  const [formData, setFormData] = useState({
    name: "",
    links: "",
  });

  const { name, links } = formData;
  const { createSubmit } = props;
  const history = useHistory();
  console.log(props);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { [name]: value };
    setFormData((formData) => {
      return { ...formData, ...newData };
    });
  };

  return (
    <>
      <h3 className="listing">Add your listing here</h3>
      <div className="register-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createSubmit(formData);
            history.push('/listings')
          }}
        >
          <label>
            Listing Name:
            <input
              className="listing-name"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Link to your listings
            <input
              className="links"
              name="links"
              type="text"
              value={links}
              onChange={handleChange}
            />
          </label>
          <br />
          <button>Create </button>
        </form>
      </div>
    </>
  );
}
