import React from "react";
import { TTodo } from "../../types/todo";
type TTodoContextState = {
  todosLength: number;
  todosList: TTodo[];
};
type TTodoContextAction = {
  dispatchTodos: any;
  dispatchFilter: any;
};
export type TCombinedToDoContext = TTodoContextState & TTodoContextAction;
const initContext: TCombinedToDoContext = {
  todosLength: 0,
  todosList: [],
  dispatchTodos: () => null,
  dispatchFilter: () => null,
};
const TodoContext = React.createContext<TCombinedToDoContext>(initContext);

const useTodoTheme = () => {
  const context = React.useContext(TodoContext);
  if (context === undefined) {
    throw new Error("Theme context must be wrapped in Provider");
  }
  return context;
};

export { TodoContext, useTodoTheme };
