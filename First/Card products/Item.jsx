import React, { useState, useContext } from "react";
import Button from "./Components/Button";
import { cartContext, updatecartContext } from "./Products";

function Item({ list }) {
  const [color, setColor] = useState("black");
  const [imgIndex, setImgIndex] = useState(0);
  const [colorAlpah, setColorAlpha] = useState("");

  const background = {
    // backgroundColor: `mix(${color}, white, 5%)`,
    backgroundColor: colorAlpah,
  };

  const colorColors = {
    color: color,
  };

  const butColor = {
    color: color,
  };

  const descBack = {
    backgroundColor: "white",
  };

  const r = {
    backgroundColor: color,
    padding: "1rem 10rem",
  };
  const re = {
    backgroundColor: color,
  };

  const [outline, setOutline] = useState(false);

  const withOuline = {
    outline: "2px solid black",
    outlineOffset: "3px",
  };

  const isOutline = outline ? background : withOuline;

  const addContext = useContext(cartContext);
  const updateContext = useContext(updatecartContext);

  function addCount() {
    updateContext(addContext + 1);
  }

  return (
    <div className="nike-card" style={r}>
      <div className="pic" style={background}>
        <h1>NIKE</h1>
        <img src={list.imageUrl[imgIndex]} />
      </div>
      <div className="description" style={descBack}>
        <h1 style={colorColors}>{list.title}</h1>
        <p>{list.collection}</p>
        <p>{list.description}</p>

        <div className="buttons">
          <p>Availabe Colours: </p>

          <Button
            setImgIndex={setImgIndex}
            setColorAlpha={setColorAlpha}
            setColor={setColor}
            color={list.availableColors[1]}
            outline={isOutline}
          />
          <Button
            setImgIndex={setImgIndex}
            setColorAlpha={setColorAlpha}
            setColor={setColor}
            color={list.availableColors[0]}
            outline={isOutline}
          />
          <Button
            setImgIndex={setImgIndex}
            setColorAlpha={setColorAlpha}
            setColor={setColor}
            color={list.availableColors[2]}
            outline={isOutline}
          />
        </div>

        <div className="price-div">
          <p style={butColor}>Ksh....{list.price}</p>

          <button className="buy" style={background}>
            BUY NOW
          </button>
        </div>
        <button onClick={addCount}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
