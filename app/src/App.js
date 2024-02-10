import React, { useState } from 'react';
import { AppBar, Container, Typography, Paper } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    if (text.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text }]);
    }
  };

  const handleEditTodo = (id, newText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <AppBar position="static">
        <Container>
          <Typography variant="h5">Todo App</Typography>
        </Container>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: '20px' }}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <TodoForm onAddTodo={handleAddTodo} />
          <TodoList
            todos={todos}
            onEditTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </Paper>
      </Container>
    </div>
  );
}

export default TodoApp;
