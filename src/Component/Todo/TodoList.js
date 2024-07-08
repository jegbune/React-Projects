import React, { useEffect, useRef, useState } from 'react'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import './TodoListStyle.css'

function TodoList() {
  const [toDo, setToDo] = useState('')
  const [toDoLists, setToDoLists] = useState([])
  const inputRef = useRef(null);

  const handleChange = (e) =>  setToDo(e.target.value)
  
  useEffect(() => {
    inputRef.current.focus();
  }, [])
  
  const handleAddTodo = (e) => {
    e.preventDefault()
    setToDoLists(prevList => [...prevList, toDo] );
    setToDo('')
  }


const handleDel = (index) => {
  setToDoLists(prevList => [
    ...prevList.slice(0, index),
    ...prevList.slice(index + 1)
  ] )
  // prevList.filter((_,i) => i !==index
}

const handleEdit = (index) => {
  const newToDo = prompt('Edit the to-do item:', toDoLists[index])
  if(newToDo !== null && newToDo.trim()) {
    setToDoLists(prevList => prevList.map((item,i) => i ===index ? newToDo : item))
  }
}

console.log(toDoLists)

  return (
    <div className='container'>
    <form onSubmit={handleAddTodo}className='form'>
      <input type='text' className='value' value={toDo} ref={inputRef} onChange={handleChange} />
      <button type='submit' className='submit icon'><FaPlus size='2rem' /></button>
    </form>
    {toDoLists.map((toDoList, index) => {
      return(
      <div key={index} className='todo'>
        <div>
        <h1>{index + 1}. {toDoList}</h1>
        </div>
          <div>
            <button className='icon b' onClick={() => handleEdit(index)}><FaEdit size='1.5rem' /></button>
            <button className='icon b' onClick={() => handleDel(index)}><FaTrash size='1.5rem' /></button>
          </div> 
      </div>
      )
    })}
    
    
    </div>
  )
}

export default TodoList