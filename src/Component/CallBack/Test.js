import React, { useEffect, useState } from 'react'

function Test() {
  const [result, setResult] = useState(0);

  const callback = (value)=> {
    setResult(value)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
        setResult(prevResult =>{
          const newResult = prevResult * 5
          console.log(newResult)
          return newResult
        }
        )
      }, 1000);

      return () => {
        clearInterval(intervalId)
      }
          
    
  }, [])
  
  useEffect(()=> {
    callback(8)
  }, [])

  return (
    <div>
      <h1>{result}</h1>
    </div>
  )
}

export default Test
