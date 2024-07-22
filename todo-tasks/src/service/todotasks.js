import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/todotasks');
}

export default {getAll};