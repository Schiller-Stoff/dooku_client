import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import FrontendBar from "../components/FrontendBar";

const Packages: React.FC = () => {
  const data: QueryResult.Data = useStaticQuery(query)

  return (
    <Layout
      left={<FrontendBar/>}
      center={
        <>
          <Nav />
          <h1>Published packages and components</h1>
          <p>Here you find and <em>overview over all published (= ready to use) js packages</em> from ZIM Graz. </p>
          <h2>Newest updates</h2>
          <ol className="list-group list-group-flush" style={{boxShadow:"1px 1px 5px 1px lightgrey", padding:".125em"}}>
            {data.allNpmPackage.edges.map((edge, i) => {
              return (
                <li
                  className="list-group-item"
                  style={{ borderBottom: "10px solid whitesmoke" }}
                >
                  {i + 1}. <i className="far fa-folder-open"></i> <Link style={{textDecoration:"underline", color:"darkblue"}} to={`/npm${edge.node.slug}`}>{edge.node.name}</Link>- {edge.node.tags.latest}
                  <p>{edge.node.description}</p>
                  
                  <small>Updated {edge.node.modified} | Started: {edge.node.created} | Downloads last Month: {edge.node.downloadsLast30Days} | <a target="_blank" href={edge.node.homepage}>ZIMlab</a> | <a target="_blank" href={`https://npmjs.com/package/${edge.node.name}`}>NPMJS</a></small>
                  <br></br>
                  {edge.node.keywords.sort().map(keyword => <span style={{marginLeft:".25em"}} className="badge text-dark badge-light">{keyword}</span>)}
                </li>
              )
            })}
          </ol>
        </>
      }
    ></Layout>
  )
}

export default Packages

const query = graphql`
query MyQuery {
  allNpmPackage(
    filter: {keywords: {in: "Centre for Information Modelling"}}
    sort: {fields: modified, order: DESC}
  ) {
    edges {
      node {
        slug
        name
        keywords
        tags {
          latest
        }
        title
        downloadsLast30Days
        description
        modified(fromNow: true)
        created(formatString: "DD MM YYYY")
        homepage
      }
    }
  }
}


`
declare module QueryResult {

  export interface Tags {
      latest: string;
  }

  export interface Node {
      slug: string;
      name: string;
      keywords: string[];
      tags: Tags;
      title: string;
      downloadsLast30Days: number;
      description: string;
      modified: string;
      created: string;
      homepage: string;
  }

  export interface Edge {
      node: Node;
  }

  export interface AllNpmPackage {
      edges: Edge[];
  }

  export interface Data {
      allNpmPackage: AllNpmPackage;
  }

  export interface Extensions {
  }

  export interface RootObject {
      data: Data;
      extensions: Extensions;
  }

}


