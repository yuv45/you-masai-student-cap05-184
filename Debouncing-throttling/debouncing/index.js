let parent = document.getElementById("display");
let home = document.getElementById("home");
let timeout=null;
let Search=document.getElementById("moviename");
Search.addEventListener('input',function(){
  clearTimeout(timeout);
  timeout=setTimeout(() => {
    Fetchusers()
  }, 200);
})
const Fetchusers = async () => {
  try {
    console.log(1)
    let URL = `https://www.omdbapi.com/?i=tt3896198&apikey=984d7adc&s=${Search.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    showData(data.Search);
  } catch (error) {
    console.log(error);
  }
};
showData = (data) => {
  home.style.display = "none";
  parent.innerHTML = null;
  if (data != undefined) {
    data.forEach((element) => {
      let div = document.createElement("div");
      let poster = document.createElement("img");
      poster.src = element.Poster;
      let title = document.createElement("h4");
      title.innerText = element.Title;
      let year = document.createElement("p");
      year.innerText = element.Year;
      let imdbid = document.createElement("p");
      imdbid.innerText = element.imdbID;
      div.append(poster, title, year, imdbid);
      parent.append(div);
    });
  } else {
    let h1 = document.createElement("h1");
    h1.innerText = "Movie not found";
    parent.append(h1);
  }
  let moviecart=document.querySelectorAll("#display>div")
  moviecart.forEach((element)=>{
    element.addEventListener("click",()=>{
        moviedata(moviecart)
    })
  })

};
let moviedata=async(moviecart)=>{
    let ans = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=984d7adc&t=${moviecart}`)   
    let result= await ans.json(); 
    console.log(result);      
}