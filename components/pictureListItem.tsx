import React from "react";

export default function PictureListItem(props: { picture: string }) {
  const { picture } = props;

  return (
    <div>
      <img
        className="object-cover"
        src={`/pictures/${picture}`}
        alt={picture}
      />
    </div>
  );
}
