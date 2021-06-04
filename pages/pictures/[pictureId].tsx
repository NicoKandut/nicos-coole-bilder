import { useRouter } from "next/router"
import Layout from "../../components/layout"

export default function PicturePage(): JSX.Element {
  const router = useRouter()
  const { pictureId } = router.query

  return <Layout>{pictureId}</Layout>
}
