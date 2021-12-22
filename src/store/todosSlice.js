/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { todosApi } from '../api/todosService';
import { setError } from './utils/setError';
import { setFullfilled } from './utils/setFullfiled';
import { setPending } from './utils/setPending';

export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await todosApi.fetchTodos(10);
      if (response.status !== 200) {
        throw new Error('A server error occured...');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async ({ text }, { rejectWithValue, dispatch }) => {
    try {
      const todo = {
        id: Date.now().toString(),
        title: text,
        userId: 1,
        completed: false,
      };
      const response = await todosApi.createTodo(todo);
      if (response.status !== 201) {
        throw new Error('A server error occured');
      }
      dispatch(addTodo({ todo }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async ({ id }, { rejectWithValue, dispatch }) => {
    try {
      const response = await todosApi.deleteTodo(id);

      if (response.status !== 200) {
        throw new Error('A server error occured...');
      }
      dispatch(removeTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const toggleStatus = createAsyncThunk(
  'todos/toggleStatus',
  async ({ id }, { rejectWithValue, dispatch, getState }) => {
    try {
      const todoToToggle = getState().todos.todos.find(
        (todo) => todo.id === id
      );
      const response = await todosApi.toggleTodo(id, todoToToggle.completed);
      if (response.status !== 200) {
        throw new Error('A server error occured...');
      }
      dispatch(toggleIsCompleted({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload.todo);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleIsCompleted(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
  extraReducers: {
    [getTodos.pending]: setPending,
    [getTodos.fulfilled]: setFullfilled,
    [getTodos.rejected]: setError,
    [deleteTodo.pending]: setPending,
    [deleteTodo.fulfilled]: setFullfilled,
    [deleteTodo.rejected]: setError,
    [toggleStatus.pending]: setPending,
    [toggleStatus.fulfilled]: setFullfilled,
    [toggleStatus.rejected]: setError,
    [createTodo.pending]: setPending,
    [createTodo.fulfilled]: setFullfilled,
    [createTodo.rejected]: setError,
  },
});

const { addTodo, removeTodo, toggleIsCompleted } = todosSlice.actions;
export default todosSlice.reducer;
