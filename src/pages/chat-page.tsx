import Card from "../components/card";
import Container from "../components/container";
import InputText from "../components/input-text";
import SendIcon from "../assets/icons/Send-Icon.svg?react";
import Text from "../components/text";
import Logo from "../assets/images/Logo.svg?react"
import ButtonIcon from "../components/button-icon";
import ChatText from "../core-components/chat-text";
import ChatBackGroundMesh from "../core-components/chat-background-mesh";

export default function ChatPage() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 bg-green-light">
        <Container className="py-6 flex flex-col gap-4">

          <Logo className="h-24" />

          <Card className="p-3 cursor-pointer hover:bg-pink-light transition">
            <Text variant="body-sm-bold">Models</Text>
          </Card>

          <Card className="p-3 cursor-pointer hover:bg-pink-light transition">
            <Text variant="body-sm-bold">Documents</Text>
          </Card>

        </Container>
      </div>

      {/* Chat */}
      <div className="flex-1 bg-gray-100 flex flex-col">

        {/* Messages */}
        <Container className="flex-1 py-8 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <ChatBackGroundMesh />

            {/* LLM */}
            <ChatText emitter="secondary">
              Olá! Como posso ajudar você hoje?
            </ChatText>

            {/* User */}
            <ChatText emitter="primary">
              Explique React para mim
            </ChatText>

            {/* LLM */}
            <ChatText emitter="secondary">
              React é uma biblioteca JavaScript para construção de interfaces...
            </ChatText>

            {/* User */}
            <ChatText emitter="primary">
              Entendi.
            </ChatText>

            {/* LLM */}
            <ChatText emitter="secondary">
              Mais alguma coisa que você gostaria de saber ?
            </ChatText>
          </div>
        </Container>

        {/* Input */}
        <div className="border-t border-gray-200 p-4">
          <Container>
            <Card className="flex items-center gap-4 p-4">

              <InputText
                className="flex-1 border-none"
                placeholder="Digite sua mensagem..."
              />
              <ButtonIcon icon={SendIcon} className="-rotate-90"/>
            </Card>
          </Container>
        </div>

      </div>

    </div>
  );
}