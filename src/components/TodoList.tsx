import { ITodoList } from "../interface";
import Todo from "./Todo";

const TodoList = (props: ITodoList) => {
  return (
    <ul
      className="todo-list stack-large stack-exception"
    >
      {props.todos.map((todo) => {
        return <Todo todo={todo} key={todo.id}></Todo>
      })}
    </ul>
  );
};

export default TodoList;
