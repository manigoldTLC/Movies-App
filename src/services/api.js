import axios from "axios"

export const key = '9d72b9c52405c85f46da9bb70d7a61b2';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});