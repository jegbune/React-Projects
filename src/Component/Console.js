import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { toast } from 'react-toastify'

function Console() {
  const [score, setScore] = useState('10')
  const [comment, setComment] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    if(Number(score) <=5 && comment.length <=10){
      alert('Please provide a comment explaining why the experience was poor');
      return;
    }
    console.log('Form submitted');
    setComment('');
    setScore('10');
  }
  
  return (
    
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className='Field'>
            <label>Score: {score} <FaStar color='#fd0'/></label>
              <input 
              type='range' 
              min='0' 
              max='10' 
              value ={score}
              onChange={(e)=> {setScore(e.target.value) }} />
              <span>{score}</span>
          </div>
          <div className='Field'>
            <label>Comment: </label>
            <textarea 
            value={comment}
            onChange={(e)=> setComment(e.target.value)}
            />
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
      
  )
}

export default Console
