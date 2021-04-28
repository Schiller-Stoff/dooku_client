import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Nav from "../components/Nav"
import FrontendBar from "../components/FrontendBar";
import DocsFuzzySearch from "../components/DocsFuzzySearch"
import FrontendDocFeed from "../components/App/FrontendDocFeed";

const Home = () => {
  const data: Data = useStaticQuery(graphql`
  {
    allGoogleDocs(sort: {order: DESC, fields: modifiedTime}) {
      edges {
        node {
          name
          modifiedTime(fromNow: true)
          createdTime
          breadcrumb {
            name
            slug
          }
          childMarkdownRemark {
            wordCount {
              words
            }
          }
          parents
        }
      }
    }
  }

  `)

  return (
    <Layout
      center={
        <>
          <Nav></Nav>
          <h1>Frontend Dooku</h1>
          <p>Welcome to the frontend portal for Digital Humanities research at ZIM Graz!</p>
          <DocsFuzzySearch></DocsFuzzySearch>
          <h2>Ongoing documentation</h2>
          <p>Last changed documents in ZIM Frontend folder in Google Drive: </p>
          <FrontendDocFeed/>
          <br></br>
          <br></br>
          {/* <h2>Ongoing Coding on Gitlab</h2> */}
            
          
        </>
      }
      left={<FrontendBar/>}
    
    ></Layout>
  )
}

export default Home

interface Breadcrumb {
  name: string
  slug: string
}

interface Node {
  name: string
  modifiedTime: string
  createdTime: Date
  breadcrumb: Breadcrumb[]
  childMarkdownRemark: {
    wordCount: {
      "words": null | number
    }
  }
  parents: [string]
}

interface Edge {
  node: Node
}

interface AllGoogleDocs {
  edges: Edge[]
}

interface Data {
  allGoogleDocs: AllGoogleDocs
}
