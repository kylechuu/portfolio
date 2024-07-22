import {useEffect, useState} from 'react';
import todotasksService from './service/todotasks';
import deleteTodoTaskService from './service/deleteTask';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {BroserRouter, Switch, Route} from "react-router-dom";
import AddTask from "./components/AddTask";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TasksList from './components/TasksList';

const App = () => {

  const [todoTasks, setTodoTasks] = useState([]);

  useEffect(() => {
    todotasksService.getAll()
    .then(response => {
      console.log('Printing todatask data', response.data);
      setTodoTasks(response.data.map((task)=> {
        return task.taskDescription
      }));
    })
    .catch(err => {
      console.log('Exception in setting todotask', err);
    })
  }, [])
  console.log("todotask state:" ,todoTasks)
  return (
    
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div>
        <h3> List of todo tasks</h3>
        <AddTask
          todoTasks={todoTasks}
          onChangedTasks={setTodoTasks}
        />
        <Box sx={{ mt: 1 }}>
          <List>
            {/* <TransitionGroup> */}
            {todoTasks.map((item, id) => (
              // <Collapse key={item.id}>
              <TasksList 
                key={id}
                id={id}
                taskDescription={item}
                todoTasks={todoTasks}
                onChangedTasks={setTodoTasks}
              />
              // </Collapse>
            ))}
            {/* </TransitionGroup> */}
          </List>
        </Box>
        

      </div>
    </div>      
  );
}

export default App;