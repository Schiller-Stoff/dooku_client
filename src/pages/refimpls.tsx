
import React from "react";
import Layout from "../components/Layout";
import FrontendBar from "../components/FrontendBar";
import Nav from "../components/Nav";
import { graphql, useStaticQuery, Link } from "gatsby"


const RefImpls: React.FC = () => {

  const data: QueryResult.Data = useStaticQuery(graphql`
    {
      allGoogleDocs(filter: {slug: {regex: "/reference-implementations/"}}) {
        edges {
          node {
            path
            name
            childMarkdownRemark {
              excerpt(pruneLength: 400)
              headings {
                value
              }
            }
            modifiedTime(fromNow: true)
            createdTime(formatString: "DD.MM.YYYY")
            images {
              childImageSharp {
                fixed(jpegQuality: 10, trim: 5) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout
      center={
        <>
          <Nav/>
          <h1>Reference Implementations</h1>
          <p>A reference implementation means an <b>existing solution already deployed to production.</b></p>
          <p>This page provides an <b>overview</b> over these reference implementations and adds further information helping to decide if this solution might be the path I should follow along in future projects.</p>
          <h2>Sorted by last update</h2>
          <ol className="list-group list-group-flush" style={{boxShadow:"1px 1px 5px 1px lightgrey", padding:".125em"}}>
            {data.allGoogleDocs.edges.map((edge, i) => {
              return (
                <li
                  className="list-group-item"
                  style={{ borderBottom: "10px solid whitesmoke" }}
                >
                  {i + 1}. <i className="far fa-folder-open"></i> <Link style={{textDecoration:"underline", color:"darkblue"}} to={`${edge.node.path}`}>{edge.node.name}</Link>
                  <small> - Updated {edge.node.modifiedTime} | Document created: {edge.node.createdTime}</small>
                  <small style={{display:"block"}}>{edge.node.childMarkdownRemark.excerpt}</small>
                  <img src={edge.node.images[0] ? edge.node.images[0].childImageSharp.fixed.src : undefined}></img>
                  <br></br>
                </li>
              )
            })}
          </ol>
        </>}
      left={<FrontendBar/>}
    ></Layout>
  )
}


export default RefImpls;


declare module QueryResult {

  export interface Heading {
      value: string;
  }

  export interface ChildMarkdownRemark {
      excerpt: string;
      headings: Heading[];
  }

  export interface Fixed {
      src: string;
  }

  export interface ChildImageSharp {
      fixed: Fixed;
  }

  export interface Image {
      childImageSharp: ChildImageSharp;
  }

  export interface Node {
      path: string;
      name: string;
      childMarkdownRemark: ChildMarkdownRemark;
      modifiedTime: string;
      createdTime: string;
      images: Image[];
  }

  export interface Edge {
      node: Node;
  }

  export interface AllGoogleDocs {
      edges: Edge[];
  }

  export interface Data {
      allGoogleDocs: AllGoogleDocs;
  }

  export interface Extensions {
  }

  export interface RootObject {
      data: Data;
      extensions: Extensions;
  }

}



