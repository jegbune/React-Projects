import React, { useState } from 'react'
import Modal1 from './Modal1'

function ModalApp() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }  
  
  const closeModal = () => {
    setShowModal(false)
  }  
  
  return (
    <div>
      <h1>Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal1 show={showModal} onClose= {closeModal}>
        <h2>Modal Title</h2>
        <p>This is a simple modal dialog box in React.</p>
      </Modal1>
    </div>
  )
}

export default ModalApp
