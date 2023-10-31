import { useState, useEffect } from "react";
function Timer(){
    const [count,setcount]=useState(60);


    useEffect(()=>{
        let timer=setTimeout(() => {
            setcount(usecount=>{
                return usecount-1;
            })
        },1000);
        const cleanup = () => {
            clearTimeout(timer)
          }
          return cleanup;
        }, [count])
    
    
    return(
        <>
        <div>
      <h1>Count : {count}</h1>
    </div>
        
        </>
    )
}
export default Timer;