import React, { useState } from "react";

function Button({ color, setColor, setImgIndex, setColorAlpha }) {

  function colorChange(event) {
    setColor(event.target.name);
    // if (event.target.name ==="red"){

    // }
    if (color === "red") {
      setImgIndex(1);
      setColorAlpha("rgb(190, 0, 0)");

    } else if (color === "black") {
      setImgIndex(0);
      setColorAlpha("grey");

    } else {
      setImgIndex(2);
      setColorAlpha("rgb(255, 190, 10)");

    }
  }

  const background = {
    backgroundColor: color,
    color: "white",
  };

  return (
    <div>
      <button style={background} onClick={colorChange} name={color}></button>
    </div>
  );
}

export default Button;
