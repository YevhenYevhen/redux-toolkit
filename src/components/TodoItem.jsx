/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatus } from '../store/todosSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleStatus({ id: todo.id }))}
      />
      {todo.title}
      <span onClick={() => dispatch(deleteTodo({ id: todo.id }))}>x</span>
    </li>
  );
};

export default TodoItem;
