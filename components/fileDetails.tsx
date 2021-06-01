import React from "react";

export default function FileDetails(props: { file: File }) {
  const { file } = props;

  return (
    <div>
      <h2>File Details:</h2>
      <p>File Name: {file.name}</p>
      <p>File Type: {file.type}</p>
      <p>Last Modified: {new Date(file.lastModified).toLocaleDateString()}</p>
    </div>
  );
}
