import axios from "axios"

export const key = 'inserir chave';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});