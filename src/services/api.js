import axios from "axios";

const api = axios.create({
  baseURL: process.env.API,
});

api.defaults.params['appid'] = process.env.SECRET;

export default api;
