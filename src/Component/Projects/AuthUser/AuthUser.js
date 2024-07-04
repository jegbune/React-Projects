import React, { useState } from 'react'
import { FaAsterisk } from 'react-icons/fa'
import './AuthUserStyle.css'

function AuthUser() {
  const [fullName, setFullName] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')


const handleChange = (e) => {
  setFullName(e.target.value)
  setUser(e.target.value)
  setEmail(e.target.value)
  setPhone(e.target.value)
  setAddress(e.target.value)
  setPassword(e.target.value)
  setCountry(e.target.value)
}
  return (
    <div className='box'>
      <div className=' box container'>
        <div>
          <h1>User Registration</h1>
        </div>
        <form>
          <div className='form'>
          <label>Full Name <sup><FaAsterisk size='0.5rem' color='#00f'/></sup>
          <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)}/>
          </label>
          <label>User Name <sup><FaAsterisk size='0.5rem' color='#00f'/></sup>
          <input type='text' value={user} onChange={(e) => setUser(e.target.value)}/>
          </label>
          <label>Email <sup><FaAsterisk size='0.5rem' color='#00f'/></sup>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>Password <sup><FaAsterisk size='0.5rem' color='#00f'/></sup>
          <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <label>Phone <sup><FaAsterisk size='0.5rem' color='#00f'/></sup>
          <input type='number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </label>
          <label>Country <sup><FaAsterisk size='0.5rem' color='#00f'/></sup>
          <input type='text' value={country} onChange={(e) => setCountry(e.target.value)}/>
          </label>
          </div>
          <label>Address <sup><FaAsterisk size='0.5rem' color='#00f'/></sup>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter your Address'/>
          </label>

          <label>
            Gender
              <input type="radio" id="gender-male" name="gender" value="Male" />
              <span>Male</span>
          </label>
          <label>
              <input type="radio" id="gender-female" name="gender" value="Female" />
              <span>Female</span>
          </label>

        </form>
        <div>
          <button className='btn'>Register</button>
          <button className='btn close'>Close</button>
        </div>
      </div>
      
    </div>
  )
}

export default AuthUser
