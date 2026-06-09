import ReactMarkdown from "react-markdown";
import Text from "./text";

interface MarkdownProps {
  children: string;
}

export default function Markdown({
  children,
}: MarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <Text
            as="h1"
            variant="body-md-bold"
            className="text-xl mb-4 text-gray-400"
          >
            {children}
          </Text>
        ),
        h2: ({ children }) => (
          <Text
            as="h2"
            variant="body-md-bold"
            className="text-lg mb-3 text-gray-400"
          >
            {children}
          </Text>
        ),
        p: ({ children }) => (
          <Text
            as="p"
            variant="body-md"
            className="mb-4 whitespace-pre-wrap"
          >
            {children}
          </Text>
        ),
        strong: ({ children }) => (
          <Text
            as="strong"
            variant="body-md-bold"
            className="text-gray-400"
          >
            {children}
          </Text>
        ),
        em: ({ children }) => (
          <Text
            as="em"
            variant="body-md"
            className="italic"
          >
            {children}
          </Text>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-8 mb-4">
            {children}
          </ol>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-8 mb-4">
            {children}
          </ul>
        ),
        li: ({ children }) => (
          <li>
            <Text
              as="span"
              variant="body-md"
            >
              {children}
            </Text>
          </li>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}