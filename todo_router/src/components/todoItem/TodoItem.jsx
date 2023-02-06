import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../store/todoSlice';
import { Link } from 'react-router-dom';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div key={todo.id} className={'col-4 '}>
      <div className={styles.taskWrapper}>
        <Link
          to={todo.id}
          className={styles.taskHeading}
          title="Для детального рассмотрения Todo нажми">
          {todo.title}
        </Link>
        <div className={styles.taskDescription}>{todo.description}</div>
        <hr />
        <label className="completed form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span>Завершено ?</span>
        </label>
        <hr />
        <button className="btn btn-danger delete-btn" onClick={() => dispatch(removeTodo(todo.id))}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
