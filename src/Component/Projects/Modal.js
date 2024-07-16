import React, { useState } from 'react'
import './Modal.css'

const Button = ({children,backgroundColor, onClick}) => {
  return <button style={{backgroundColor}} onClick={onClick}>{children}</button>
}

const Alert = ({children}) => {
  
  return(
    <>
    <div className='overlay' >
    <div className='alert'>{children}</div>
    </div>
    </>
  );
};


function Modal() {

  const [showModal, setshowModal] = useState(true)
    
    const closeModal = () => {
      setshowModal(false)
    }
    
    
  return (
    <div>
    <header>Little Lemon Restaurant🍕</header> 
    {(showModal) &&  (<Alert>
      <h4>Delete Account</h4>
      <p>Are you sure you want to proceed? You will miss all your delicious recipes!</p>
      <Button backgroundColor='red' onClick={closeModal}>Delete</Button>
    </Alert>)
    } 
    </div>
  )
}

export default Modal
