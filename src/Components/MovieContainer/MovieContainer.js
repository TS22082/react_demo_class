import React from "react";
import "./movieContainer.css";

const MovieContainer = (props) => {
  return (
    <div>
      <h3>Actors: {props.actors}</h3>
      <h3>Year released: {props.year}</h3>
      <h3>Directors: {props.director}</h3>

      {props.children}
    </div>
  );
};

export default MovieContainer;
