import React from "react";
import PictureListItem from "./pictureListItem";

export default function PictureList(props) {
  const { pictures } = props;

  return (
    <div>
      {pictures.map((picture) => (
        <PictureListItem picture={picture} />
      ))}
    </div>
  );
}
