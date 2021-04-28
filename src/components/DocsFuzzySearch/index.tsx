import React from "react";
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import { ZIMFuzzySearch, ZIMSearchAble } from "zim-fuzzysearch";
//@ts-ignore
import * as styles from "./styles.module.css";

const DocsFuzzySearch: React.FC = () => {

  const data: Data = useStaticQuery(graphql`
    query {
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
    }
  `)

  return <div className={styles.fuzzySearch}><ZIMFuzzySearch.Comp
  // optionally try with test data
  // as long as no data is defined -> will display loader 
  // data={testData.coremaData}
  data={data.allGoogleDocs.edges.map(edge => {
    return {
      label: edge.node.name,
      value: edge.node.path,
      txt: edge.node.childMarkdownRemark.excerpt,
      // additionally search through all headings
      headings: edge.node.childMarkdownRemark.headings.map(heading => `${heading.value}`).join(" ")
    }
  })}  

  showResultGrid={false}

  // data={[
  //   {
  //     label: "Receipe 01",
  //     value: "/link/to/category",
  //     //txt and tags are optional properties
  //     txt:"Nym weichsel vnd thu sy In ein haff",
  //     tags: ["suess", "bitter"],
  //   },
  //   {
  //     label:"Receipe02",
  //     value:"link/to/category",
  //     txt:"Tua rein wos longt und mer",
  //     tags:["sauer", "bitter"]
  //   },
  //   {
  //     label:"Receipe03",
  //     value:"link/to/somewhere",
  //     txt:"An fisch tua sulzen rein in spegg, ayn ay dazua tue no drauf amou wist honig dran mach. mit schmalczen reib ein.",
  //     tags: ["sauer", "bitter"]
  //   }
  // ]}

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



  // display search alert via using the onSearch prop
  //onSearch={(searchVal) => alert("Searching now for: " + searchVal + " (this message may be customized)")}

/></div>

}

export default DocsFuzzySearch;



  interface Heading {
      value: string;
  }

  interface ChildMarkdownRemark {
      excerpt: string;
      headings: Heading[];
  }

  interface Node {
      path: string;
      name: string;
      childMarkdownRemark: ChildMarkdownRemark;
  }

  interface Edge {
      node: Node;
  }

  interface AllGoogleDocs {
      edges: Edge[];
  }

  interface Data {
      allGoogleDocs: AllGoogleDocs;
  }



