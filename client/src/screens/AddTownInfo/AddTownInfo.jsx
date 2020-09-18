import React from 'react';


export default function AddTownInfo(props) {
  const [formData, setFormData] = useState({
    gamename: '',
    townname: '',
    nativefruit: '',
    hemisphere: '',
    user_id:'',

  })
  const {gamename,townname,nativefruit,hemisphere,user_id} = formData
  const { createSubmit } = props 
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
            createSubmit(formData);
            history.push('/user')

          }}>
          <label>
            InGame Name:
          
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
            Town Name:
          <input 
            className='hemisphere'
            name='townname'
            type='text'
              value={townname}
              onChange={handleChange}
          />
          </label>
          <label>
            Native Fruit
          <input
          className='nativefruit'
          name='nativefruit'
          type='text'
          value={nativefruit}
          onChange={handleChange}
            />
          </label>
          <label>
            Id
            <input
              className='id'
              type='text'
              value={id}
              onChange={handleChange}
            />  
          </label>
          <br />
          <button>Add your info</button>

          
          </form>
      </div>
      </>
  )
  
}