import React, { useState } from "react";
import ListComponeent from "./Components/List";
import LoginForm from "./Login/LoginForm";
import './App.css'

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

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = initialStories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <input type="text" onChange={handleSearch} placeholder="Enter title"/> 
      <ListComponeent list={filteredStories} />
      <hr />
      <LoginForm />
    </div>
  );
}
export default App;
