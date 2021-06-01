import React, { ChangeEventHandler, useState } from "react";
import FileDetails from "./fileDetails";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // Update the state
    const file = event.target?.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    if (selectedFile) {
      // Create an object of formData
      const formData = new FormData();

      // Update the formData object
      formData.append(selectedFile.name, selectedFile, selectedFile.name);

      // Details of the uploaded file
      console.log(selectedFile);

      // Request made to the backend api
      // Send formData object

      fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
      {selectedFile && <FileDetails file={selectedFile} />}
    </div>
  );
}
