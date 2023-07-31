import * as React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"
const Content = ({ serverData }) => {
    const totalPosts = serverData;
    return (
      
      <div className="flex gap-4 mt-14 w-[1280px] md:px-10 flex-wrap">
          {totalPosts.map((post , id) => (
           <div className="h-72 w-64 bg-[#ccc] rounded-lg transition-all duration-300" key={id}>
             <Link to={`/`+post.slug} >
                <div>
                    <div>
                      <img className="h-40 w-80 rounded-t-lg" src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt={'post-img'+id}/>
                    </div>
                    <div>
                      <h3 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                    </div>
                    <div>
                      <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                    </div>
                </div>
             </Link>
           </div>
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

