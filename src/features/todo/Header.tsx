import React, { useMemo } from 'react';
import { useTodoContext } from './TodoProvider';

function Header(): JSX.Element {
  const { state } = useTodoContext();
  const todos = state.list;
  const pending = useMemo(() => todos.filter((t) => !t.isDone), [todos]);
  const allIsDone = !pending.length;

  return (
    <h1>
      <span>Do it</span>
      {allIsDone ? (
        <small>🎉</small>
      ) : (
        <small>
          {pending.length}/{todos.length} left
        </small>
      )}
    </h1>
  );
}

export default Header;
