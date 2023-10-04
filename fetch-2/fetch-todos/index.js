
let tbody=document.querySelector("tbody");
async function init() {
    try {
        let response=await fetch(`http://localhost:3000/todos`);
        let data =await response.json();
        
data.forEach(element => {
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let deletebtn=document.createElement("button");
     deletebtn.innerText="Delete";
     deletebtn.style.backgroundColor="red";
     deletebtn.style.borderRadius="20px"
     deletebtn.addEventListener("click",function(){
        tbody.removeChild(tr);
     })
     td5.appendChild(deletebtn);

    td1.textContent=element.userId;
    td2.textContent=element.id;
    td3.textContent=element.title;
    td4.textContent=element.completed;

    
  tr.append(td1,td2,td3,td4,td5);
  tbody.append(tr);


});
    } catch (error) {
        console.log(error);
    }
}

 
init()