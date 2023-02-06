import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import NotFound from './components/notFound';
import SingleTodo from './components/singleTodo';
import MainLayout from './components/layouts/MainLayout';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<TodoList />} />
          <Route path="todo/:id" element={<SingleTodo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
