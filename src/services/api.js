import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnibackend.herokuapp.com'
});

export default api;

