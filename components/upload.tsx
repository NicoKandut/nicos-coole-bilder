import React, { ChangeEventHandler, useState } from "react"
import FileDetails from "./fileDetails"

export default function Upload(): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // Update the state
    const file = event.target?.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  // On file upload (click the upload button)
  const onFileUpload = () => {
    if (selectedFile) {
      // Create an object of formData
      const formData = new FormData()

      // Update the formData object
      formData.append(selectedFile.name, selectedFile, selectedFile.name)

      // Request made to the backend api
      // Send formData object

      fetch("/api/upload", {
        body: formData,
        method: "POST",
      })
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="inline-flex w-min flex-row items-center gap-1 rounded-full bg-white text-black border-primary-500 border-2 overflow-hidden focus-within:outline-white">
        <input type="file" onChange={onFileChange} />
        <button
          className="bg-primary-500 text-white h-full px-3"
          onClick={onFileUpload}
        >
          Upload
        </button>
      </div>

      {selectedFile && <FileDetails file={selectedFile} />}
    </div>
  )
}
