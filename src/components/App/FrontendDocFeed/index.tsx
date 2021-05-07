import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { List, ListItem, Grid, Paper, Container, Typography } from "@material-ui/core"

const FrontendDocFeed: React.FC = () => {
  const data: FrontendQueryResult.Data = useStaticQuery(graphql`
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
    <Paper 
      style={{border:"2px solid darkblue"}} 
      square 
      elevation={5}>
      <List
        style={{
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
      {data.allGoogleDocs.edges.map((edge, index) => (
        <>
          <ListItem>
            <Container>
              <small style={{ color: "lightgrey" }}>
                {edge.node.breadcrumb[edge.node.breadcrumb.length - 1].slug}
                .gdoc
              </small>
              <Typography style={{ margin: 0 }}>
                {index + 1}. <i className="far fa-file-alt"></i>{" "}
                <Link
                  style={{ color: "darkblue", textDecoration: "underline" }}
                  to={
                    edge.node.breadcrumb[edge.node.breadcrumb.length - 1].slug
                  }
                >
                  {edge.node.name}.gdoc
                </Link>
              </Typography>

              <p style={{ fontSize: "12px", margin: 0 }}>
                Updated {edge.node.modifiedTime} (from last build)
              </p>

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
            </Container>
          </ListItem>
        </>
      ))}
    </List>
    </Paper>
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
