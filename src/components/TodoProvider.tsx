import React from "react";
import { TodoContext, TCombinedToDoContext } from "../context/todo/context";
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const value: TCombinedToDoContext = {
    todosLength: 0,
    todosList: [],
    dispatchTodos: () => null,
    dispatchFilter: () => null,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
export default ThemeProvider;
