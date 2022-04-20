import React from "react"
import Link from "../utils/link"
import Seo from "../components/seo"
import { gql, useQuery } from "@apollo/client"

const NotFoundPage = () => {

  const GET_DATA = gql`
  query getData {
    page(id: "cG9zdDo5Nzc=") {
      title
      notfound {
        contentPage
        link {
          title
          url
        }
      }
    }
  }
  `;
  const { data } = useQuery(GET_DATA);
  return (
  <>
    <Seo title="404: Not found" />
    <div className="orther-error container">
       <div class="title-page-orther">
            <h1>{data?.page.title}</h1>
       </div>
       <div className="content-page-orther">
          {data?.page.notfound.contentPage}
       </div>
       <div className="link_orther">
         <Link className="btn" to={data?.page.notfound.link.url} >{data?.page.notfound.link.title}</Link>
       </div>
       
    </div>
  </>
  )
  }

export default NotFoundPage
