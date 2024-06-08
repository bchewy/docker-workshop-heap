import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://0.0.0.0:8080',
});

// instance.interceptors.request.use(request => {
//   console.log('Axios instance is being used with request:', request);
//   return request;
// });

export default instance;
