import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Paper } from "@material-ui/core"

const DocsTree: React.FC = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allGoogleDocs {
        edges {
          node {
            path
            name
            breadcrumb {
              slug
            }
          }
        }
      }
    }
  `)

  let paths = []
  data.allGoogleDocs.edges.forEach(edge => {
    edge.node.breadcrumb.forEach(crumb => {
      paths.push(crumb.slug)
    })
  })
  let uniques: string[] = [...new Set(paths)]
  console.log(uniques)

  return (
    <>
      <h2>Google Drive Tree</h2>
      <p>
        Embedment of the <em>Frontend folder</em> in context of the complete
        ZIM-Gdrive documentation.
      </p>
      <Paper square elevation={5}>
      <ul
        style={{
          listStyle: "none",
          paddingLeft: 0,
          maxHeight: "75vh",
          overflowY: "scroll",
          padding:"1em",
          border:"2px solid darkblue"
        }}
      >
        {uniques.sort().map((unique, curInd) => {
          return (
            <li
              style={{
                paddingLeft: `${(unique.split("/").length - 1) * 2}em`,
                borderBottom: unique.split("/")[unique.split("/").length - 1] === "frontend" ? "10px solid whitesmoke" : "3px solid whitesmoke",
                textDecoration:
                  uniques[curInd + 1] && uniques[curInd + 1].includes(unique)
                    ? ""
                    : undefined,
              }}
            >
              {uniques[curInd + 1] && uniques[curInd + 1].includes(unique) ? (
                <>
                  <i className="far fa-folder"></i>{" "}
                  <span>{unique.split("/")[unique.split("/").length - 1]}</span>
                </>
              ) : (
                <Link to={unique} style={{ color: "darkblue" }}>
                  <i className="far fa-file-alt"></i>{" "}
                  <span>{unique.split("/")[unique.split("/").length - 1]}</span>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
      </Paper>
    </>
  )
}

export default DocsTree

interface Node {
  path: string
  name: string
  breadcrumb: {
    slug: string
  }[]
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
