import axios from 'axios';
const URL = '/data.json';

export function usersListAll(){
    const request = axios.get(`${URL}`)
        .then(response => response.data);
    return {
        type: 'GET_USERS_ALL',
        payload: request
    }
}