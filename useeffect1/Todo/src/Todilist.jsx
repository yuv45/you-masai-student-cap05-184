export default function Todolist({tasks,fetchtasks}){
    
const deleteTask=async(id)=>{
    try {
      await axios.delete(`  http://localhost:5000/tasks/${id}`)  
    fetchtasks();
    } catch (error) {
        console.log(error);
    }
}
return(
    <div>
        {
            tasks.map((task)=>(
                <div key={task.id}>
                   <span>{task.title}</span>
                   <button onClick={()=>deleteTask(task.id)}>Delete</button>
                </div>
            ))
        }
    </div>
)
}
