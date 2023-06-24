import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
      >
             <main>{children}</main>
        <footer>
          <h1>Footer</h1>

          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="#">Kteam</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
