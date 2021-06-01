import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/layout";
import PictureList from "../components/pictureList";
import Upload from "../components/upload";

export default function Home() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("/api/pictures")
      .then((res) => res.json())
      .then((res) => setPictures(res));
  }, []);

  return (
    <Layout>
      <PictureList pictures={pictures} />
      <Upload />
    </Layout>
  );
}
