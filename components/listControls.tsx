import { faList, faThLarge } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import Chip from "./chip"
import SearchField from "./searchField"

enum LayoutType {
  LIST,
  GRID,
}

export default function ListControls(): JSX.Element {
  const [query, setQuery] = useState("")
  const [layoutType, setLayoutType] = useState<LayoutType>(LayoutType.GRID)

  return (
    <div className="flex flex-row gap-3 py-3">
      <SearchField value={query} setValue={setQuery} />
      <div className="flex-grow"></div>
      <Chip
        active={layoutType === LayoutType.LIST}
        onClick={() => setLayoutType(LayoutType.LIST)}
      >
        <FontAwesomeIcon icon={faList} />
        <span>List</span>
      </Chip>
      <Chip
        active={layoutType === LayoutType.GRID}
        onClick={() => setLayoutType(LayoutType.GRID)}
      >
        <FontAwesomeIcon icon={faThLarge} />
        <span>Grid</span>
      </Chip>
    </div>
  )
}
