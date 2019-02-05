import axios from 'axios';
const URL = 'http://localhost:3000/data.json';

export function usersListAll(){
    const request = axios.get(`${URL}`)
        .then(response => response.data);
    return {
        type: 'GET_USERS_ALL',
        payload: request
    }
}