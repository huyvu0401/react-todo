export type TTodo = {
  id: string;
  name: string;
  isDone?: boolean;
};

export type TTodoList = {
  todos: TTodo[];
};

export type TTodoItem = {
  todo: TTodo;
};
