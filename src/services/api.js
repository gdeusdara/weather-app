import axios from "axios";

const api = axios.create({
  baseURL: process.env.API,
});

api.defaults.params = {}
api.defaults.params['lang'] = 'pt_br';
api.defaults.params['units'] = 'metric';
api.defaults.params['appid'] = process.env.SECRET;

export default api;
