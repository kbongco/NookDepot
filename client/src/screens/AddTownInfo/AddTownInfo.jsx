import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import './AddTownInfo.css'


export default function AddTownInfo(props) {
  const [formData, setFormData] = useState({
    gamename: '',
    townname: '',
    nativefruit: '',
    hemisphere: '',

  })
  const {gamename,townname,nativefruit,hemisphere} = formData
  const { createSubmitTown } = props 
  const history = useHistory()
  console.log(props)

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { [name]: value };
    setFormData((formData) => {
      return { ...formData, ...newData };
    });
  };

  return (
    <>
      <h3 className='town-info'>Add your Town Information Here</h3>
      <div className='towninfo-container'>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            createSubmitTown(formData);
            history.push('/')

          }}>
          <label>
            InGame Name:<br/>
          
          <input 
            className='game-name'
            name='gamename'
            type='text'
            value={gamename}
            onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Town Name: <br/>
          <input 
            className='townname'
            name='townname'
            type='text'
            value={townname}
            onChange={handleChange}
          />
          </label>
          <br />
          <label>
            Hemisphere<br/>
          <input
          className='hemisphere'
          name='hemisphere'
          type='text'
          value={hemisphere}
          onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Native Fruit<br/>
          <input
          className='nativefruit'
          name='nativefruit'
          type='text'
          value={nativefruit}
          onChange={handleChange}
            />
          </label>
          <br />
          <button id='add'>Add your info</button>

          
          </form>
      </div>
      </>
  )
  
}