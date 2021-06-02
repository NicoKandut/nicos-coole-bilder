import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ListControls from "../components/listControls"
import PictureList from "../components/pictureList"
import Upload from "../components/upload"

export default function Home(): JSX.Element {
  const [pictures, setPictures] = useState([])

  useEffect(() => {
    fetch("/api/pictures")
      .then((res) => res.json())
      .then((res) => setPictures(res))
  }, [])

  return (
    <Layout>
      <Upload />
      <ListControls />
      <PictureList pictures={pictures} />
    </Layout>
  )
}
