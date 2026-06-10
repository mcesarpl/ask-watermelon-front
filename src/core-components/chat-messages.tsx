import Card from "../components/card";
import Container from "../components/container";
import ButtonIcon from "../components/button-icon";
import InputText from "../components/input-text";
import ChatText from "./chat-text";
import SendIcon from "../assets/icons/Send-Icon.svg?react"
import type { Message } from "../models/messages";
import React from "react";


interface ChatMessagesProps {
  messages: Message[],
  userId: string,
  chatId: string,
  handleSendMessages: (message: Message) => Promise<void>
}

export default function ChatMessages({ messages, userId, handleSendMessages, chatId }: ChatMessagesProps) {
  const [inputText, setInputText] = React.useState('')
  const [handling, setHandling] = React.useState(false)

  const messagesContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesContainerRef.current?.scrollTo({
      top: messagesContainerRef.current.scrollHeight,
      behavior: "smooth",
    });

  }, [messages]);

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value || "")
  }

  const handleClickSendMessageButton = async () => {
    if (!inputText.trim()) {
      return
    }

    setInputText("")
    setHandling(true)

    await handleSendMessages({
      content: inputText,
      userId,
      chatId
    })

    setHandling(false)
  }

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && !handling) {
      handleClickSendMessageButton()
    }
  }

  return(
      <div className="flex-1 bg-gray-100 flex flex-col min-h-0">

        {/* Messages */}
        <div
          ref={messagesContainerRef}
          className="flex-1 min-h-0 overflow-y-auto py-8"
        >
          <Container>
            <div className="flex flex-col gap-4">
              {messages.map((message) => {
                const isThisUser = message.userId === userId

                return (
                  <ChatText
                    key={message.id}
                    emitter={isThisUser ? "primary" : "secondary"}
                    isModel={!!message.modelId}
                  >
                    {message.content}
                  </ChatText>
                )
              })}
            </div>
          </Container>
        </div>

        {/* Input */}
        <div className="shrink-0 border-t border-gray-200 p-4">
          <Container>
            <Card className="flex items-center gap-4 p-4 rounded-full!">

              <InputText
                className="flex-1 border-none"
                placeholder="Type your message..."
                onChange={handleInputText}
                onKeyDown={handleInputKeyDown}
                value={inputText}
              />
              <ButtonIcon 
                icon={SendIcon} 
                className="-rotate-90"
                onClick={handleClickSendMessageButton}
                handling={handling}
              />
            </Card>
          </Container>
        </div>
      </div>
  )
}