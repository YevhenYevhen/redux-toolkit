/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './css/styles.css';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <TodoList />
        <TodoInput text={text} setText={setText} />
      </div>
    </div>
  );
}

export default App;
