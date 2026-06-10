import useLocalStorage from "../services/local-storage-manager"
import { login } from "../services/auth"

export default function useLogin() {
  const [accessToken, setAccessToken] = useLocalStorage('access_token', '')
  const [userId, setUserId] = useLocalStorage('userId', '')
  const [loginCredentials, setLoginCredentials] = 
    useLocalStorage<loginRequestProps>(
      'login_credentials', 
      {email: "", password: ""}
    )

  interface loginRequestProps {
    email: string,
    password: string,
  }

  async function loginRequest({ email, password }: loginRequestProps) {
    setLoginCredentials({ email, password })
    const { accessToken, userId } = await login({email, password})

    setUserId(userId)
    setAccessToken(accessToken)
  }

  function isUserLogged(): boolean {
    if(!accessToken || accessToken.length === 0) {
      return false
    }

    return true
  }

  return {
    userId,
    loginRequest,
    accessToken,
    loginCredentials,
    isUserLogged
  }
}