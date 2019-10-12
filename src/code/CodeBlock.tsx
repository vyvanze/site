import React, { useEffect, useState } from "react"
import { CodeBlockContainer } from "../markup/styles"
import { highlightCode } from "./highlightCode"

type Props = {
  content: string
  language?: string
}

export default function CodeBlock(props: Props) {
  const { content, language = "" } = props

  const [html, setHtml] = useState<string>()

  useEffect(() => {
    highlightCode(language, content)
      .then(setHtml)
      .catch(() => setHtml(undefined))
  }, [content, language])

  if (!html) {
    return <CodeBlockContainer>{content}</CodeBlockContainer>
  }

  return <CodeBlockContainer dangerouslySetInnerHTML={{ __html: html }} />
}