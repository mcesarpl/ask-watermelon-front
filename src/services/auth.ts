import { api } from "./api"

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string,
  userId: string,
}

export async function login(
  payload: LoginRequest
) {
  const { data } = await api.post<LoginResponse>(
    "/sessions",
    payload
  )

  return {
    accessToken: data.access_token,
    userId: data.userId,
  }
}