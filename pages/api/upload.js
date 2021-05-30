import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  /** @type {{files: File[]}} */
  const data = await new Promise((resolve, reject) => {
    const form = new formidable();

    form.parse(req, (err, fields, files) => {
      if (err) reject({ err });
      resolve({ err, fields, files });
    });
  });

  if (data.files) {
    Object.values(data.files).forEach((file) => {
      fs.writeFileSync(
        `public/pictures/${file.name}`,
        fs.readFileSync(file.path)
      );
    });

    res.status(200).send();
  } else {
    res.status(500).json({ cause: "No files attached" });
  }
};
