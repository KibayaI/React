import React, { createContext, useState } from "react";
import List from "./List";
import { black, red, orange } from "./assests";
import "./Products.css";

export const cartContext = createContext();
export const updatecartContext = createContext();

export const initialProducts = [
  {
    title: "Jordan Proto Lyte",
    collection: "Running Collection",
    description: "Lightweight and breathable, perfect for running.",
    availableColors: ["red", "black", "orange"],
    price: 245,
    imageUrl: [black, red, orange],
    value: 0,
    productID: 0,
  },
  {
    title: "Nike Air Zoom Pegasus",
    collection: "Running Collection",
    description: "Designed for comfort and performance.",
    availableColors: ["Blue", "White", "Grey"],
    price: 180,
    imageUrl: [black, red, orange],
    value: 0,

    productID: 1,
  },
  {
    title: "Adidas Ultraboost",
    collection: "Running Collection",
    description: "Boost technology for ultimate energy return.",
    availableColors: ["Black", "White", "Green"],
    price: 200,
    imageUrl: [black, red, orange],
    value: 0,

    productID: 2,
  },
  {
    title: "New Balance Fresh Foam",
    collection: "Running Collection",
    description: "Fresh Foam midsole cushioning for a plush feel.",
    availableColors: ["Red", "Black", "Blue"],
    price: 150,
    imageUrl: [black, red, orange],
    value: 0,

    productID: 3,
  },
  {
    title: "Asics Gel-Kayano",
    collection: "Running Collection",
    description: "High-performance running shoes with GEL technology.",
    availableColors: ["Yellow", "Black", "Orange"],
    price: 160,
    imageUrl: [black, red, orange],
    value: 0,

    productID: 4,
  },
  {
    title: "Puma Ignite",
    collection: "Running Collection",
    description: "Engineered for maximum speed and comfort.",
    availableColors: ["Red", "Grey", "Black"],
    price: 130,
    imageUrl: [black, red, orange],
    value: 0,

    productID: 5,
  },
  {
    title: "Brooks Ghost",
    collection: "Running Collection",
    description: "Smooth transitions and soft cushioning for runners.",
    availableColors: ["Blue", "Black", "White"],
    price: 120,
    imageUrl: [black, red, orange],
    value: 0,
          
    productID: 6,
  },
];

function Products() {
  const [count, useCount] = useState(0);
  return (
    <div>
      <cartContext.Provider value={count}>
        <updatecartContext.Provider value={useCount}>
          <List list={initialProducts} />
        </updatecartContext.Provider>
      </cartContext.Provider>
    </div>
  );
}

export default Products;
