import { useState,useEffect } from "react";
import axios from 'axios';
import Todolist from "./Todilist";
import Addtask from "./AddTask";
function App(){
    const[tasks,settasks]=useState([]);
    const[page,setpage]=useState(1);
    const[loading,setloading]=useState(false);
    const[error,seterror]=useState(null);
    const fetchTasks=async()=>{
        setloading(true)
        try {
          const res =await axios.get(`  http://localhost:5000/tasks?_limit=3&_page=${page}`)
          settasks(res.data)
        } catch (error) {
            seterror(error)
        }finally{
            setloading(false)
        }
    };
    useEffect(()=>{
        fetchTasks()
    },[page])
return(
    <div className="App">
    {error&&<div>Error:{error}</div>}
    {loading ?(<div>Loaading....</div>):(
    <Todolist tasks={tasks} fetchTasks={fetchTasks}/>)}
    <Addtask fetchTasks={fetchTasks}/>
    </div>
)
}




export default App;