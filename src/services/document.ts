import { api } from "./api"

export async function fetchUserDocuments(page: number = 1) {
  const { data } = await api.get(
    `/documents?page=${page}`
  )

  return data
}

export async function createDocument(file: File) {
  const formData = new FormData()

  formData.append("file", file)

  const { data } = await api.post(
    "/documents/create",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  )

  return data
}

export async function deleteDocument(documentId: string) {
  await api.post(
    "/documents/delete",
    {
      documentId
    },
  )
}