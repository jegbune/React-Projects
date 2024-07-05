import React, { useEffect, useState } from 'react'

function CallBack() {
  const [result, setResult] = useState(0)
  const Callback = (value) => {
    setResult(value)
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      setResult((prevResult) => {
        const newResult = prevResult * 5;
        console.log(newResult);
        if(newResult > 1000) {
          setResult(prevResult => prevResult=1)
        }
        return newResult;
      })
    }, 1000);
  
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  useEffect(() => {
    Callback(7)
  }, []);

  
  return (
    <div>
      <h1>Result: {result}</h1>
    </div>
  )
  

}

export default CallBack