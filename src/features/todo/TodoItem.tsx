import React from 'react';
import confetti from 'canvas-confetti';
import type { Todo, TodoAction, TodoId } from './types';
import { useTodoContext } from './TodoProvider';

const launchConfetti = (): void => {
  const maybePromise = confetti();
  if (!maybePromise) return;
  maybePromise.catch(() => {});
};

type Props = {
  item: Todo;
};

function TodoItem({ item }: Props): JSX.Element {
  const { dispatch } = useTodoContext();

  const toggle = (t: Todo): void => {
    const willLaunchConfetti = !t.isDone;
    const action: TodoAction = { type: 'TOGGLE', payload: t };
    dispatch(action);
    if (willLaunchConfetti) launchConfetti();
  };

  const remove = (id: TodoId): void => {
    const action: TodoAction = { type: 'DELETE', payload: id };
    dispatch(action);
  };

  return (
    <li>
      <input
        id={`t${item.id}`}
        type="checkbox"
        className="toggle js-toggle"
        title="Mark this task as completed"
        checked={item.isDone}
        onChange={() => toggle(item)}
      />
      <label htmlFor={`t${item.id}`} className="particle-text confetti">
        {item.text}
      </label>
      <button
        type="button"
        className="text destructive js-delete"
        title="Delete this task"
        onClick={() => remove(item.id)}
      >
        &times;
      </button>
    </li>
  );
}

export default TodoItem;
