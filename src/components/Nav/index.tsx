import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
//@ts-ignore
import * as styles from "./styles.module.css";

const Nav: React.FC = () => {

  const data: {siteBuildMetadata: {buildTime: string}} = useStaticQuery(graphql`
    {
      siteBuildMetadata {
        buildTime(formatString: "DD.MM.YYYY | HH:MM")
      }
    }
  `);


  return (
      <>
      <nav className={`navbar navbar-expand-lg bg-light sticky-top ${styles.nav}`}>
        
        {/* <Link className="navbar-brand" to="/">
         <img src="https://zimlab.uni-graz.at/uploads/-/system/appearance/header_logo/1/header_logo2.png" style={{width:65, height:25}}></img>
        </Link> */}
        <Link className="navbar-item text-dark" to="/" activeStyle={{textDecoration: "underline"}}>
         <i className="fas fa-home"></i> Home
        </Link>
        <Link className="navbar-item text-dark" to="/packages" activeStyle={{textDecoration: "underline"}}>
          <i className="fab fa-npm"></i> Packages
        </Link>
        <Link className="navbar-item text-dark" to="/refimpls" activeStyle={{textDecoration: "underline"}}>
          Reference Implementations
        </Link>
        <Link className="navbar-item text-dark" to="/overview" activeStyle={{textDecoration: "underline"}}>
        <i className="fab fa-google-drive"></i> Overview
        </Link>
        <Link className="navbar-item text-dark" to="/doc/client/dooku-client" activeStyle={{textDecoration: "underline"}}>
         About
        </Link>
        <small className="navbar-text text-dark">
          Last build: {data.siteBuildMetadata.buildTime}
        </small>
      </nav>
      </>
  );
};

export default Nav;
