import React, { useState } from 'react'

function UseStateObjectArray(props) {
  const {onAdd, tasks} = props
  const [formData, setFormData] = useState({goal:'', by:''})
  // const [tasks, setTasks] = useState([])

  const handleChange = (e)=> {
    // const {name, value} = e.target;
    setFormData(prev=> ({...prev, [e.target.name]: e.target.value}))
    // setFormData(prevState) => ({...prevState, [name]: value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // const result= `My Goal is to ${formData.goal} by ${formData.by}`
    onAdd(formData)
    console.log(tasks)
    // setFormData({goal:'', by: ''});
    // setTasks(prevList => [...prevList, result ])
    // alert(`Tasks: ${tasks.concat(result).join('\n')}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>My Little Lemon Goals</h1>
      <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={handleChange} />
      <input type='text' name='by' placeholder='By' value={formData.by} onChange={handleChange} />
      <button type='submit'>Submit Goal</button>
    
      <ul>
        {tasks.map((task,index) => {
          return (
            <li key={index}>My goal is to {task.goal}, by {task.by}.</li>
          )
        })}
      </ul>
    </form>
  )
}

export default UseStateObjectArray
