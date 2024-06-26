import React, { useState, createContext } from "react";
import Nike from "./Nike";
import { black, red, orange } from "./assests";
import "./products.css";
import Button from "./Components/Button";

export const cartContext = createContext();
export const updatecartContext = createContext();
const initialProducts = [
  {
    title: "Jordan Proto Lyte",
    collection: "Running Collection",
    description: "Lightweight and breathable, perfect for running.",
    availableColors: ["red", "black", "orange"],
    price: 245,
    imageUrl: [black, red, orange],
    productID: 0,
  },
  {
    title: "Nike Air Zoom Pegasus",
    collection: "Running Collection",
    description: "Designed for comfort and performance.",
    availableColors: ["Blue", "White", "Grey"],
    price: 180,
    productID: 1,
  },
  {
    title: "Adidas Ultraboost",
    collection: "Running Collection",
    description: "Boost technology for ultimate energy return.",
    availableColors: ["Black", "White", "Green"],
    price: 200,
    productID: 2,
  },
  {
    title: "New Balance Fresh Foam",
    collection: "Running Collection",
    description: "Fresh Foam midsole cushioning for a plush feel.",
    availableColors: ["Red", "Black", "Blue"],
    price: 150,
    productID: 3,
  },
  {
    title: "Asics Gel-Kayano",
    collection: "Running Collection",
    description: "High-performance running shoes with GEL technology.",
    availableColors: ["Yellow", "Black", "Orange"],
    price: 160,
    productID: 4,
  },
  {
    title: "Puma Ignite",
    collection: "Running Collection",
    description: "Engineered for maximum speed and comfort.",
    availableColors: ["Red", "Grey", "Black"],
    price: 130,
    productID: 5,
  },
  {
    title: "Brooks Ghost",
    collection: "Running Collection",
    description: "Smooth transitions and soft cushioning for runners.",
    availableColors: ["Blue", "Black", "White"],
    price: 120,
    productID: 6,
  },
  {
    title: "Under Armour HOVR",
    collection: "Running Collection",
    description: "HOVR technology provides a zero-gravity feel.",
    availableColors: ["Green", "Black", "Orange"],
    price: 140,
    productID: 7,
  },
  {
    title: "Saucony Kinvara",
    collection: "Running Collection",
    description: "Minimalist design with responsive cushioning.",
    availableColors: ["Red", "Yellow", "Black"],
    price: 110,
    productID: 8,
  },
  {
    title: "Mizuno Wave Rider",
    collection: "Running Collection",
    description: "Wave technology for smooth and stable rides.",
    availableColors: ["Black", "White", "Blue"],
    price: 150,
    productID: 9,
  },
];
function Cart() {
  return <Nike list={initialProducts[0]} />;
}

function Products() {
  const [count, useCount] = useState(1);

  function decrement() {
    if (count > 0) {
      useCount(count - 1);
    } else {
      useCount(count);
    }
  }

  function increment() {
    useCount(count + 1);
  }

  function hou() {
    <Cart />;
  }

  return (
    <cartContext.Provider value={count}>
      <updatecartContext.Provider value={useCount}>
        <div className="product-card">
          <Nike list={initialProducts[0]} />

          <div className="cartCard">
            <button onClick={decrement}>-</button>
            <label>{count}</label>
            <button onClick={increment}>+</button>
            <div className="cartImg">
              <button onClick={Cart}>show</button>
            </div>

            {/* <button></button> */}
          </div>
        </div>
      </updatecartContext.Provider>
    </cartContext.Provider>
  );
}

export default Products;
