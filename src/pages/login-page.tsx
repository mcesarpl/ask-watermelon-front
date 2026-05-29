import Container from "../components/container";
import Logo from "../assets/images/Logo.svg?react";
import Text from "../components/text";
import InputText from "../components/input-text";
import Button from "../components/button";

export default function LoginPage() {
  return(
    <div className="flex min-h-screen">
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

            <InputText placeholder="e-mail" />
            <InputText placeholder="password" />

            <Button>Login</Button>

          </div>
        </Container>
      </div>
    </div>
  )
}