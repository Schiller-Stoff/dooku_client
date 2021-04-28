import {graphql} from "gatsby"
import React from "react"
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const NpmPageTemplate = ({
  data: {
    npmPackage: {
      name,
      readme: {
        childMarkdownRemark: {
          html,
          tableOfContents
        }
      },
      homepage,
      version,
      keywords
    }
  }
}) => {
  
  return (
    <React.Fragment>
      
      <Layout 
        left={
          <div dangerouslySetInnerHTML={{__html: tableOfContents}}></div>
        }
        center={
          <>
            <Nav></Nav>
            <h1>{name}</h1>
            <h2>Latest version: {version}</h2>
            {keywords.sort().map(keyword => <span style={{marginLeft:".25em"}} className="badge text-dark badge-light">{keyword}</span>)}
            <br></br>
            <br></br>
            <span><a target="_blank" href={`https://npmjs.com/package/${name}`}>npmjs</a> | <a href={homepage} target="_blank">zimlab</a></span>
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

export default NpmPageTemplate



export const npmPageQuery = graphql`
query Package($slug: String!) {
  npmPackage(slug: {eq: $slug}) {
    name
    slug
    readme {
      childMarkdownRemark {
        html
        tableOfContents
      }
    }
    homepage
    version
    keywords
  }
}


`