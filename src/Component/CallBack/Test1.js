// import React, { useEffect, useState } from 'react'

// function Test1() {
//   const [finalResult, setFinalResult] = useState(0)
//   const callBack = (value) =>{
//     setFinalResult(value)
//   }
  
//   useEffect(() => {
//     const Interval = setInterval(() => {
//       setFinalResult(prevResult => {
//         const Result = prevResult * 5
//         return Result
//       })      
//     }, 1000);
    
  
//     return () => {
//       clearInterval(Interval)
//     }
    
//   }, [])

//   useEffect(()=> 
//   callBack(1.1)
//   ,[])
  


//   return (
//     <div>
//       <h1>{finalResult}</h1>
//     </div>
//   )
// }

// export default Test1
