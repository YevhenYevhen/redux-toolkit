/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { Button, Checkbox, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatus } from '../store/todosSlice';
import { ReactComponent as DeleteIcon } from '../assets/Delete.svg';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="li-container">
      <li>
        <Checkbox
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleStatus({ id: todo.id }))}
        />
        <Typography component="span" variant="body1">
          {todo.title}
        </Typography>
      </li>
      <Button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default TodoItem;
