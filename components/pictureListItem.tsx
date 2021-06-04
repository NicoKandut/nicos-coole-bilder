import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Image } from "cloudinary-react"
import React from "react"
import PictureData from "../logic/types/pictureData"

export default function PictureListItem(props: {
  picture: PictureData
}): JSX.Element {
  const { picture } = props

  return (
    <div tabIndex={0} className="aspect-w-1 aspect-h-1">
      <Image
        cloudName={process.env.NEXT_PUBLIC_CLOUD_NAME}
        publicId={`${picture.public_id}.${picture.format}`}
        width="300"
        crop="scale"
        className="object-cover rounded"
      />
      <div className="grid place-content-end opacity-0 bg-layer-0 bg-opacity-50 hover:opacity-100 text-xl pointer-events-hover">
        <a href={picture.secure_url} target="_newtab" className="p-2">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div>
    </div>
  )
}
