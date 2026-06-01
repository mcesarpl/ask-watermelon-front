import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

const cardVariants = cva(`
    border border-solid border-gray-200
    bg-white shadow-sm`,{
    variants: {
      size: {
        none: "",
        md: "p-5"
      },
      rounded: {
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      size: "none",
      rounded: "lg",
    }
  }
)

interface CardProps extends VariantProps<typeof cardVariants>,
  React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements
  }

export default function Card({
  as = "div",
  size,
  className,
  children,
  rounded,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({size, className, rounded}),
      ...props
    },
    children
  )
}