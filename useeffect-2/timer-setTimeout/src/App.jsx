import { useState } from 'react'
 import Timer from './Timer'

function App() {
  const [value, setvalue] = useState(0)

  return (
    <>
      {value ?<Timer/>:null}
      <button onClick={()=>setvalue(!value)}>Toggle Status</button>
    </>
  )
}

export default App;
