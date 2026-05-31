import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import Card from "../components/card";
import Text from "../components/text";


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
  React.ComponentProps<"div"> {}

export default function ChatText({ children, emitter, ...props }: ChatTextProps) {
  return(
    <Card
      className={chatTextVariants({ emitter })}
      rounded="full"
      {...props}
    >
      <Text variant="body-sm-bold">
        {children}
      </Text>
    </Card>
  )
}