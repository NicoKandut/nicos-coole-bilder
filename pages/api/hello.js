// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { writeFileSync } from "fs";

export default (req, res) => {
  writeFileSync("public/pictures/asdf.txt", "hahaha");

  res.status(200).json({ name: "John Doe" });
};
