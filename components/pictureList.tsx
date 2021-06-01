import React from "react";
import PictureListItem from "./pictureListItem";

export default function PictureList(props: { pictures: string[] }) {
  const { pictures } = props;

  return (
    <div className="grid grid-flow-col grid-cols-3">
      {pictures.map((picture) => (
        <PictureListItem key={picture} picture={picture} />
      ))}
    </div>
  );
}
