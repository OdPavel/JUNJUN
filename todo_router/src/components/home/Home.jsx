import React from 'react';
import Form from '../form/Form';
import TodoItem from '../todoItem/TodoItem';
import { useSelector } from 'react-redux';

const Home = () => {
  const todos = useSelector((state) => state.todos.todos);
  const data = todos.filter((todo) => todo.completed !== true);

  return (
    <>
      <Form />
      {data.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default Home;
