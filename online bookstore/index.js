"use strict"
function Author(name,birthyear,nationality){
    this.name=name
    this.birthyear=birthyear
    this.nationality=nationality
}
let author1=new Author("harry potter",2004,"USA")
let author2=new Author("Munsi premchand",1936,"Indian")
let author3=new Author("Albert",1986,"America")
let author4=new Author("Ding chong",2004,"China")
let getBookInfo=function(){
    console.log(`Title:${this.Title},Author:${this.Author},genre:${this.genre},price:${this.price}`)
}   
function Book(Title,Author,genre,price){
    this.Title=Title
    this.Authorname=Author.name
    this.genre=genre
    this.price=price
 
}


let book=new Book("The world og race",author1,"comedy",900)
let book1=new Book("The peon master",author2,"drama",700)
let book2=new Book("The beauty of nature",author3,"televison",600)
let book3=new Book("The rich and the poor dad",author4,"movie",400)
console.log(book)
let arr1=[author1,author2,author3,author4];
let arr2=[book,book1,book2,book3];
for(let i=0;i<arr1.length;i++){
    console.log(`Authorname: ${arr1[i].name}    Title: ${arr2[i].Title}`)
}
