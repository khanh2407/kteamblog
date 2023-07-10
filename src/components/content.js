import * as React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"
const Content = ({ serverData }) => {
    const totalPosts = serverData;
    totalPosts.map((post) =>{
      console.log(post);
     // console.log(post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url);
    }
    
   )
    
   
   
    return (
      
      <div>
          {totalPosts.map((post , id) => (
           <Link to={`/`+post.slug} key={id}>
              <div>
                  <div>
                    <img className="h-40 w-80" src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt=""/>
                  </div>
                  <div>
                    <h3 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                  </div>
                  <div>
                    <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                  </div>
  
              </div>
           </Link>
          )
          )}
      </div>
      
        
    )
}
export default Content
export const Head = () => <Seo title="Page two" />

export async function getServerData(dataImage) {
  try {
    const res = await fetch({dataImage})
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

