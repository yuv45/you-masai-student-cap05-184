import { useState } from 'react';
import Todolist from './todolist';
import Todoitem from './Todoitem';

function Todo() {
  const [inputvalue, setinputvalue] = useState("");
  const[settodo,settodovalue]=useState([]);
 function addvalue(e){
 setinputvalue(e.target.value)
 }
function deletebtn(taskId){
  let addlist=settodo.filter(ele=>{
    taskId!=ele.id
  
  })
  settodovalue(addlist)
}




 function addtodo(){
let obj={
  id:new Date().getTime(),
  todo:inputvalue,
  status:Math.random()>0.5
}
let newlist=[...settodo,obj];
settodovalue(newlist);
 }
  return (
    <>
    <div className='box'>
       <h1>Todo App</h1>
       <input placeholder='Enter the todos' onChange={addvalue}/>
       <button onClick={addtodo} >Add Todo</button>
      
    </div>
    <div className='text'>
      <Todolist tasks={settodo}/>
    </div>
    </>
  )
}

export default Todo;
