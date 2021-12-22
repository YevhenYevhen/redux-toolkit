/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './css/styles.css';
import { getTodos } from './store/todosSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        {status === 'loading' && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <TodoList />
        <TodoInput text={text} setText={setText} />
      </div>
    </div>
  );
}

export default App;
