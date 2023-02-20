import React from 'react';
import TodoItem from './TodoItem';
import { useTodoContext } from './TodoProvider';
import type { Todo } from './types';

function TodoList(): JSX.Element {
  const { state } = useTodoContext();
  const todos = state.list;

  return (
    // Safari does not treat ul elements as lists, if list-style is disabled.
    // This is intentional: https://bugs.webkit.org/show_bug.cgi?id=170179#c1
    // Hence:
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul className="js-list" role="list">
      {!todos.length ? (
        <p className="empty">
          All is done! Go stretch your body,
          <br />
          you marvelous creature :D
        </p>
      ) : (
        todos.map((t: Todo) => <TodoItem key={t.id} item={t} />)
      )}
    </ul>
  );
}

export default TodoList;
