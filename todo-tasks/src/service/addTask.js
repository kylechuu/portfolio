import httpClient from '../http-common';

const addTask = ({newTask, onchangeState, todoTasks}) => {
    return httpClient.post('/todotasks', newTask)
      .then(response => {
        console.log(response);
        onchangeState()
      })
      .catch(error => console.error('Error!!'))
}

export default {addTask};