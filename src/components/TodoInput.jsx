/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../store/todosSlice';

const TodoInput = ({ text, setText }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (text.trim().length) {
      dispatch(createTodo({ text }));
      setText('');
    }
  };
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '90%', margin: '25px 40px' }}>
        <TextField
          variant="outlined"
          label="To do"
          size="small"
          fullWidth
          type="text"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
      </div>
      <div style={{ margin: '25px 1rem' }}>
        <Button type="submit" onClick={handleClick}>
          Ok
        </Button>
      </div>
    </div>
  );
};

export default TodoInput;
