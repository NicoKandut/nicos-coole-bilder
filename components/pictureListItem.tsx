import React from "react"

export default function PictureListItem(props: {
  picture: string
}): JSX.Element {
  const { picture } = props

  return (
    <div className="">
      <div className="aspect-w-1 aspect-h-1">
        <img
          className="object-cover rounded"
          src={`/pictures/${picture}`}
          alt={picture}
        />
      </div>
    </div>
  )
}
