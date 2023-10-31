import Todoitem from "./Todoitem";
import './style.css'
function Todolist({tasks}){

    return(
        <div>
         <table>
            <thead>
                <tr >
                    <th >Task Name</th>
                    <th>Status</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task)=>(
                        <Todoitem key={task.id} data={task}/>
                    ))
                }
            </tbody>
         </table>
         </div>
    )
   
}   
export default Todolist;