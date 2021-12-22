import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
});

export const todosApi = {
  fetchTodos(limit = 10) {
    return instance.get(`?_limit=${limit}`);
  },
  createTodo(todo) {
    return instance.post('/', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
  },
  deleteTodo(id) {
    return instance.delete(`/${id}`);
  },
  toggleTodo(id, isCompleted) {
    return instance.patch(`/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !isCompleted }),
    });
  },
};
