import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/Layout";
import FrontendBar from "../components/FrontendBar";
import { Container, List, ListItem, Paper } from "@material-ui/core";;

const Packages: React.FC = () => {
  const data: QueryResult.Data = useStaticQuery(query)

  return (
    <Layout
      left={<FrontendBar/>}
      center={
        <>
          <h1>Published packages and components</h1>
          <p>Here you find and <em>overview over all published (= ready to use) js packages</em> from ZIM Graz. </p>
          <hr></hr>
          <h2>Newest updates</h2>
          <Paper square elevation={5}>
          <List
            style={{border:"2px solid darkblue"}}
          >
            {data.allNpmPackage.edges.map((edge, i) => {
              return (
                <ListItem
                  alignItems={"center"}
                  style={{ borderBottom: "2px solid darkblue", display:"block" }}
                >
                  {i + 1}. <i className="far fa-folder-open"></i> <Link style={{textDecoration:"underline", color:"darkblue"}} to={`/npm${edge.node.slug}`}>{edge.node.name}</Link>- {edge.node.tags.latest}
                  <Container>
                    <p>{edge.node.description}</p>
                    <small>Updated {edge.node.modified} | Started: {edge.node.created} | Downloads last Month: {edge.node.downloadsLast30Days} | <a target="_blank" href={edge.node.homepage}>ZIMlab</a> | <a target="_blank" href={`https://npmjs.com/package/${edge.node.name}`}>NPMJS</a></small>
                    <br></br>
                    <br></br>
                    {edge.node.keywords.sort().map(keyword => <span style={{marginLeft:".25em"}} className="badge text-dark badge-light">{keyword}</span>)}
                    <br></br>
                    <br></br>
                  </Container>
                  </ListItem>
              )
            })}
          </List>
          </Paper>
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


