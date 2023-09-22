// sign up page 
let myform=document.querySelector("form");

myform.addEventListener("submit",function(e){
    e.preventDefault()
     let username =document.getElementById("text").value;
     let password=document.getElementById("type").value;
     
     if(username==username&&password==password){
        alert("Logined sucessfully");
     }
     else{
        alert("Invalid username or password");
     }
     myform.reset()
  })

  function calculate(){
  if(type.type=="password"){
   type.type="text";
  }
  else{
   type.type="password"
  }
}
// sign up block and none 
 let block =document.getElementById("parent")
 block.style.display="none"
let sign =document.getElementById("btn")
sign.addEventListener("click",function(){
    block.style.display="block"
})
let cross=document.querySelector(".bx-x-circle");
cross.addEventListener("click",function(){
    block.style.display="none";
})
// menu section
let next2=document.getElementById("next2");
let next=document.getElementById("next");
let back=document.getElementById("back");
let pay=document.getElementById("pay");
let order=document.getElementById("place-order");
let span=document.getElementById("order-no");
let proceed =document.getElementById("proceed");
let spans=document.getElementById("order-no.");


back.addEventListener("click",function(){
    let next2=document.getElementById("next2");
    next.style.display="none";
    next2.style.display="none";

})

// for the pay order button
order.addEventListener("click",function(){
    let random=Math.floor(Math.random()*100)+1;
    next.style.display="block";
    span.textContent=random;
    spans.textContent=random;



let total=document.getElementById("total");
   let bg=burger.innerText*5;
   let dog=hotdog.innerText*10;
   let french=fries.innerText*7;
   let dos=dosa.innerText*12;
   let cokes=coke.innerText*6;
   let momo=momos.innerText*3;
   total.textContent=`$ ${bg+dog+french+dos+cokes+momo}`
  


})
// for pay button
pay.addEventListener("click",function(){
    next.style.display="none";
    next2.style.display="block";
})
// for go back button
let goback=document.getElementById("goback");
goback.addEventListener("click",function(){
    next.style.display="block";
    next2.style.display="none";
})
// for proceed button
proceed.addEventListener("click", function(){
    let random_num=Math.floor(Math.random()*10000)+1;
  
  next2.style.display="none";
    setTimeout(function(){
        new Promise(function(resolve,reject){
        document.getElementById("hidden").style.display="block";
        resolve("promised")
        }).then(res=>{
            console.log(res)
        })
    },random_num)
})
// for the adition tab on the menu;
let hidden=document.getElementById("hidden");
let cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(){
hidden.style.display="none";
burger.innerText="";
hotdog,this.innerText="";
fries.innerText="";
coke.innerText="";
dosa.innerText="";
momos.innerText="";

}) 
let burger=document.getElementById("display1");
let hotdog=document.getElementById("display2");
let fries =document.getElementById("display3");
let  dosa=document.getElementById("display4");
let coke=document.getElementById("display5");
let momos=document.getElementById("display6");

 function Addburger(){
    burger.innerText++
 }


 function Removeburger(){
    if(burger.innerText!=0){
        burger.innerText--;
    }
    else{
        burger.innerText=0;
    }
 }



function Adddog(){
    hotdog.innerText++;
}
  
function Removedog()
 {
    if(hotdog.innerText!=0){
        hotdog.innerText--;
    }
    else{
        hotdog.innerText=0;
    }
 }
function Addfries(){
    fries.innerText++
}
 
function Removefries(){
    if(fries.innerText!=0){
        fries.innerText--;
    }
    else{
        fries.innerText=0;
    }
}
function AddDosa(){
    dosa.innerText++;
}
function RemoveDosa(){
    if(dosa.innerText!=0){
        dosa.innerText--;
    }
    else{
        dosa.innerText=0;
    }
}
function AddCoke(){
    coke.innerText++;
}
function RemoveCoke(){
    if(coke.innerText!=0){
        coke.innerText--;
    }
    else{
        coke.innerText=0;
    }
}
function Addmomos(){
    momos.innerText++;
}
function Removemomos(){
    if(momos.innerText!=0){
        momos.innerText--;
    }
    else{
        momos.innerText=0;
    }
}











