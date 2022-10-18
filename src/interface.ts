export interface ITodo {
    id: string;
    name: string;
    isDone?: boolean;
}

export interface ITodoList {
    todos: ITodo[];
}

export interface ITodoItem {
    todo: ITodo;
}

