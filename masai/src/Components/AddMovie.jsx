import React, { useState } from "react";
import "../App.css"

const AddMovie = () => {
  const postData=async(formData)=>{
  let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData)
  })

  }
  const[formData,setFormData]=useState({
    title:"",year:"",imdbID:"",type:"",rating:"",poster:""
  })
  const handleSubmit=(e)=>{
 e.preventDefault()
 postData(formData)
  }
  const handleChange=(e)=>{
setFormData({
  ...formData,[e.target.name]:e.target.value
})
  }
  return (
    <div data-testid="add-movie">
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit} data-testid="add-movie-form">
        <label >Title:</label><br/>
        <input onChange={handleChange} name="title"/><br/>
        <label >Year: </label><br/>
        <input onChange={handleChange}  name="year"/><br/>
        <label >IMDB ID:</label><br/>
        <input  onChange={handleChange} name="imdbID"/><br/>
        <label >Type:</label><br/>
        <select onChange={handleChange} name="type">
        <option value="">Select a type</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="game">Game</option>
        </select><br/>
        <label > Rating:</label><br/>
        <input onChange={handleChange} name="rating"/><br/>
        <label >Poster: </label><br/>
        <input onChange={handleChange} name="poster"/><br/>
        <input name="submit" type="submit" value="Add movie"/>
      </form>
    </div>
  );
};

export default AddMovie;
