import Text from "../components/text";
import Container from "../components/container";
import ChatRecent from "./chat-recent";
import Logo from "../assets/images/Logo.svg?react"
import type { Chat } from "../models/chats";
import ButtonIcon from "../components/button-icon";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import React from "react";
import { useNavigate } from "react-router"
import Button from "../components/button";
import LibraryIcon from "../assets/icons/Library-Icon.svg?react"
import IntelligenceIcon from "../assets/icons/Intelligence-Icon.svg?react"

interface ChatSideBarProps {
  chats: Chat[]
  onSelectChat: (chatId: string) => void
  onDeleteChat: (chatId: string) => Promise<void>
  onCreateChat: () => void
}

export default function ChatSideBar({
  chats,
  onSelectChat,
  onDeleteChat,
  onCreateChat
}: ChatSideBarProps) {

  const [isDeletingChat, setIsDeletingChat] = React.useState(false)
  const navigate = useNavigate()

  const handleDeleteChat = async (chatId: string) => {
    setIsDeletingChat(true)
    await onDeleteChat(chatId)
    setIsDeletingChat(false)
  }

  return(
    <Container className="py-6 h-full flex flex-col gap-4">

      <Logo className="h-24" />

      <Button 
        icon={IntelligenceIcon}
      >
        Models
      </Button>

      <Button 
        icon={LibraryIcon}
        onClick={() => navigate("/documents")}
      >
        Documents
      </Button>

      <div className="flex items-center justify-between mt-4">
        <Text
          variant="body-sm-bold"
          className="text-green-dark"
        >
          Recent Chats
        </Text>

        <ButtonIcon 
          icon={PlusIcon} 
          variant="tertiary"
          onClick={() => onCreateChat()}
          handling={false}
        />
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col gap-2">
        {chats.map(chat => (
          <ChatRecent
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            onDelete={() => handleDeleteChat(chat.id)}
            handling={isDeletingChat}
          >
            {chat.title}
          </ChatRecent>
        ))}
      </div>

    </Container>
  )
}