import React from "react";

export default function ItemComponent({ item }) {
  return (
    <div>
      <img draggable='false' src={item.imageUrl} alt="Whatever" />
      <p>Title: {item.title}</p>
      <p>Price: {item.price}</p>
      <p>Date: {item.date}</p>
      <p>Location: {item.location}</p>
      <p>Category: {item.categories}</p>
    </div>
  );
}
