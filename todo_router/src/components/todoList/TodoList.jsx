import { useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';

const TodoList = () => {
  const todos = useSelector((store) => store.todos.todos);

  return (
    <div className={'row container mx-auto '}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
