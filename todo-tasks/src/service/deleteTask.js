import httpClient from '../http-common';

const deleteTask = (id) => {
    return httpClient.delete(`/todotasks/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log('Error!!', error))
}

export default {deleteTask};