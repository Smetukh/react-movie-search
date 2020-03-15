import React from "react";
import ListItem from "./MovieItem";

// const InputForm = props => {
const MovieList = props => {
  console.log("props.list = ", props.list);
  return (
    <div>
      {props.list.map(item => (
        <ListItem item={item} />
      ))}
    </div>
  );
};

export default MovieList;
