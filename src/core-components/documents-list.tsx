import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import DocumentItem from "./document-item";
import useDocument from "../hooks/use-document";
import { type Document } from "../models/documents";
import React from "react";
import ButtonIcon from "../components/button-icon";
import IconArrowBack from "../assets/icons/Arrow-back.svg?react"
import { useNavigate } from "react-router"
import Text from "../components/text";


export default function DocumentsList() {
  const { documents, isLoadingDocuments, handleCreateDocument, deleteUserDocument } = useDocument();
  const navigate = useNavigate();

  const inputRef = React.useRef<HTMLInputElement>(null)

  function handleNewDocument() {
    inputRef.current?.click()
  }

  async function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    await handleCreateDocument(file)
  }

  async function handleDeleteDocument(documentId: string) {
    await deleteUserDocument(documentId)
  }

  return (
    <>
      <div 
        className="flex items-center w-fit gap-4 cursor-pointer hover:bg-pink-light transition rounded p-4"
        onClick={() => navigate("/")}
      >
        <ButtonIcon
          icon={IconArrowBack}
          variant="none"
        />
        <Text>
          Return
        </Text>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleFileChange}
      />
      <section>
        <Button 
          icon={PlusIcon} 
          className="w-full"
          onClick={handleNewDocument}
          handling={isLoadingDocuments}
        >
          New Document
        </Button>
      </section>
      <section className="space-y-2">
        {!isLoadingDocuments && documents.map((document) => {
          return (
            <DocumentItem
              key={document.id} 
              document={document}
              deleteDocument={handleDeleteDocument}
            />
          )
        })}
        {isLoadingDocuments && <>
          <DocumentItem document={{} as Document} loading/>
          <DocumentItem document={{} as Document} loading/>
          <DocumentItem document={{} as Document} loading/>
          <DocumentItem document={{} as Document} loading/>
        </>}
      </section>
    </>
  )
}