import React from "react";
import { Link } from "gatsby"
//@ts-ignore
import * as styles from "./styles.module.css";

const Nav: React.FC = () => {
  return (
      <>
      <nav className={`navbar navbar-expand-lg navbar-light sticky-top ${styles.nav}`}>
        
        {/* <Link className="navbar-brand" to="/">
         <img src="https://zimlab.uni-graz.at/uploads/-/system/appearance/header_logo/1/header_logo2.png" style={{width:65, height:25}}></img>
        </Link> */}
        <Link className="navbar-brand" to="/">
         Home
        </Link>
        <Link className="navbar-brand" to="/packages">
          Packages
        </Link>
        <Link className="navbar-brand" to="/overview">
         Overview
        </Link>
        <Link className="navbar-brand" to="/about">
         About
        </Link>
      </nav>
      <br></br>
      <br></br>
      </>
  );
};

export default Nav;
