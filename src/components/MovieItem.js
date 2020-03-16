import React from "react";

const ListItem = props => {
  const loadDetailsHandler = id => {
    props.loadDetails(props.item);
  };
  return (
    <div className="movieItemContainer">
      <li>
        <a
          href={`#`} 
          onClick={loadDetailsHandler} >
          {props.item.title}
        </a>
      </li>
    </div>
  );
};

export default ListItem;
