import React, { useState,useEffect } from "react";
import Loading from "./Loading";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const[load,setLoad]=useState(true);
  const[showData,setShowData]=useState([]);
  const[year,setYear]=useState("");
  const[filter,setFilter]=useState("");
  const getData=async()=>{
    let res=await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies${
      year&&filter?`?_sort=year&_order=${year}&type=${filter}`:year?`?_sort=year&_order=${year}`:filter?`?_type=${filter}`:""
    }`)
    let data=await res.json()
    setShowData(data)
    setLoad(false)
  }
  useEffect(() => {
    getData()
   
  }, [year,filter])
  console.log(showData)
    return (
    <div data-testid="movie-list">
      <h1>Movies List</h1>
      <div>
        <label>Sort By Year</label>
        <select onChange={(e)=>{
          setYear(e.target.value)
        }} data-testid="sort">
          <option value="">--</option>
          <option value="asc">Oldest first</option>
          <option value="desc"> Newest first</option>
        </select>
      </div>
      <div>
        <label>Filter By Type</label>
        <select onChange={(e)=>{
          setFilter(e.target.value)
        }}  data-testid="filter">
          <option value="">--</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
      </div>
      {/* Either Loading component or below div with `data-testid="movie-container"` should exist on DOM at a time */}
    {
      load?<Loading/>:
      
      <div data-testid="movie-container">
        {/* render all the movies data with the help of MovieCard component here */}
        {
          showData.map((ele)=>(
         <MovieCard key={ele.id} props={ele}/>
          ))
        }
      </div>
    
    }
    </div>
  );
};

export default MovieList;
