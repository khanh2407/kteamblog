import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Content from "../components/content"
import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = ({ serverData }) => (

    <Layout>
  <Content serverData={serverData}/>
     
  </Layout>
  )

  

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />


export default IndexPage
export async function getServerData() {
  try {
    const res = await fetch(`http://kteamblog.local/wp-json/wp/v2/posts/?_embed`)
    if (!res.ok) {
      throw new Error(`Response failed`);
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

