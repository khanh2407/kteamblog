import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = ({ serverData }) => {
  const  postText  = serverData;

  return (
    <Layout>
    <h1>Page-2</h1>
    <p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

  

export const Head = () => <Seo title="Page two" />



export default SecondPage;
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