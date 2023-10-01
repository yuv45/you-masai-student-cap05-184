let catogory=async()=>{
    let response= await fetch(`https://fakestoreapi.com/products/categories`);
    let data= await response.json();
           console.log( data);
}
 let parent=catogory();
parent.forEach(element => {
    let answer=document.querySelector(".sub-heading");
    answer.append(element)
});