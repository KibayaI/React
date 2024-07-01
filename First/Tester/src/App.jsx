import React, { useState } from "react";
import ListComponeent from "./Components/List";
import LoginForm from "./Login/LoginForm";
import "./App.css";
import FilterComponent from "../../FilterWithLift/FilterComponent";
import sre from "./assets/index.js";
// import Products from "../../Card products/Products.jsx";
import Products from "../../CardAdd product/Products.jsx";
import Todoitemcomponent from "../../UseReducer/Item.jsx";
import Todos from "../../UseReducer/Todo/ToDoListComponent.jsx";

const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

export const eventsProd = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Summer Music Festival",
    price: 50,
    date: "August 20, 2021",
    location: "Central Park, New York City",
    company: "Music Festivals Inc.",
    categories: "Music",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Food and Wine Expo",
    price: 75,
    date: "September 25, 2021",
    location: "Moscone Center, San Francisco",
    company: "Movie",
    categories: "Movie",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Comic Con",
    price: 35,
    date: "October 15, 2021",
    location: "Los Angeles Convention Center",
    company: "Movie",
    categories: "Technology",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwYW5kJTIwZGVzaWduJTIwZmFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Art, holiday and Design Fair",
    price: 20,
    date: "November 12, 2021",
    location: "Navy Pier, Chicago",
    company: "Art",
    categories: "Art",
  },
  {
    id: 5,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661766479722-ddedc5dce339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Holiday Market",
    price: 5,
    date: "December 3, 2021",
    location: "Union Square, New York City",
    company: "Holiday Markets Inc.",
    categories: "Sports",
  },
  {
    id: 6,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661290419867-79072e8d5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Concert in the Park",
    price: 20,
    date: "August 20, 2022",
    location: "Central Park, New York City",
    company: "Live Nation",
    categories: "Movie",
  },
  {
    id: 7,
    imageUrl:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Food and Wine Festival",
    price: 50,
    date: "September 15-18, 2022",
    location: "Union Square, San Francisco",
    company: "Taste of San Francisco",
    categories: "Symposyum",
  },
  {
    id: 8,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661602441396-67b89b6ac4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Summer Beach Party",
    price: 15,
    date: "July 3, 2022",
    location: "Venice Beach, Los Angeles",
    company: "LA Beach Parties",
    categories: "Party",
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Angular Nation Expo",
    price: 35,
    date: "October 1-3, 2022",
    location: "Google Hall, San Fransico",
    company: "ArtExpo NY",
    categories: "Technology",
  },
  {
    id: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Sports and Adventure Expo",
    price: 20,
    date: "May 20-22, 2022",
    location: "McCormick Place, Chicago",
    company: "Google",
    categories: "Sports",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = initialStories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isCheck = filtered.length !== 0 ? filtered : eventsProd;

  return (
    <div className="App">
      {/* <input
        className="input-field"
        type="text"
        onChange={handleSearch}
        placeholder="Enter title"
      />
      <ListComponeent list={filteredStories} />
      <hr />
      <LoginForm />
      <hr />
      <img src={sre} />
      <h3>Filter by event category: </h3>
      
      <FilterComponent
        list={isCheck}
        setSearch={setSearch}
        search={search}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      <hr /> */}
      <Products />
      

      {/* <hr />
      <Todos/> */}
    </div>
  );
}
export default App;
