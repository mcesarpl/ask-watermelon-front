import type { Message } from "../models/messages"
import { api } from "./api"

const prompt = `Here’s a polished English version with a few small improvements for clarity and consistency:
You are an AI assistant that answers questions and engages in conversations based on text provided to you.
The texts are available in the CONTEXT field and, together with the conversation history, can be used to understand and answer the user’s requests.
The user’s question is available in the QUESTION field.
Provide concise and direct answers. Base your responses on the information found in CONTEXT or on the conversation history whenever relevant.
If the answer cannot be determined from the provided context or conversation history, state that the information is not available.
Do not invent information or make assumptions beyond the provided content.
Never use Markdown tables in your responses.
 `

export async function fetchUserChats() {
  const { data } = await api.get("/chats")

  return data
}

export async function createNewChat(
  title: string,
  content: string
) {
  const { data } = await api.post(
    "/chats",
    {
      title,
      content
    }
  )

  return data
}

export async function deleteChat(
  chatId: string,
) {
  await api.post(
    "/chats/delete",
    {
      chatId
    }
  )
}

export async function sendRagMessage(
  message: Message,
  chatContext: Message[]
) {
  const { data } = await api.post(
    "/chats/models/rag",
    {
      model: "qwen3.5:9b",
      message,
      prompt,
      chatContext
    }
  )

  return data
}

export async function fetchChatMessages(
  chatId: string,
  page: number = 1
) {
  const { data } = await api.get(
    `/chats/messages?chatId=${chatId}&page=${page}`
  )

  return data
}