import React from "react";
import Layout from "../components/Layout"
import Nav from "../components/Nav";
import FrontendBar from "../components/FrontendBar";


const About: React.FC = () => {

  return <Layout 
  center={
    <> 
      <Nav></Nav>
      <h1>About</h1>
      <h2>Aims and Content</h2>
      <p>The page tries to provide orientation, material and tools for frontend-technology relevant for DH research especially for the development of digital editions.</p>
      <h2>How to?</h2>
      <p>Navigate through the zim-wide documentation via using the search / list on home page. Feel free to use whatever you want, wherever you like.</p>
      <h2>General Aims</h2>
      <p>Make modern frontend-technology available to a growing community of Digital Humanists.</p>
      <p>Simultaneously show paths to modern and expressive, as well as sustainable and reliable technology.</p>
      <p>Bridge the gap between the necessity for freedom and plurality of expression (for building scientific valuable GUIs) and for modularity, composition and reuse of technology (for building a mantainable and stable web platform)</p>
      <p>...For more see "Overview"</p>
    </>
  }
  left={<FrontendBar/>}
  ></Layout>

}


export default About;