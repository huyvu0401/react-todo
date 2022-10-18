import React, { useReducer, createContext } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { v4 as uuidv4 } from "uuid";
import ThemeProvider from "./components/TodoProvider";
import { useTodoTheme } from "./context/todo/context";

const initialTodos = [
  { id: uuidv4(), name: "Eat", isDone: true },
  { id: uuidv4(), name: "Sleep", isDone: false },
  { id: uuidv4(), name: "Repeat", isDone: false },
];

const todoReducer = (state: typeof initialTodos, action: any) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), name: action.todo, isDone: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.id) return { ...todo, isDone: !todo.isDone };
        return todo;
      });
    case "UPDATE":
      return state.map((todo) => {
        if (todo.id === action.id) return { ...todo, name: action.newName };
        return todo;
      });
    default:
      throw new Error();
  }
};

const filterReducer = (state: string, action: any) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_ACTIVE":
      return "ACTIVE";
    case "SHOW_COMPLETED":
      return "COMPLETED";
    default:
      throw new Error();
  }
};

export const TodoContext = createContext<any>(null);

const MainLayout = () => {
  const { todosLength, todosList } = useTodoTheme();
  console.log(todosLength, "todosLength");
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") {
      return true;
    }
    if (filter === "ACTIVE" && !todo.isDone) {
      return true;
    }
    if (filter === "COMPLETED" && todo.isDone) {
      return true;
    }
    return false;
  });

  return (
    <div className="todoapp stack-large">
      <TodoForm />
      <Filters dispatch={dispatchFilter} />
      <h2 id="list-heading">{filteredTodos.length} tasks remaining</h2>
      <TodoList todos={filteredTodos} />
    </div>
  );
};
const App = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") {
      return true;
    }
    if (filter === "ACTIVE" && !todo.isDone) {
      return true;
    }
    if (filter === "COMPLETED" && todo.isDone) {
      return true;
    }
    return false;
  });

  return (
    <React.Fragment>
      <TodoContext.Provider value={dispatchTodos}>
        <div className="todoapp stack-large">
          <TodoForm />
          <Filters dispatch={dispatchFilter} />
          <h2 id="list-heading">{filteredTodos.length} tasks remaining</h2>
          <TodoList todos={filteredTodos} />
        </div>
      </TodoContext.Provider>
      {/* ---------------------------------------------------------------------------------------------- */}
      <ThemeProvider>
        <MainLayout />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
