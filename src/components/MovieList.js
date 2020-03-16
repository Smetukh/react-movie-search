import React from "react";
import ListItem from "./MovieItem";

// const InputForm = props => {
const MovieList = props => {
  // console.log("props.list = ", props.list);
  return (
    <div>
      <ul>
        {props.list.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
