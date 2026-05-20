import axios from "axios"

const API = axios.create({
  baseURL: "https://mini-saas-backend-y354.onrender.comi",
})

export default API