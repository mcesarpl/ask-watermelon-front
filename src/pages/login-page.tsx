import Container from "../components/container"
import Logo from "../assets/images/Logo.svg?react"
import Text from "../components/text"
import InputText from "../components/input-text"
import Button from "../components/button"
import ChatBackGroundMesh from "../core-components/chat-background-mesh"
import useLogin from "../hooks/use-login"
import React from "react"
import { useNavigate } from "react-router"

export default function LoginPage() {

  const {loginRequest, loginCredentials} = useLogin()
  const [email, setEmail] = React.useState(loginCredentials.email || "")
  const [password, setPassword] = React.useState(loginCredentials.password || "")
  const [isSendingLoginRequest, setIsSendingLoginRequest] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const navigate = useNavigate()

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value || "")
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value || "")
  }

  const handleLoginRequest = async () => {
    setIsSendingLoginRequest(true)

    try {
      await loginRequest({ email, password })

      navigate("/chat")
    } catch (error) {
      console.log(error)
      setError("Invalid e-mail or password")
    }

    setIsSendingLoginRequest(false)
  }

   return(
    <div className="flex min-h-screen">
      <ChatBackGroundMesh opacity={6}/>
      <div className="hidden md:flex md:w-1/2 bg-green-light items-center justify-center">
        <Logo className="h-24" />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Container>
          <div className="flex flex-col gap-8 w-full max-w-md">

            <Logo className="h-16 md:hidden self-center" />

            <Text
              variant="body-md-bold"
              className="text-pink-dark"
            >
              Login
            </Text>

            <InputText 
              placeholder="e-mail"
              onChange={handleEmail}
              value={email}
            />
            <InputText
              placeholder="password"
              onChange={handlePassword}
              type="password"
              value={password}
            />

            {error && (
              <Text
                variant="body-sm-bold"
                className="text-pink-dark"
              >
                {error}
              </Text>
            )}

            <Button
              onClick={handleLoginRequest}
              handling={isSendingLoginRequest}
            >
              Login
            </Button>

          </div>
        </Container>
      </div>
    </div>
  )
}