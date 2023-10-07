let input=document.getElementById("input").value;
let display=document.getElementById("container");
let showdata =async()=>{
   let resp= await fetch('https://fakestoreapi.com/products')
   let data=await resp.json();
 
 }
 showdata();
 function result(answer){
    display.innerHTML=null;
    answer.forEach(element => {

    let div = document.createElement("div");
    let poster=document.createElement("img");
    poster.src=element.image;
    let price=document.createElement("p")
    price.textContent=element.price;
    let des=document.createElement("p");
    des.textContent=element.description;
    let title=document.createElement("p");
    title.textContent=element.title;
    let id=document.createElement('p');
    id.textContent=element.id;
    let rating=document.createElement("p");
    rating.textContent=element.rating.count ,element.rating.count;
    div.append(poster,price,des,title,id,rating);
    display.append(div)
 
        
});
}
function higher(data){
data.sort(function(a,b){
   return a.price-b.price;
})

display.innerHTML=null;
data.forEach(element => {

let div = document.createElement("div");
let poster=document.createElement("img");
poster.src=element.image;
let price=document.createElement("p")
price.textContent=element.price;
let des=document.createElement("p");
des.textContent=element.description;
let title=document.createElement("p");
title.textContent=element.title;
let id=document.createElement('p');
id.textContent=element.id;
let rating=document.createElement("p");
rating.textContent=element.rating.count ,element.rating.count;
div.append(poster,price,des,title,id,rating);
display.append(div)
}
)}