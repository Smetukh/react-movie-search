import React from "react";

// const InputForm = props => {
const ListItem = props => {
  const loadDetailsHandler = id => {
    console.log("props.item.id = ", props.item);
    props.loadDetails(props.item);
  };
  return (
    <div>
      <li>
        <p onClick={loadDetailsHandler} loadDetails={props.loadDetails}>
          {props.item.title}
        </p>
      </li>
    </div>
  );
};

export default ListItem;
