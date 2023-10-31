import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
function App(){
  const[text,setText]=React.useState("");
  const handleChange=(e)=>{
 setText(e.target.value)}
  const reset=()=>{
    setText(" ")
    input.value=" "
    
    
  }
  return(
    <div className='box'>
      <input id='input' onChange={handleChange} placeholder='Type your text here'/><br></br>
      
      <h1>{text}</h1>
      <button id='btn' onClick={reset}>Reset</button><br></br>
      
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
