import React, { createContext, useContext, useState } from "react";
import Item from "./Item";
import ButtonComponent from "./ButtonComponent";
import CartComponent from "./CartComponent";
import { cartContext, updatecartContext, initialProducts } from "./Products";

function List({ list }) {
  const addContext = useContext(cartContext);
  const updateContext = useContext(updatecartContext);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState(initialProducts);
  const [shower, setShow] = useState(false);
  const [total, setTotal] = useState(null);

  function handelInc(id) {
    setProducts((prev) =>
      prev.map((product) =>
        product.productID === id
          ? { ...product, value: (product.value || 0) + 1 }
          : product
      )
    );

    setTotal(
      total +
        products.map((count) => count.total).reduce((prev, next) => prev + next )
    );

    setCartCount(
      products.map((count) => count.value).reduce((prev, next) => prev + next) +
        1
    );
  }

  console.log(cartCount);

  function handelDecr(id) {
    if (cartCount > 0) {
      setProducts((prev) =>
        prev.map((product) =>
          product.productID === id
            ? { ...product, value: (product.value || 0) - 1 }
            : product
        )
      );

      setCartCount(cartCount - 1);
    }
  }
  console.log(initialProducts, "ini");

  function show() {
    setShow(true);
  }

  return (
    <>
      <div className="list">
        {list.map((items) => (
          <div className="product-cards">
            <Item key={items.productID} item={items} />
            <div className="buttons colors">
              <ButtonComponent color={items.availableColors[0]} />
              <ButtonComponent color={items.availableColors[1]} />
              <ButtonComponent color={items.availableColors[2]} />
            </div>
            <br />
            <div className="buttons cart-btn">
              <ButtonComponent
                onClick={() => handelDecr(items.productID)}
                text="-"
              />
              <label>{products[items.productID].value || 0}</label>
              <ButtonComponent
                onClick={() => handelInc(items.productID)}
                text="+"
              />
              <ButtonComponent
                onClick={() => handelInc(items.productID)}
                text="Add to Cart"
              />
            </div>
          </div>
        ))}
      </div>
      <label onClick={show} style={{ fontSize: "30px" }}>
        {cartCount}
      </label>
      {shower ? (
        <CartComponent
          cartcount={cartCount}
          setCartCount={setCartCount}
          cartProduct={products}
          setter={setProducts}
        />
      ) : (
        ""
      )}
      <p>{total}</p>
    </>
  );
}

export default List;
