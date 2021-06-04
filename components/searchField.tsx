import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function SearchField(props: {
  value: string
  setValue: (newValue: string) => void
}): JSX.Element {
  const { value, setValue } = props

  return (
    <div className="flex flex-row items-center gap-1 rounded-full px-3 bg-white text-black border-primary border-2 focus-within:outline-white">
      <FontAwesomeIcon icon={faSearch} />
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="text"
        className="bg-transparent border-none outline-none"
      />
    </div>
  )
}
