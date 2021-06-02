import { createReadStream } from "fs"
import { NextApiHandler } from "next"
import formidable, { Files } from "formidable"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
  secure: true,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const uploadHandler: NextApiHandler = async (req, res) => {
  const files: Files = await new Promise((resolve, reject) => {
    formidable().parse(req, (err, fields, files) => {
      if (err) reject({ err })
      else resolve(files)
    })
  })

  if (files) {
    Object.values(files).forEach((file) => {
      const fileList = "name" in file ? [file] : file

      fileList.forEach((f) => {
        if (f.name) {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              folder: "pictures",
              overwrite: true,
              public_id: f.name,
            },
            (error, result) => {
              // console.log(result, error)
            }
          )

          createReadStream(f.path).pipe(uploadStream)
        }
      })
    })

    res.status(200).send("Success")
  } else {
    res.status(500).json({ cause: "No files attached" })
  }
}

export default uploadHandler
