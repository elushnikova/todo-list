import React from 'react';
import CreateForm from './CreateForm';
import Header from './Header';
import TodoList from './TodoList';
import TodoProvider from './TodoProvider';

function TodoPage(): JSX.Element {
  return (
    <TodoProvider>
      <Header />
      <CreateForm />
      <TodoList />
    </TodoProvider>
  );
}

export default TodoPage;
