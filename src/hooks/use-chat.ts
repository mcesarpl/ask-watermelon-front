import type { Chat } from "../models/chats"
import type { Message } from "../models/messages"
import { createNewChat, deleteChat, fetchChatMessages, fetchUserChats, sendRagMessage } from "../services/chat"
import React from "react"

export default function useChat() {
  const [ chatMessages, setChatMessages] = React.useState<Message[]>([])
  const [ userChats, setUserChats] = React.useState<Chat[]>([])

  interface fetchMessagesRequestProps {
    chatId: string,
    page: number,
  }

  interface createChatRequestProps {
    title: string,
    content: string,
  }

  async function createChat({title, content}: createChatRequestProps) {
    const { chatId } = await createNewChat(title, content)

    return chatId
  }

  async function fetchChats() {
    const { chats } = await fetchUserChats()

    setUserChats(chats)

    return chats
  }

  async function fetchMessages({ chatId, page }: fetchMessagesRequestProps) {
    const { messages } = await fetchChatMessages(chatId, page)

    setChatMessages(messages.reverse())
  }

  async function clearMessages() {

    setChatMessages([])
  }

  async function deleteAllChat(chatId: string) {
    await deleteChat(chatId)
  }

  async function sendMessageToModelRag(message: Message) {
    const contextMessages = [
      ...chatMessages,
      message
    ]

    setChatMessages(prev => [
      ...prev,
      message
    ])

    const { response } = await sendRagMessage(
      message,
      contextMessages
    )

    setChatMessages(prev => [
      ...prev,
      response
    ])
  }

  return {
    sendMessageToModelRag,
    fetchMessages,
    chatMessages,
    fetchChats,
    userChats,
    clearMessages,
    createChat,
    deleteAllChat
  }
}