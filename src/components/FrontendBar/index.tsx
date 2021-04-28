import React from "react";
//@ts-ignore
import * as styles from "./styles.module.css";
import { Link } from "gatsby"

const FrontendBar: React.FC = () => {
  return <ul className={styles.mainList}>
    <li>
      <div>
        <Link to="/frontend/doc/gamsjs/gamsjs-api">GamsJS API</Link>
        <p>Documentation for gamsJs</p>
      </div>
    </li>
    {/* <li>
      <div>
        <a href="#">Frontend Policy</a>
        <p>Frontend Technologies in context of DH research</p>
      </div>
    </li>
    <li>
      <div>
        <a href="#">Reference Impls</a>
        <p>Reference Inplementations for different GUI-features and Frontend-Techs.</p>
      </div>
    </li> */}
    <li>
      <div>
        <Link to="/frontend/doc/gams-projekt-template">GAMS Project Template</Link>
        <p>GAMS project setup template files needed to initialize a project on gamsdev. Display of different versions and currently recommended setup</p>
      </div>
    </li>
    {/* <li>
      <div>
        <a href="#">Tech Guidelines</a>
        <p>Development guidelines and tutorials for different frontend-technology used in context of DH research.</p>
      </div>
    </li> */}
  </ul>
}

export default FrontendBar;