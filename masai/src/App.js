import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

const App = () => {
  const[toggle,setToggle]=useState(true)
  return (
    <div className="App">
      <h1>React Movies List</h1>
      {/* The below button should have text content as either `Show Movies`or `Add Movie` */}
      <button onClick={()=>{
        setToggle(!toggle)
      }} data-testid="toggle-btn">
        {
          toggle?"Add Movie":"Show Movies"
        }
      </button>
      <div data-testid="container">
        {/* Add the required components here either AddMovie or MovieList will exist on DOM at a time*/}
        {
          toggle?<MovieList/>:<AddMovie/>
        }
      </div>
    </div>
  );
};

export default App;
