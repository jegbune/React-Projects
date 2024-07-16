import React, { useState } from 'react'

function UseEffect() {
  const [petName, setPetName] = useState('Fluffy')

  function nameLooper() {
    if (petName ==='Fluffy') {
      setPetName('Rexy')
    }else if (petName ==='Rexy') {
      setPetName('Gizmo')
    }else if (petName ==='Gizmo') {
      setPetName('Fluffy')
    }
  }
  return (
    <div>
      <h1>I'm thinking to name my pet {petName}</h1>
      <button onClick={nameLooper}>Pick a new name </button>
    </div>
  )
}

export default UseEffect
