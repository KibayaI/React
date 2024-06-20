import React from "react";

const Item = ({ item }) => (
  <div>
    <p>
      <span>Title: </span>
      {item.title}
    </p>
    <p>
      <span>Author: </span>
      {item.author}
    </p>
    <p>
      <span>Comments: </span>
      {item.num_comments}
    </p>
    <p>
      <span>Points: </span>
      {item.points}
    </p>

    <br />
  </div>
);

export default Item;
