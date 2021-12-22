import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: Date.now().toString(),
        text: action.payload.text,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleIsCompleted(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.isCompleted = !toggledTodo.isCompleted;
    },
  },
});

export const { addTodo, deleteTodo, toggleIsCompleted } = todosSlice.actions;
export default todosSlice.reducer;
