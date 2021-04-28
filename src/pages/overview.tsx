import React from "react";
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Nav from "../components/Nav"
import DocsTree from "../components/DocsTree"
import FrontendBar from "../components/FrontendBar";

const Overview = () => {
  return (
    <Layout center={
      <>
        <Nav></Nav>
        <h1>Documentation Overview</h1>
        <p>This pages visualizes which documents from the ZIM-Gdrive are used to generate this static website.</p>
        <DocsTree></DocsTree>
      </>
    }
    left={<FrontendBar/>}
    ></Layout>
  )
}

export default Overview;