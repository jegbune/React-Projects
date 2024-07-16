import React from 'react'

  const Button = ({type,children, ...buttonProps}) => {
    const className = type ==='primary' ? 'primaryButton' : 'secondaryButton'
    return (
      <button className={`Button ${className}`} {...buttonProps} >
        {children}
        </button>
    )
  }

const LoginBtn = ({type, children, ...buttonProps}) => {
  return (
    <Button type='secondary'
    onClick = {()=> {alert('Logging in!')}}
    {...buttonProps}
    >
      {children}
    </Button>
  )
}

const LoginButton = ({type, children, ...buttonProps}) => {
  return (
    <div>
      <header className='Header'>Little Lemon Restaurant 🍕</header>
      <Button type='primary' onClick={()=> {alert('Sign up!')}}>
          Sign up
      </Button>
      <LoginBtn type='primary' onClick={()=> {alert('Sign up!')}}>
          Sign up
      </LoginBtn>
    </div>
  )
}

export default LoginButton
