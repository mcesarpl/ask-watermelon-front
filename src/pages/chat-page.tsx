import ButtonIcon from "../components/button-icon";
import React from "react";
import MenuIcon from "../assets/icons/Menu-Burger.svg?react"
import ChatSideBar from "../core-components/chat-sidebar";
import ChatMessages from "../core-components/chat-messages";
import ChatBackGroundMesh from "../core-components/chat-background-mesh";
import useLogin from "../hooks/use-login";
import useChat from "../hooks/use-chat";
import type { Message } from "../models/messages";
import { useNavigate } from "react-router";

export default function ChatPage() {
  const { userId, isUserLogged } = useLogin()
  const [ isSidebarOpen, setIsSidebarOpen ] = React.useState(false)
  const [ selectedChat, setSelectedChat ] = React.useState('')
  const [ isNewChat, setIsNewChat ] = React.useState(false)
  const {
    chatMessages,
    fetchMessages,
    sendMessageToModelRag,
    userChats,
    fetchChats,
    clearMessages,
    createChat,
    deleteAllChat
  } = useChat()

  const navigate = useNavigate()

  const handleIsUserLogged = () => {
    if(!isUserLogged()) {
      navigate("/login")
    }
  }

  const handleFetchMessages = async () => {
    const chats = await fetchChats()

    if(chats.length === 0) {
      return
    }

    const selectedChatId = chats[0].id;

    setSelectedChat(selectedChatId)

    await fetchMessages({
      chatId: selectedChatId,
      page: 1,
    })
  }

  const handleSelectChat = async (id: string) => {
    if(id === selectedChat) {
      return
    }

    setSelectedChat(id)

    await fetchMessages({
      chatId: id,
      page: 1,
    })
  }

  const handleDeleteChat = async (id: string) => {
    console.log({"chatDeleted": id})

    await deleteAllChat(id)
    await fetchChats()
  }

  const handleCreateChat = async () => {
    setSelectedChat('')

    setIsNewChat(true)

    clearMessages()
  }

  const handleSendMessages = async (message: Message) => {
    if (isNewChat) {
      const chatId = await createChat({
        title: message.content.slice(0, 40),
        content: message.content
      })

      setSelectedChat(chatId)

      setIsNewChat(false)

      await sendMessageToModelRag({
        content: message.content,
        userId,
        chatId: chatId
      })

      await fetchChats()
    }
    else {
      await sendMessageToModelRag(message)
    }
  }

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleFetchMessages()
    handleIsUserLogged()
  }, [])
  
  return (
      <div className="flex h-screen">
        <ChatBackGroundMesh />

        {/* Sidebar Mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden">

            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setIsSidebarOpen(false)}
            />

            <div
              className="
                relative
                h-full
                w-64
                bg-green-light
                border-r
                border-gray-200
              "
            >
              <button
                className="
                  absolute
                  top-4
                  right-4
                  text-xl
                  text-gray-300
                  cursor-pointer
                "
                onClick={() => setIsSidebarOpen(false)}
              >
                ×
              </button>
              <ChatSideBar
                chats={userChats}
                onSelectChat={handleSelectChat}
                onDeleteChat={handleDeleteChat}
                onCreateChat={handleCreateChat}
              />
            </div>

          </div>
        )}

        {/* Sidebar Desktop */}
        <div className="hidden md:block w-64 bg-green-light border-r border-gray-200">
          <ChatSideBar
            chats={userChats}
            onSelectChat={handleSelectChat}
            onDeleteChat={handleDeleteChat}
            onCreateChat={handleCreateChat}
          />
        </div>

        {/* Área do Chat */}
        <div className="flex-1 flex flex-col">
          {/* Header Mobile */}
          <div className="md:hidden p-4 border-b border-gray-200 bg-gray-100">
            <ButtonIcon
              icon={MenuIcon}
              variant="tertiary"
              onClick={() => setIsSidebarOpen(true)}
            />
          </div>
          <ChatMessages 
            messages={chatMessages}
            userId={userId}
            handleSendMessages={handleSendMessages}
            chatId={selectedChat}
          />
        </div>

      </div>
    );
}