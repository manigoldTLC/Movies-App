import axios from "axios"

export const key = 'insira a chave';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});