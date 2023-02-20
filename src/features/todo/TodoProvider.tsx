import React, { createContext, useContext, useMemo, useReducer } from 'react';
import type { Todo, TodoAction, TodoContextValue, TodoState } from './types';

const defaultTodo: Todo = {
  id: 0,
  text: 'Plan tasks for today',
  isDone: false,
};

const initialState: TodoState = {
  list: [defaultTodo],
};
export const TodoContext = createContext<TodoContextValue>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'CREATE': {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }

    case 'TOGGLE': {
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isDone: !todo.isDone }
            : todo,
        ),
      };
    }

    case 'DELETE': {
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };
    }

    default: {
      return state;
    }
  }
};

type Props = {
  children: React.ReactNode[];
};

export function useTodoContext(): TodoContextValue {
  return useContext(TodoContext);
}

export default function TodoProvider({ children }: Props): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
}
