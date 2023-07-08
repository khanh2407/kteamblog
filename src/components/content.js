import * as React from "react"
import Seo from "../components/seo"
const Content = ({ serverData }) => {
    const totalPosts = serverData;
   console.log(totalPosts)
    return (
      
      <div>
          {totalPosts.map((post , id) => (
           <a>
              <div className="h-80 w-24">
                  <div>
                    <img src={post.guid.rendered} alt=""/>
                  </div>
                  <div>
                    <h3 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                  </div>
                  <div>
                    <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                  </div>
  
              </div>
           </a>
          )
          )}
      </div>
      
        
    )
}
export default Content
export const Head = () => <Seo title="Page two" />

