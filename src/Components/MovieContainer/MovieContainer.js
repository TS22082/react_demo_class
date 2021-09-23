import React from "react";
import "./movieContainer.css";

const MovieContainer = (props) => {
  return (
    <div>
      <h1 className={props.color}>Im a {props.children}</h1>
    </div>
  );
};

export default MovieContainer;
