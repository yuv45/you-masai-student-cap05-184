let myform=document.querySelector("form");
myform.addEventListener("submit",function(e){
    e.preventDefault()
    let task=document.getElementById("task").value;
    let priority=document.getElementById("priority").value;
    let body=document.querySelector("tbody");
    let tr=document.createElement("tr");
let data=[task,priority];

data.forEach((ele)=>{
    let column=document.createElement("td");
    column.innerText=ele;
   if( ele.priority=="High"){
    column.style.backgroundColor="red";
   }
   else{
    column.style.backgroundColor
   }
 
    tr.appendChild(column);
})
body.appendChild(tr);
})
