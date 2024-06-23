import React from "react";

function Checkbox({ name, onChange }) {
  return (
    <div>
      <input type="checkbox" value={name} id={name} name={name} onChange={onChange} />
      &nbsp;
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default Checkbox;
