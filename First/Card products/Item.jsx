import React, { useState } from "react";
import Button from "./Components/Button";

function Item({ list }) {
  const [color, setColor] = useState("black");
  const [imgIndex, setImgIndex] = useState(0);

  const background = {
    backgroundColor: color,
    border: "1px solid cyan"
  };

  const colorColors = {
    color: color,
  };

  const butColor = {
    color: color
  }

  const descBack ={
    backgroundColor: "white"
  }

  const r = {
    backgroundColor: color,
    padding: "2rem",
  };

  return (
    <div style={r}>
      <div style={background}>
        <h1>NIKE</h1>
        <img src={list.imageUrl[imgIndex]} />
      </div>
      <div style={descBack}>
        <h1 style={colorColors}>{list.title}</h1>
        <p>{list.collection}</p>
        <p>{list.description}</p>
        <p>Availabe Colours: </p>

        <Button
          setImgIndex={setImgIndex}
          setColor={setColor}
          color={list.availableColors[1]}
        />
        <Button
          setImgIndex={setImgIndex}
          setColor={setColor}
          color={list.availableColors[0]}
        />
        <Button
          setImgIndex={setImgIndex}
          setColor={setColor}
          color={list.availableColors[2]}
        />

        <p style={butColor}>{list.price}</p>

        <button style={background}>df</button>
      </div>
    </div>
  );
}

export default Item;
