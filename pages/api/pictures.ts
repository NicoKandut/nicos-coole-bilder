import { NextApiHandler } from "next"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
  secure: true,
})

const picturesHandler: NextApiHandler = (req, res) => {
  cloudinary.search
    .expression("folder:pictures/*")
    .execute()
    .then((result) => {
      console.log(result)
      res
        .status(200)
        .json(
          result.resources.map(
            (resource: Record<string, unknown>) => resource.public_id
          )
        )
    })
}

export default picturesHandler
