import './style.css'
import Todo from './Todo';
function Todoitem({data}){
    return(
    <>
          <tr >
            <td >{data.todo}</td>
            <td style={{color:data.status?"green":"red"}}>{data.status?"True":"False"}</td>
            <td><button onClick={()=>deletebtn(task.id)}>Delete</button></td>
          </tr>
          </>
    )
}
export default Todoitem;