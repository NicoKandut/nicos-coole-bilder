import { NextApiHandler } from "next";
import formidable, { Files } from "formidable";
import fs from "fs";
import { join } from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadHandler: NextApiHandler = async (req, res) => {
  const files: Files = await new Promise((resolve, reject) => {
    formidable().parse(req, (err, fields, files) => {
      if (err) reject({ err });
      else resolve(files);
    });
  });

  if (files) {
    Object.values(files).forEach((file) => {
      if ("name" in file) {
        if (file.name) {
          fs.writeFileSync(
            join(process.cwd(), "public/pictures", file.name),
            fs.readFileSync(file.path)
          );
        }
      } else {
        file.forEach((f) => {
          if (f.name) {
            fs.writeFileSync(
              join(process.cwd(), "public/pictures", f.name),
              fs.readFileSync(f.path)
            );
          }
        });
      }
    });

    res.status(200).send("Success");
  } else {
    res.status(500).json({ cause: "No files attached" });
  }
};

export default uploadHandler;
