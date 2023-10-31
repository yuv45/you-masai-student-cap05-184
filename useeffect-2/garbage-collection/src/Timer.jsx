import { useEffect, useState } from "react"

function Timer() {
  const [count, setCount] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((usecount)=>{
        if(usecount>1){
        return usecount-1
     } 
     else{
        clearInterval(timer)
        return (0)
     }
   
      })
    }, 1000)

    const cleanup = () => {
      clearInterval(timer)
    }
    return cleanup;
  })

  return (
    <div>
      <h1>Count : {count}</h1>
    </div>
  )
}

export default Timer