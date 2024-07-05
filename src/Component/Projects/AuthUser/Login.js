import React, { createContext, useState } from 'react'
import { FaAsterisk } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const AuthContext = createContext()

function Login() {
  const [data, setData] = useState()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const ProceedLogin = (e) => {


  e.preventDefault() 
  if(validate()){
    // console.log('proceed')
    fetch('https://dummyjson.com/auth/login', {
      method:'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        username: user,
        password: password
      })}
  )
    .then((res) => {return res.json()})
    .then((data) => {

      //comparing users credentials and the input value of user and password
      if(user === data.username || password === data.password){
        setData(data)
        toast.success('Login Sucessful')
        navigate('/dashboard')
        console.log(data)
        alert(data.email)
      }else {
        toast.error('Wrong Login Creditial' )
      }
    })
    .catch((error) => {
      toast.error('Login failed due to :' + error.message)
    })
  }
}


// validating the element is empty (if empty throw an error) if not empty return result true(run)
const validate = () => {
  let result = true;
  if(user === '' || user === null || password === '' || password === null) {
    result = false;
    toast.warning('Please Enter User Name and Password')
  }
  // if(password === '' || password === null) {
  //   result = false;
  //   toast.warning('Please Enter Password')
  // }
  return result
}

  return (
    <div className='box'>
      <div className=' box container'>
        <div>
          <h1>User Registration</h1>
        </div>
        <form onSubmit={ProceedLogin}>
          <div className='form'>
            <div>
            <label>
              User Name<sup><FaAsterisk size='0.3rem' color='#d00' /></sup> 
              <input type='text' value= {user} onChange={(e) => setUser(e.target.value)} />
            </label>
            </div>
            <div>
            <label>
              Password<sup><FaAsterisk size='0.3rem' color='#d00' /></sup> 
              <input type='password' value= {password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            </div>
          </div>
        {/* <div className='raido'> */}
          <button type='submit' className='btn log'>Login</button>
            <Link to={'/AuthUser'} className='btn new'>New User </Link>  
        {/* </div> */}
        </form>
      </div>
      
    </div>
  )
}

export default Login
