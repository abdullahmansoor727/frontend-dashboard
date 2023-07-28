import axios from 'axios';

const axiosInstance = axios.create({
  // this is usually set using environment variables from the .env file but is hard coded here for simplicity
  baseURL: 'https://dummyjson.com/'
});

export default axiosInstance;
