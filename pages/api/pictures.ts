import { readdirSync, readFileSync } from "fs";
import { NextApiHandler } from "next";
import { join } from "path";
import { pictureFilter } from "../../logic/filter";

const byExtension = (extensions: string[]) => (filename: string) =>
  extensions.some((extension) => filename.endsWith(extension));

const picturesHandler: NextApiHandler = (req, res) => {
  const pictures = readdirSync(join(process.cwd(), "public/pictures")).filter(
    byExtension(pictureFilter)
  );

  console.log(pictures);

  pictures.forEach((pic) => {
    console.log(readFileSync(join(process.cwd(), "public/pictures", pic)));
  });

  res.status(200).json(pictures);
};

export default picturesHandler;
