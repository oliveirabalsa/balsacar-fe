import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081/api', // Your API base URL
  timeout: 5000 // Timeout in milliseconds
})

export default axiosInstance
