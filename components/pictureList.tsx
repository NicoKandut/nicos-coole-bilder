import React from "react"
import PictureData from "../logic/types/pictureData"
import PictureListItem from "./pictureListItem"

export default function PictureList(props: {
  pictures: PictureData[]
}): JSX.Element {
  const { pictures } = props

  return (
    <div className="grid grid-cols-4 gap-2">
      {pictures.map((picture) => (
        <PictureListItem key={picture.public_id} picture={picture} />
      ))}
    </div>
  )
}
