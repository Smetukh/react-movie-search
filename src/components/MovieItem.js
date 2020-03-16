import React from "react";

// const InputForm = props => {
const ListItem = props => {
  // console.log("props.item = ", props.item);
  return (
    <div>
      <li>
        <a href={"google.com"}>{props.item.title}</a>
      </li>
    </div>
  );
};

export default ListItem;
