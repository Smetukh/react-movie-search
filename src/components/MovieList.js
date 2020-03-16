import React from "react";
import MovieItem from "./MovieItem";

const MovieList = props => {
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
