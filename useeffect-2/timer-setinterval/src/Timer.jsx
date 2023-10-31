import { useEffect, useState } from "react"

function Timer() {
  const [count, setCount] = useState(60)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(usecount=>{
        if(usecount>0){
       return usecount-1}    })
    }, 1000)

    const cleanup = () => {
      clearInterval(timer)
    }
    return cleanup;
  }, [])

  return (
    <div>
      <h1>Count : {count}</h1>
    </div>
  )
}

export default Timer