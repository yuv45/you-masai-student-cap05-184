let button = document.getElementById("btn");
let input = document.getElementById("inp");
let display = document.getElementById("display");
let parent = document.getElementById("parent");
let child = document.getElementById("child");
let home=document.getElementById("main")

let thrott=true;
 
input.addEventListener("input", function () {
  if(thrott){
    thrott=false;
    setTimeout(() => {
      thrott=true;
      getdata()
    }, 300);
  }
  
   
 
});
let getdata = async () => {
  try {  
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`
    );
    let data = await res.json();
    displaydata1(data);


    display.style.display = "none";
    parent.style.display = "block";
  } catch (error) {
    console.log(error)
  }
};



function displaydata1(data) {
  if(input.value!=""){
  child.innerHTML = "";
  console.log(data)
  let ans = data.meals[0];
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = ` ${ans.strMealThumb}`;
  div.append(img);
  child.append(div);
  let h2 = document.createElement("h2");
  h2.textContent = ans.strMeal;
  div.append(h2);
  child.append(div);
  let h3 = document.createElement("h3");
  h3.textContent = ans.strCategory;
  div.append(h3);
  child.append(div);

  let h4 = document.createElement("h4");
  h4.textContent = ans.strArea;
  div.append(h4);
  child.append(div);
  let button = document.createElement("button");
  button.innerText = "View more";
  child.append(button);
  button.addEventListener("click", () => {
    child.innerHTML = "";

    displaydata2(data);
  });
}
}
function displaydata2(data) {
  if (data !== "") {
    let ans = data.meals[0];

    parent.innerHTML = "";

    let h3 = document.createElement("h3");
    h3.textContent = ans.strCategory;

    parent.append(h3); 

    let h4 = document.createElement("h4");
    h4.textContent = ans.strArea;

    parent.append(h4);
    let img = document.createElement("img");
    img.src = ans.strMealThumb;
    parent.append(img);
    let h2 = document.createElement("h2");
    h2.textContent = ans.strMeal;
    parent.append(h2);
    let ingredients = document.createElement("ol");
    ingredients.innerHTML = "";
    ingredients.innerHTML += `Ingredients
<li>${ans.strIngredient1}</li>
<li>${ans.strIngredient2}</li>
<li>${ans.strIngredient3}</li>
<li>${ans.strIngredient4}</li>
<li>${ans.strIngredient5}</li>
<li>${ans.strIngredient6}</li>
<li>${ans.strIngredient7}</li>
<li>${ans.strIngredient8}</li>
<li>${ans.strIngredient9}</li>
<li>${ans.strIngredient10}</li>
<li>${ans.strIngredient11}</li>
<li>${ans.strIngredient12}</li>
<li>${ans.strIngredient13}</li>
<li>${ans.strIngredient14}</li>
<li>${ans.strIngredient15}</li>
<li>${ans.strIngredient16}</li>`;
    parent.append(ingredients);
    let quantity = document.createElement("ul");
    quantity.innerHTML = "";
    quantity.innerHTML += `Quantity
<li>${ans.strMeasure1}</li>
<li>${ans.strMeasure2}</li>
<li>${ans.strMeasure3}</li>
<li>${ans.strMeasure4}</li>
<li>${ans.strMeasure5}</li>
<li>${ans.strMeasure6}</li>
<li>${ans.strMeasure7}</li>
<li>${ans.strMeasure8}</li>
<li>${ans.strMeasure9}</li>
<li>${ans.strMeasure10}</li>
<li>${ans.strMeasure11}</li>
<li>${ans.strMeasure12}</li>
<li>${ans.strMeasure13}</li>
<li>${ans.strMeasure14}</li>
<li>${ans.strMeasure15}</li>
<li>${ans.strMeasure16}</li>`;
    parent.append(quantity);
    let heading = document.createElement("h2");
    heading.textContent = "Instructions";
    parent.append(heading);
    let Instrctions = document.createElement("p");
    Instrctions.textContent = `${ans.strInstructions}`;
    parent.append(Instrctions);
    let link = document.createElement("a");
    link.textContent ="click here to watch video";
    link.href=ans.strYoutube;
    link.target="_blank"
    parent.append(link);
    let icon=document.createElement("i");
    icon.className='bx bxl-youtube';
    parent.append(icon);
  
  }
}
 