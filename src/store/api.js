import axios from 'axios';

export const apiClient = axios.create({ baseURL: 'http://api.tvmaze.com/' });
