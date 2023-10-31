import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
function App() {
  const [count, setCount] = React.useState(0)
 const handleClick=()=>{
  setCount(count+1)
 }
  return (
    <div className='box'>
      <div className='child'>
    <h1>Count:{count}</h1>
    <button onClick={handleClick}>Click me</button>
    <br/>
    </div>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
