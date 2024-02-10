import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function TodoItem({ todo, onEditTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEditTodo(todo.id, editValue);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        {isEditing ? (
          <EditTextField
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </Grid>
      <Grid item xs={3}>
        {isEditing ? (
          <SaveButton onClick={handleSaveEdit} />
        ) : (
          <EditButton onClick={handleEdit} />
        )}
      </Grid>
      <Grid item xs={1}>
        <DeleteButton onClick={handleDelete} />
      </Grid>
    </Grid>
  );
}

function EditTextField({ value, onChange }) {
  return (
    <TextField
      fullWidth
      value={value}
      onChange={onChange}
    />
  );
}

function EditButton({ onClick }) {
  return (
    <Button variant="outlined" startIcon={<EditIcon />} onClick={onClick}>
      Edit
    </Button>
  );
}

function SaveButton({ onClick }) {
  return (
    <Button variant="outlined" onClick={onClick}>
      Save
    </Button>
  );
}

function DeleteButton({ onClick }) {
  return (
    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={onClick}>
      Delete
    </Button>
  );
}

export default TodoItem;
