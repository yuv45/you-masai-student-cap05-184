// let rootElement = document.getElementById("root")

// fetch("https://reqres.in/api/users?page=2") // This is the URL you're "calling".
//   .then(function (response) {
//     console.log(response.json())
//   }) // Convert the response to a format we can easily work with.
//   .then(function (resObj) {
//     console.log(resObj)
//     printData(resObj.data)
//   })
//   .catch(function (error) {
//     // If something goes wrong, this block will run.
//     console.error("There was an error fetching the data.", error)
//   })

// function printData(data) {
//     data.forEach(element => {
        
//     });
  
//     // create a div which will display the user information
//     let userCard = document.createElement("div")

//     // Create an image element
// let userImageElement=document.createElement("img");
// userImageElement.src=data.avatar;


//     // create a p tag which will display users name
//     let userNameElement= document.createElement("p")


//     // create a p tag which will display users email
// let userEmailElement=document.createElement("p");

//     // create a p tag which will display users id;
//     let userIdElement=document.createElement("p");
//     userIdElement=d

//     userCard.append(
//       userImageElement,
//       userNameElement,
//       userEmailElement,
//       userIdElement
//     )

//     // append/add the user card created to the root element;
//     rootElement.append(userCard)
  
// }
// async function call(){
//   try{
//     let data=await fetch(`https://fakestoreapi.com/products`);
//     let res= await res.json()
//   }
