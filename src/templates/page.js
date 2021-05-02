import {graphql} from "gatsby"
import React from "react"
import Layout from "../components/Layout";
import Nav from "../components/Nav";

const PageTemplate = ({
  data: {
    page: {
      name,
      childMarkdownRemark: {html, tableOfContents},
      breadcrumb,
      id
    },
  },
}) => {
  return (
    <React.Fragment>
      
      <Layout 
        left={
          <div dangerouslySetInnerHTML={{__html:tableOfContents}}></div>
        }
        center={
          <>
            <Nav></Nav>
            

            <h1>{name}</h1>
            <nav>
              <ol className="breadcrumb bg-white" style={{padding:0, letterSpacing:"-1px"}}>
                <li className="breadcrumb-item"><i className="far fa-folder"></i> ZIM Allgemein</li>
                {breadcrumb.map((crumb, i) => <li className="breadcrumb-item">{crumb.name}</li>
                )}
              </ol>
            </nav>
            <span><a href={`https://docs.google.com/document/d/${id}/edit`} target="_blank">Linked Google Doc</a></span>
            <br></br>
            <br></br>
            <div id="gatsbyMarkdownPage" dangerouslySetInnerHTML={{__html: html}}></div>
          </>
        }>
      </Layout>

      {/*
        To add a cover:
        Add an image in your Google Doc first page header
        https://support.google.com/docs/answer/86629
      */}
    </React.Fragment>
  )
}

export default PageTemplate

// exported graphql query -> used by gatsby
export const pageQuery = graphql`
query Page($path: String!) {
  page: googleDocs(slug: {eq: $path}) {
    name
    createdTime
    modifiedTime(fromNow: true)
    breadcrumb {
      name
      slug
    }
    childMarkdownRemark {
      html
      tableOfContents
    }
    id
  }
}


`