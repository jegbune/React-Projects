import React, { useState } from 'react'

const initState ={
    fname: 'Bruce',
    lname: 'Wayne'
}
function ObjectUseState() {
    const [person, setPerson] = useState(initState)

    const changeName = () => {
            // person.fname = 'Clark'
            // person.lname = 'Kent'
            // setPerson(person)
            // setPerson(prevState => prevState = {fname:'Clark',lname:'Kent'})

            const newPerson = {...person}
            newPerson.fname = 'clark'
            newPerson.lname = 'Kent'

            setPerson(newPerson)
            
    }

    console.log('ObjectUseState Render')
       
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
