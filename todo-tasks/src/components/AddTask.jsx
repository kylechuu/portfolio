import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import todotasksService from '../service/addTask';

const AddTask = (props) => {

  const [newTask, setNewTask] = useState("")

  const createTask = (onChangedTasks) => {
    // todotasksService.addTask({
    //   "taskDescription": newTask
    // }).then(
    //   console.log("Task was added successfully!")
    // );
    
    onChangedTasks([...props.todoTasks, newTask]);
    setNewTask("")
  }
  
  return (
    <div style={{padding: "5px"}}> 
      <Input 
        placeholder="Task Description"
        value={newTask}
        onChange={(e) => {setNewTask(e.target.value)}}
      />
      <Button 
        variant="contained" 
        onClick={() => createTask(props.onChangedTasks)}
      >
        Add
      </Button>      
    </div>
  )
}

export default AddTask



