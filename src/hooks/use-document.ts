import React from "react"
import { createDocument, deleteDocument, fetchUserDocuments } from "../services/document"
import { type Document } from "../models/documents"
import useLogin from "./use-login"
import { useNavigate } from "react-router"

export default function useDocument() {

  const [documents, setDocuments] = React.useState<Document[]>([])
  const [isLoadingDocuments, setIsLoadingDocuments] = React.useState(true)
  const [isDeletingDocument, setIsDeletingDocument] = React.useState(false)
  const { isUserLogged } = useLogin()
  const navigate = useNavigate()

  async function handleFetchDocuments() {
    setIsLoadingDocuments(true)

    const { documents } = await fetchUserDocuments()

    setDocuments(documents)

    setIsLoadingDocuments(false)

    return documents
  }

  async function handleCreateDocument(file: File) {
    setIsLoadingDocuments(true)

    await createDocument(file)

    await handleFetchDocuments()
  }

  async function deleteUserDocument(id: string) {
    setIsDeletingDocument(true)

    await deleteDocument(id)

    setIsDeletingDocument(false)

    await handleFetchDocuments()
  }

  function handleIsUserLogged () {
    if(!isUserLogged) {
      navigate("/login")
    }
  }

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleFetchDocuments()
    handleIsUserLogged()
  }, [])

  return {
    documents,
    deleteUserDocument,
    isLoadingDocuments,
    isDeletingDocument,
    handleFetchDocuments,
    handleCreateDocument
  }
}