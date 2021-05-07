import React from "react"
import Layout from "../components/Layout"
import FrontendBar from "../components/FrontendBar";
import DocsFuzzySearch from "../components/DocsFuzzySearch"
import { Router,  } from "@reach/router"

const Search = () => {
  return (
    <Layout
      center={
        <>
          <h1>Search</h1>
          <p>Find things across all relevant data of the Frontend Portal</p>
          <hr></hr>
          <h2>fuzzy find: </h2>
          <Router>
            <DocsFuzzySearch path="/dooku_client//search/:id"></DocsFuzzySearch>  
            <DocsFuzzySearch default></DocsFuzzySearch>  
          </Router>
          {/* <h2>Ongoing documentation</h2>
          <p>Last changed documents in ZIM Frontend folder in Google Drive: </p>
          <FrontendDocFeed/>
          <br></br>
          <br></br> */}
          
        </>
      }
      left={<><FrontendBar/></>}
    
    ></Layout>
  )
}

export default Search;
