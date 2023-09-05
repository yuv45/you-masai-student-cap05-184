let myform=document.querySelector("form");
myform.addEventListener("submit",function(e){
 e.preventDefault()
 let name =document.getElementById("name").value;
 let Id=document.getElementById("docID").value;
 let department=document.getElementById("dept").value;
 let email=document.getElementById("email").value;
 let mobile=document.getElementById("mbl").value;
 let experience=document.getElementById("exp").value;
  
     let role;
     if(experience>=5){
        role="Senior";
     }
     else if(experience<5&&experience>2){
        role="Beginner";
     }
     else{
        role="Fresher";
     };
    //  console.log(name+" "+Id+" "+department+" "+experience+" "+mobile+" "+email+" "+role);
     let tbody=document.querySelector("tbody");
     let row=document.createElement("tr");
     
     let data=[name,Id,department,email,mobile,experience,role];
     data.forEach((ele)=>{
      let td=document.createElement("td");
      td.innerText=ele;
      row.appendChild(td)
     })
     let del=document.createElement("td");
     let deletebtn=document.createElement("button");
     deletebtn.innerText="Delete";
     deletebtn.style.backgroundColor="red";
     deletebtn.style.borderRadius="20px"
     deletebtn.addEventListener("click",function(){
        tbody.removeChild(row);
     })
     del.appendChild(deletebtn);
     row.appendChild(del);






    tbody.appendChild(row)







})