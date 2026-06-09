import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import Card from "../components/card";
import Text from "../components/text";
import Markdown from "../components/markdown";


const chatTextVariants = cva(`
    border border-solid border-gray-200
    bg-white shadow-sm`,{
    variants: {
      emitter: {
        primary: "self-end max-w-2xl p-4",
        secondary: "self-start max-w-2xl p-4 bg-pink-light!"
      },
    },
    defaultVariants: {
      emitter: "primary",
    }
  }
)

interface ChatTextProps extends VariantProps<typeof chatTextVariants>,
  React.ComponentProps<"div"> {
    isModel: boolean
  }

export default function ChatText({ children, emitter, isModel, ...props }: ChatTextProps) {
  return(
    <Card
      className={chatTextVariants({ emitter })}
      rounded="xl"
      {...props}
    >
      {
        isModel ?
        <Markdown>
          {String(children)}
        </Markdown>
        :
        <Text 
          variant="body-sm-bold"
          className="whitespace-pre-wrap break-words"
        >
          {children}
        </Text>
      }
    </Card>
  )
}