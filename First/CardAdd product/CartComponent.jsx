import React, { useState } from "react";
import Item from "./Item";
import ButtonComponent from "./ButtonComponent";

function CartComponent({ cartProduct, setter, cartcount, setCartCount }) {
  const products = cartProduct.filter((product) => product.value > 0);

  function remove(item) {
    setCartCount(
      cartcount - products.filter((items) => items.productID === item)[0].value
    );

    setter((prev) =>
      prev.map((product) =>
        product.productID === item
          ? { ...product, value: (product.value || 0) - product.value }
          : product
      )
    );
  }
  console.log(products);
  return (
    <div className="list">
      {products.map((product) => (
        <div>
          <Item total={product.price} item={product} />
          <ButtonComponent
            onClick={() => remove(product.productID)}
            text="Remove"
          />
        </div>
      ))}

    </div>
  );
}

export default CartComponent;
