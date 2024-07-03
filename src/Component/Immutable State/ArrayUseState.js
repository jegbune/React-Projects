import React, { useState } from 'react'

const initState = ['Bruce', 'Wayne']

const ArrayUseState = () => {
const [persons, setPersons] = useState(initState)
   
const handleClick = () => {
    // setPerson(prevState => [prevState[0] ='Clark', prevState[1] = 'Kent'])
   
   persons.push('Clark')
   persons.push('Kent')
   setPersons(persons)
    const newPerson = [...persons]
    newPerson.push('Clark')
    newPerson.push('Kent')
    setPersons(newPerson)
}

console.log('ArrayUseState Render')
    return (
        <div>
        <button onClick={handleClick}>Click</button>
                {
                persons.map(person => 
                <div key={person}>{person}</div>
                )}
            </div>
    )
}

export default ArrayUseState
