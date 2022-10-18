import React, { useState, useContext } from "react";
import { TodoContext } from "../App";

const Form = () => {
  const dispatch = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const handleChangeInput = (e: any) => setTodo(e.target.value);

  const handleSubmit = (e: any) => {
    if (todo) {
      dispatch({ type: "ADD", todo });
    }
    setTodo("");
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        value={todo}
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        onChange={handleChangeInput}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};

export default Form;
