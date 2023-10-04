let myform=document.querySelector("form");
myform.addEventListener("submit",function(e){
    e.preventDefault()
     let username =document.getElementById("text").value;
     let password=document.getElementById("type").value;
     let object={
      
     }
     if(object.username==username&&object.password==password){
        alert("Logined sucessfully");
     }
     else{
        alert("Invalid username or password");
     }
     let reset=document.getElementById("form").reset()
  })

  function calculate(){
  if(type.type=="password"){
   type.type="text";
  }
  else{
   type.type="password"
  }
  }





 