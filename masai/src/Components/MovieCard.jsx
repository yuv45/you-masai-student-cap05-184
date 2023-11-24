import React from "react";

const MovieCard = ({props}) => {
  return <div data-testid="movie-card">
    <img src={props.poster}/>
    <h2>{props.title}</h2>
    <h4>Year: {props.year}</h4>
    <h6>ID: {props.imdbID}</h6>
    <p>Type: {props.type}</p>
    <p>Rating: {props.rating}</p>
  </div>;
};

export default MovieCard;
