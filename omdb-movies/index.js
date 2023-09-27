let parent = document.getElementById("display");
let home = document.getElementById("home");
const Fetchusers = async () => {
  try {
    let input = document.getElementById("input").value;
    let URL = `https://www.omdbapi.com/?i=tt3896198&apikey=984d7adc&s=${input}`;
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
};
