import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import { type Document } from "../models/documents";
import Skeleton from "../components/skeleton";
import React from "react";
import Icon from "../components/icon";
import ArticleIcon from "../assets/icons/Article-Icon.svg?react"


interface DocumentItemProps {
  document: Document
  loading?: boolean
  deleteDocument?: (id: string) => Promise<void>
}

export default function DocumentItem({ document, loading, deleteDocument,  }: DocumentItemProps) {

  const [isDeletingDocument, setIsDeletingDocument] = React.useState(false)

  const handleClickDeleteDocument = async () => {
    if(deleteDocument) {
      setIsDeletingDocument(true)
      await deleteDocument(document.id)
      setIsDeletingDocument(false)
    }
  }
  
  return (
    <Card size="md">
      <div className="flex items-center gap-4">
          <Icon
            svg={ArticleIcon}
            className="w-4 fill-gray-300"
          />
          {!loading ? (
            <Text 
              className="flex-1"
            >
              {document?.fileName}
            </Text>
          ) : (
            <Skeleton className="h-6 flex-1"/>
          )}
          <div className="flex gap-1">
            <ButtonIcon 
              icon={TrashIcon} 
              variant="tertiary" 
              onClick={handleClickDeleteDocument}
              loading={loading}
              handling={isDeletingDocument}
            />
          </div>
        </div>
    </Card>
  )
}