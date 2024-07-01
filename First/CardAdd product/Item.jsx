import React from "react";

function Item({ item}) {
  item.total = item.price * item.value;
  return (
    <div>
      <p>
        <img src={item.imageUrl[0]} />
      </p>
      <p>{item.title}</p>
      <p>{item.collection}</p>
      <p>{item.description}</p>
      <p>Ksh. {item.value == 0 ? item.price : item.total}</p>
      <p>{item.value != 0 ? item.value : ""}</p>
    </div>
  );
}

export default Item;
