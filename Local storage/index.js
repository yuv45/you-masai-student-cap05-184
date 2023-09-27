let input1 = document.getElementById("task");
let input2 = document.getElementById("age");
let myform = document.querySelector("form");
let get = document.getElementById("clear");
let body = document.querySelector("tbody");

myform.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = input1.value;
  let age = input2.value;
  if (name != "") {
    localStorage.setItem(name, age);
  }
  myform.reset();
  body.innerHTML = "";
  for (let i in localStorage) {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    if (
      i !== "length" &&
      i != "setItem" &&
      i != "clear" &&
      i != "removeItem" &&
      i != "getItem" &&
      i != "key"
    ) {
      td1.textContent = i;
      td2.textContent = localStorage[i];
      row.append(td1, td2);
      body.append(row);
    }
  }
});

let Clearls = () =>{
  localStorage.clear();
  body.innerHTML="";
}