import React, { useState } from 'react';
import { useTodoContext } from './TodoProvider';
import type { Todo, TodoAction } from './types';

const generateId = (() => {
  let lastId = 0;
  return function increment() {
    lastId += 1;
    return lastId;
  };
})();

function CreateForm(): JSX.Element {
  const [text, setText] = useState('');
  const { dispatch } = useTodoContext();

  const create = (event: React.FormEvent): void => {
    event.preventDefault();

    const newTodo: Todo = { id: generateId(), text, isDone: false };
    const action: TodoAction = { type: 'CREATE', payload: newTodo };

    dispatch(action);
    setText('');
  };

  return (
    <form action="#" className="create" onSubmit={create}>
      <input
        type="text"
        name="text"
        placeholder="Plan a task…"
        value={text}
        onChange={(event) => setText(event.target.value)}
        required
        // Task planning is primary functionality
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      />
      <button type="submit" className="primary" title="Create this task">
        Go
      </button>
    </form>
  );
}

export default CreateForm;
