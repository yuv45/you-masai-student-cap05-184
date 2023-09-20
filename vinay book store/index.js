 
function Book(Title,Author,genre,price){
    this.Title=Title
    this.Author=Author
    this.genre=genre
    this.price=price
 
}
function Author(name,birthyear,nationality){
    this.name=name
    this.birthyear=birthyear
    this.nationality=nationality
}
let myform=document.getElementById("author");

let data=[];
let bookdata=[];
myform.addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let date=document.getElementById("dob").value;
    let nation=document.getElementById("nation").value;
     

    author1=new Author(name,date,nation)
    data.push(author1);
    console.log(author1)
    myform.reset();
}) 

let myforms=document.getElementById("book");
myforms.addEventListener("submit",function(e){
    e.preventDefault()
    let bookname=document.getElementById("books").value;
    let genre=document.getElementById("genre").value;
    let price=document.getElementById("price").value;
     

   book1=new Book(bookname,data[0],genre,price)
    data.push(book1);
    console.log(book1);
    myform.reset();
}) 



  