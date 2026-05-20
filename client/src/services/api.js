import axios from "axios"

const API = axios.create({
  baseURL: "https://mini-saas-backend-y354.onrender.com",
})

export default API