/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todosSlice';

const TodoInput = ({ text, setText }) => {
  const dispatch = useDispatch();
  const createTodo = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };
  return (
    <div>
      <label>To do</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button type="submit" onClick={createTodo}>
        Ok
      </button>
    </div>
  );
};

export default TodoInput;
