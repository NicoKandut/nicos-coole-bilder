import React from "react"

export default function FileDetails(props: { file: File }): JSX.Element {
  const { file } = props

  return (
    <div className="flex flex-row rounded bg-gray-800 p-3 gap-3">
      <img
        src={URL.createObjectURL(file)}
        alt="upload preview"
        className="h-32 w-32 object-cover rounded"
      />
      <div className="flex flex-col">
        <h2 className="text-xl py-2">File Details:</h2>
        <p>File Name: {file.name}</p>
        <p>File Type: {file.type}</p>
        <p>Last Modified: {new Date(file.lastModified).toLocaleDateString()}</p>
      </div>
    </div>
  )
}
