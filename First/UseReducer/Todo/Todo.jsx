import React from "react";
import { ACTIONS } from "./ToDoListComponent";
import "./todo.css";

function Todo({ todo, dispatch }) {
  function toggle() {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
    console.log(!todo.complete);
  }

  function deleteTODO() {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
  }

  return (
    <div className="todo">
      <div
        style={{ color: todo.complete ? " rgb(7, 245, 7)" : "rgb(255, 0, 0)" }}
        className="todo__title"
      >
        {todo.name}&nbsp;&nbsp;&nbsp;
        {todo.complete ? "Completed" : "Not Completed"}
      </div>
      <div className="todo__buttons">
        {/* //add functionality to  dispatch toggle todo function and delete todo*/}
        <button onClick={toggle} className="todo__toggle">
          Toggle
        </button>
        {/* //add functionality to  dispatch delete function and delete todo*/}
        <button onClick={deleteTODO} className="todo__delete">
          Delete
        </button>
      </div>
      <br />
    </div>
  );
}

export default Todo;
