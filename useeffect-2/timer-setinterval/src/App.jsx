 import { useState } from "react"
 
import Timer from "./Timer"

function App() {
  const [value, setvalue] = useState(true)

  return (
    <>
       {value ? <Timer /> : null}
      <button onClick={() => setvalue(!value)}>
        TOGGLE COMPONENT
      </button>
   
    </>
  )
}

export default App
