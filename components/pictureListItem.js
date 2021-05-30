import React from "react";
import Image from "next/image";

export default function PictureListItem(props) {
  const { picture } = props;

  return (
    <div>
      <Image
        src={`/pictures/${picture}`}
        alt={picture}
        width="100"
        height="150"
      />
    </div>
  );
}
