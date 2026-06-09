import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use((config) => {
  const rawToken = localStorage.getItem("access_token")

  if(rawToken) {
    const token = JSON.parse(rawToken)
    config.headers.Authorization =
      `Bearer ${token}`
  }

  return config
})