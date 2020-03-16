import React from "react";
import MovieItem from "./MovieItem";

// const InputForm = props => {
const MovieList = props => {
  // console.log("props.list = ", props.list);
  return (
    <div>
      <ul>
        {props.list.map(item => (
          <MovieItem
            key={item.id}
            item={item}
            loadDetails={props.loadDetails}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
