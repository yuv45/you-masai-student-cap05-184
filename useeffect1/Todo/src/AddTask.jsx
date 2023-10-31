import axios from "axios";
import { useState } from "react";

export default function Addtask({fetchtasks}){
    const[task,settask]=useState("");
   const Addtask=async()=>{
    try {
        
        await axios.post(`http://localhost:5000/tasks`)
    } catch (error) {
        console.log(error)
    }
   }

    return(
        <div>
            <input type="text" placeholder="Add task" value={task} onChange={(e)=>settask(e.target.value)}/>
            <button onClick={Addtask}>Add Todo</button>
        </div>
    )

}