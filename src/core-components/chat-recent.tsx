import React from "react"
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import ButtonIcon from "../components/button-icon";


interface ChatRecentProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
  handling?: boolean
  onClick?: () => void
  onDelete?: () => void
}

export default function ChatRecent({ children, handling, onDelete, ...props }: ChatRecentProps) {
  return(
    <div 
      className="flex items-center justify-between gap-4 cursor-pointer hover:bg-pink-light transition rounded"
      {...props}
    >
      <Text
        className="text-gray-300!"
        variant="body-sm-bold"
      >
          {children}
      </Text>
      <ButtonIcon 
        icon={TrashIcon} 
        variant="tertiary"
        onClick={(e) => {
          e.stopPropagation()
          onDelete?.() 
        }}
        handling={handling}
      />
    </div>
  )
}