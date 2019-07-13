import React from "react"
import { Author } from "../message/Message"
import InputField from "./InputField"
import { InputGroup } from "./styles"

interface Props {
  author: Author | undefined
  onChange: (author: Author | undefined) => void
}

export default function AuthorEditor(props: Props) {
  const { author = {} as Author } = props
  const { name, url, iconUrl } = author

  const handleChange = (author: Author) =>
    Object.values(author).some(value => !!value)
      ? props.onChange(author)
      : props.onChange(undefined)

  return (
    <InputGroup>
      <InputField
        value={name}
        onChange={name =>
          handleChange({
            ...author,
            name,
          })
        }
        label="Author text"
        maxLength={256}
      />
      <InputField
        value={url}
        onChange={url =>
          handleChange({
            ...author,
            url,
          })
        }
        label="Author link"
      />
      <InputField
        value={iconUrl}
        onChange={iconUrl =>
          handleChange({
            ...author,
            iconUrl,
          })
        }
        label="Author icon"
      />
    </InputGroup>
  )
}
