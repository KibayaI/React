import React from "react";
import ListComponent from "./ListComponent";
import Checkbox from "./Checkbox";
import { eventsProd } from "../Tester/src/App";

function FilterComponent({ list, search, setSearch, filtered, setFiltered }) {
  function checkInput(event) {
    setSearch(event.target.value);
  }

function onchange(event) {
  if (event.target.checked) {
    const cat_filter = eventsProd.filter(
      (cat) => cat.categories === event.target.value
    );

    setFiltered((t) => [...t, ...cat_filter]);
  } else {
    const count = filtered.filter(
      (remove) => remove.categories === event.target.value
    );

    const start = filtered
      .map((start) => start.categories)
      .indexOf(event.target.value);

    filtered.splice(start, count.length);

    setFiltered((filtered) => [...filtered]);
  }
}

  const filtered_prod = list.filter((filtered) =>
    filtered.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="checkboxes">
        <Checkbox name="Music" onChange={onchange} />
        <Checkbox name="Movie" onChange={onchange} />
        <Checkbox name="Sports" onChange={onchange} />
        <Checkbox name="Art" onChange={onchange} />
      </div>

      <div className="list-output">
        <input
          className="input-field"
          type="text"
          placeholder="Search for an event"
          onChange={checkInput}
        />

        <br />

        {filtered_prod.length !== 0 ? (
          <ListComponent list={filtered_prod} />
        ) : (
          <p className="error-search">
            {search} Doesn't exist....
            <br />
            Check the spelling
          </p>
        )}
      </div>
    </>
  );
}

export default FilterComponent;
