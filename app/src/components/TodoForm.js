import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new todo..."
        sx={{ width: 'calc(80% - 50px)' }} // Adjust the width as needed
      />
      <Button type="submit" variant="contained" sx={{ ml: 2, mt:1 }}>
        Add Todo
      </Button>
    </form>
  );
}

export default TodoForm;
