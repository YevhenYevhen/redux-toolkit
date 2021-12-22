/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Container, CssBaseline, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './css/styles.css';
import { getTodos } from './store/todosSlice';
import { ReactComponent as Loader } from './assets/Loader.svg';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <div className="app-wrapper">
        <Paper elevation={3}>
          <div style={{ paddingTop: '20px' }}>
            <Typography variant="h3" gutterBottom align="center">
              To do list
            </Typography>
          </div>
          <div className="server-info">
            {status === 'loading' && <Loader />}
            {error && <Typography>{error}</Typography>}
          </div>
          <div className="content">
            <div className="todo-list">
              <TodoList />
            </div>
          </div>
          <TodoInput text={text} setText={setText} />
        </Paper>
      </div>
    </Container>
  );
}

export default App;
