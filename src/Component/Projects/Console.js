import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Console() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form Submitted')
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className='Field'>
          <label htmlFor='name' >Name:</label>
          <input 
            id = 'name'
            type='text' 
            placeholder='Name'
            name='name' 
            value={name}  
            onChange={event => {
              setName(event.target.value)
            }} 
          />
        </div>
        <button disabled={!name}type='submit'>Submit</button>
      </fieldset>
    </form>
  )
}

export default Console
