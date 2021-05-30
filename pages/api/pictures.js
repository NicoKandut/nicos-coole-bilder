import { readdirSync } from "fs";
import { pictureFilter } from "../../logic/filter";

const byExtension = (extensions) => (filename) =>
  extensions.some((extension) => filename.endsWith(extension));

export default (req, res) => {
  const pictures = readdirSync("public/pictures").filter(
    byExtension(pictureFilter)
  );
  res.status(200).json(pictures);
};
