import React, { createContext, useEffect, useState } from 'react'
import { FaAsterisk } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import  logo from './logo.svg'

const AuthContext = createContext()

function Login() {
  const [pass, setPass] = useState('password')
  const [data, setData] = useState()
  const [user, setuser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handlePassword = () => {
    setPass(pass==='password' ? 'text' : 'password')
}
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
        // alert(data.email)
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
  if(!user || !password) {
    result = false;
    toast.warning('Please Enter user Name and Password')
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
        <img src={logo} alt='logo' />
        <div>
          <h2>Sign in to your account</h2>
        </div>
        <form onSubmit={ProceedLogin}>
          <div className='form'>
            <div className='label'>
            <label>
              User Name
            </label>
              <input type='text' value= {user} onChange={(e) => setuser(e.target.value)} />
            </div>
            <div className='label'>
            <label>
              Password
            </label>
              <input type={pass} value= {password} onChange={(e) => setPassword(e.target.value)} />
              <button type='button' disabled ={!password} className='pass' onClick={handlePassword}>Show Password</button>
            <p>Forget Password</p>
            </div>
          </div>
        {/* <div className='raido'> */}
          <button type='submit' className='btn log'>Sign in</button>
            {/* <Link to={'/AuthUser'} className='btn new'>New User </Link>   */}
        {/* </div> */}
        </form>
      </div>
      
    </div>
  )
}

export default Login
