import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const postDetail = ({ serverData }) => {
  const  postText  = serverData;
  return (
    <Layout>
    <h1>Post Detail</h1>
    <p dangerouslySetInnerHTML={{__html: postText.content.rendered}}></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}
export default postDetail;

export async function getServerData() {
    try {
      const res = await fetch(`http://kteamblog.local/wp-json/wp/v2/posts`)
      if (!res.ok) {
        throw new Error(`Response failed`)
      }
      return {
        props: await res.json(),
      }
    } catch (error) {
      return {
        status: 500,
        headers: {},
        props: {},
      }
    }
  }