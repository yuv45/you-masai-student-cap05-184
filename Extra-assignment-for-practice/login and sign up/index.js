 let cont=document.querySelector(".cont");
 let registerlink=document.querySelector(".register-link");
 let loginlink =document.querySelector(".login-link");
 registerlink.addEventListener("click",()=>{
    cont.classList.add('active')
 })
 loginlink.addEventListener("click",()=>{
    cont.classList.remove('active')
 })