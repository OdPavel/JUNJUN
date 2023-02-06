import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    allRemoveTodo(state, action) {
      state.todos = [];
    },
    toggleTodo(state, action) {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload);
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, allRemoveTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
