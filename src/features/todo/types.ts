export type TodoId = number;

export type Todo = {
  id: TodoId;
  text: string;
  isDone: boolean;
};

export type TodoState = {
  list: Todo[];
};

export type TodoAction =
  | { type: 'CREATE'; payload: Todo }
  | { type: 'TOGGLE'; payload: Todo }
  | { type: 'DELETE'; payload: TodoId };

export type TodoContextValue = {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
};
