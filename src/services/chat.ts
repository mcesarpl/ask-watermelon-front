import type { Message } from "../models/messages"
import { api } from "./api"

const prompt = `Você é uma inteligencia artificial que responde perguntas e conversa sobre texto que serão enviados para você.
 Os Textos podem ser encontrado no campo CONTEXT, e juntamente com a conversa anterior podem ser usados para consulta e resposta do que o usuario vem pedindo.
 A pergunta do usuario esta no campo QUESTION. Responda de maneira resumida. Responda com base nos textos em CONTEXT ou com base no histórico da conversa.
 Nunca utilize tabelas markdown nas respostas.
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