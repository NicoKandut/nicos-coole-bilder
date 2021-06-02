import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Image } from "cloudinary-react"
import React from "react"

export default function PictureListItem(props: {
  picture: string
}): JSX.Element {
  const { picture } = props

  return (
    <div>
      <div className="aspect-w-1 aspect-h-1">
        <Image
          cloudName={process.env.NEXT_PUBLIC_CLOUD_NAME}
          publicId={picture}
          width="300"
          crop="scale"
          className="object-cover rounded"
        />
        <div className="grid place-items-center opacity-0 bg-gray-900 bg-opacity-50 hover:opacity-100 text-xl">
          <a href={`/pictures/${picture}`}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </div>
  )
}
