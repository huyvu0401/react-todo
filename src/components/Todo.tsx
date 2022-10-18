import React, { useState, useContext } from "react";
import { TodoContext } from '../App';
import { ITodoItem } from "../interface";

const Todo = ({ todo }: ITodoItem) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const dispatch = useContext(TodoContext);

  const handleToggle = () => {
    dispatch({
      id: todo.id,
      type: 'TOGGLE'
    });
  };

  const handleDelete = () => {
    dispatch({
      id: todo.id,
      type: 'REMOVE'
    })
  }

  const handleNameChange = (e: any) => {
    setNewName(e.target.value);
  }

  const handleUpdate = (e: any) => {
    e.preventDefault();
    dispatch({ type: "UPDATE", id: todo.id, newName });
    setNewName("");
    setEditing(false);
  };

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleUpdate}>
      <div className="form-group">
        <label className="todo-label" htmlFor={todo.name}>
          New name for {todo.name}
        </label>
        <input value={newName} onChange={handleNameChange} id={todo.id} className="todo-text" type="text" />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {todo.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {todo.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={todo.id}
          type="checkbox"
          defaultChecked={todo.isDone}
          onChange={handleToggle}
        />
        <label className="todo-label" htmlFor={todo.id}>
          {todo.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{todo.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={handleDelete}
        >
          Delete <span className="visually-hidden">{todo.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
};

export default Todo;
