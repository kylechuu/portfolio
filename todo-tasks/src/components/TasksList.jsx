import React from 'react'
import {useEffect, useState} from 'react';
import deleteTodoTaskService from '../service/deleteTask';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const TasksList = (props) => {
  // const [task, setTask] = useState('')

  // useEffect(() => {
  //   setTask(props.taskDescription)
  // }, [])

  const handleDelete = (onChangedTasks) => {
    // deleteTodoTaskService.deleteTask(id)
    const removeArray = [...props.todoTasks].filter((todo, index) => index !== props.id);
    console.log(removeArray)
    onChangedTasks(removeArray)
  }

  return (
    <ListItem 
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={()=>handleDelete(props.onChangedTasks)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={props.taskDescription} />
    </ListItem>
  );
}

export default TasksList