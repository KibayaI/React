import React from "react";
import Item from "./Items";


const ListComponeent = ({ list }) => (
  < div className="story">
    {list.map((item) => (
        <Item key={item.objectID} item={item} />
    ))}
  </div>
);

export default ListComponeent;
