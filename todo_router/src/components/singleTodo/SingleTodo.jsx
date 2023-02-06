import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TodoItem from '../todoItem/TodoItem';
import styles from './SingleTodo.module.css';

const SingleTodo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const params = useParams();
  const singleTodo = todos.find((todo) => todo.id === params.id);

  return (
    <div className={styles.root}>
      <h1>Single Todo</h1>
      {singleTodo ? (
        <TodoItem todo={singleTodo} />
      ) : (
        <Link to="/" className="btn btn-primary">
          Go back
        </Link>
      )}
    </div>
  );
};
export default SingleTodo;
