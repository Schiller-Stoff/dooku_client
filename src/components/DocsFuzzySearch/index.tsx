import React from "react";
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import { ZIMFuzzySearch, ZIMSearchAble } from "zim-fuzzysearch";
//@ts-ignore
import * as styles from "./styles.module.css";

const DocsFuzzySearch: React.FC = () => {

  const data: GraphQlResponse.Data = useStaticQuery(graphql`
  {
    allGoogleDocs {
      edges {
        node {
          path
          name
          childMarkdownRemark {
            excerpt(pruneLength: 500)
            headings {
              value
            }
          }
        }
      }
    }
    allNpmPackage(
      filter: {keywords: {in: "Centre for Information Modelling"}}
      sort: {fields: modified, order: DESC}
    ) {
      edges {
        node {
          description
          title
          readme {
            childMarkdownRemark {
              excerpt
              headings {
                value
              }
            }
          }
          slug
        }
      }
    }
  }
  
  `)


  React.useEffect(() => {
    setTimeout(() => {
      let input = document.querySelector("input");
      if(!input)return; 
      input.focus();
      input.scrollTo();
    }, 500)
  }, []);


  /**
   * Uses the data from graphql and transforms it to required fuzzy search 
   * data structure.
   * @returns 
   */
  const aggGraphqlToFuzzy = () => {
    let fuzzyData: ZIMSearchAble[] = [];

    // aggregate google docs to fuzzy
    data.allGoogleDocs.edges.forEach(edge => {

      let tags: string[] = []
      // assign tags first

      if(edge.node.path.includes("reference")){
        tags.push("Reference Implementation");
      } else if(edge.node.path.includes("guidelines")){
        tags.push("Guideline");
      } else {
        tags.push("Doc");
      }


      fuzzyData.push({
        label: edge.node.name,
        value: edge.node.path,
        txt: edge.node.childMarkdownRemark.excerpt,
        // additionally search through all headings
        headings: edge.node.childMarkdownRemark.headings.map(heading => heading.value),
        // tags relative 
        tags: tags
      });
    })

    // npm packages to fuzzy data struct
    data.allNpmPackage.edges.forEach(edge => {
      fuzzyData.push({
        label: edge.node.title,
        value: "/npm" + edge.node.slug,
        txt: edge.node.readme.childMarkdownRemark.excerpt,
        // additionally search through all headings
        headings: edge.node.readme.childMarkdownRemark.headings.map(heading => heading.value),
        tags:["NPM Package"]
      });
    })

    console.log(fuzzyData);

    return fuzzyData;
  }


  return <div className={styles.fuzzySearch}><ZIMFuzzySearch.Comp
  // optionally try with test data
  // as long as no data is defined -> will display loader 
  // data={testData.coremaData}
  data={aggGraphqlToFuzzy()}  
  showResultGrid={false}

  tagConceptMap={{
    "NPM Package": {url: "/packages"},
    "Doc": {url:"/overview"},
    "Guideline": {url:"/"},
    "Reference Implementation": {url:"/refimpls"}
  }}

 placeHolder="Search for a documentation source..." 


  // tagConceptMap leads user to a link when clicked on tag badge 
  // not all tags have to be stated.

  fuseOptions={{
    keys:["label", "value", "txt", "headings"]
  }}
  fuseKeyMap={{
    label: {label: "title"},
    value: {label: "path"},
    txt: {label: "excerpt"},
    headings: {label:"headings"}
  }}
  
  // specify labeling of result count
  resultCountLabel="Estimated results: "

  // starts fuse search on input change (with short delay) when set to false
  // set to true will demand click on search button (fuzzy search is decoupled from highlight)
  searchOnClick={false}

  // 
  onSelect={
    // what should happen when result link is clicked
    // callback gets passed in selected ZimSearchable object
    (selected) => {
      navigate(selected.value);
    }
  } 

  // what should happen when a tag is clicked
  onTagSelect={
    (tag) => navigate(tag.url) 
  }

  suggestions={
    {
      ...data.allGoogleDocs.edges.reduce((agg, edge) => {
      agg[edge.node.name] = {
        label:edge.node.path,
        value:edge.node.name
      }
      return agg
      }, {}),
      ...data.allNpmPackage.edges.reduce((agg, edge) => {
        agg[edge.node.title] = {
          label:edge.node.slug,
          value:edge.node.title
        }
        return agg
        }, {})
    }

}


  // display search alert via using the onSearch prop
  //onSearch={(searchVal) => alert("Searching now for: " + searchVal + " (this message may be customized)")}

/></div>

}

export default DocsFuzzySearch;


declare module GraphQlResponse {

  export interface Heading {
      value: string;
  }

  export interface ChildMarkdownRemark {
      excerpt: string;
      headings: Heading[];
  }

  export interface Node {
      path: string;
      name: string;
      childMarkdownRemark: ChildMarkdownRemark;
  }

  export interface Edge {
      node: Node;
  }

  export interface AllGoogleDocs {
      edges: Edge[];
  }

  export interface Heading2 {
      value: string;
  }

  export interface ChildMarkdownRemark2 {
      excerpt: string;
      headings: Heading2[];
  }

  export interface Readme {
      childMarkdownRemark: ChildMarkdownRemark2;
  }

  export interface Node2 {
      description: string;
      title: string;
      readme: Readme;
      slug: string;
  }

  export interface Edge2 {
      node: Node2;
  }

  export interface AllNpmPackage {
      edges: Edge2[];
  }

  export interface Data {
      allGoogleDocs: AllGoogleDocs;
      allNpmPackage: AllNpmPackage;
  }

  export interface Extensions {
  }

  export interface RootObject {
      data: Data;
      extensions: Extensions;
  }

}





