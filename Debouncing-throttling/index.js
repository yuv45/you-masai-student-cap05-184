let input=document.getElementById("inp");
let btn=document.getElementById("btn");

btn.addEventListener("click",function(){

    function getinfo(){
        fetch(` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`)
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
       })
       }
       getinfo()
})


