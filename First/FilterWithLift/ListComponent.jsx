import React from "react";
import ItemComponent from "./ItemComponent";

function ListComponent({ list }) {
  return (
    <div className="list">
      {list.map((items) => (
        <div className="card">
          <ItemComponent key={items.id} item={items} />
        </div>
      ))}
    </div>
  );
}

export default ListComponent;
