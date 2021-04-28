import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const FrontendDocFeed: React.FC = () => {
  const data: FrontendQueryResult.Data = useStaticQuery(graphql`
    {
      allGoogleDocs(
        sort: { order: DESC, fields: modifiedTime }
        filter: { breadcrumb: { elemMatch: { slug: { eq: "/frontend" } } } }
      ) {
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
    <div
      style={{
        maxHeight: "75vh",
        overflowY: "scroll",
        background: "whitesmoke",
      }}
    >
      {data.allGoogleDocs.edges.map((edge, index) => (
        <>
          <div
            className="card text-dark mb-3"
            style={{
              margin: 0,
              borderRadius: 0,
              border: "none",
              padding: ".5em",
            }}
          >
            {/* <div className="card-header">Frontend</div> */}
            <div
              className="card-body"
              style={{ padding: 0, paddingLeft: ".5em" }}
            >
              <small style={{ color: "lightgrey" }}>
                {edge.node.breadcrumb[edge.node.breadcrumb.length - 1].slug}
                .gdoc
              </small>
              <h6 className="card-title" style={{ margin: 0 }}>
                {index + 1}. <i className="far fa-file-alt"></i>{" "}
                <Link
                  style={{ color: "black", textDecoration: "underline" }}
                  to={
                    edge.node.breadcrumb[edge.node.breadcrumb.length - 1].slug
                  }
                >
                  {edge.node.name}.gdoc
                </Link>
              </h6>

              <p style={{ fontSize: "12px", margin: 0 }}>
                Updated {edge.node.modifiedTime}
              </p>
              {/* <div dangerouslySetInnerHTML={{__html: edge.node.childMarkdownRemark.tableOfContents}}></div> */}

              <p style={{ fontSize: "12px", margin: 0 }}>
                ( Word count: {edge.node.childMarkdownRemark.wordCount.words} )
                |{" "}
                <small>
                  <a
                    target="_blank"
                    style={{ color: "darkblue" }}
                    href={`https://drive.google.com/drive/folders/${edge.node.parents[0]}`}
                  >
                    Gdrive folder
                  </a>
                </small>
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default FrontendDocFeed

declare module FrontendQueryResult {
  export interface Breadcrumb {
    name: string
    slug: string
  }

  export interface WordCount {
    words: number
  }

  export interface ChildMarkdownRemark {
    wordCount: WordCount
  }

  export interface Node {
    name: string
    modifiedTime: string
    createdTime: Date
    breadcrumb: Breadcrumb[]
    childMarkdownRemark: ChildMarkdownRemark
    parents: string[]
  }

  export interface Edge {
    node: Node
  }

  export interface AllGoogleDocs {
    edges: Edge[]
  }

  export interface Data {
    allGoogleDocs: AllGoogleDocs
  }

  export interface Extensions {}

  export interface RootObject {
    data: Data
    extensions: Extensions
  }
}
