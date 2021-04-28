import React from "react";
//@ts-ignore
import * as styles from "./styles.module.css";

const RightSideBar: React.FC = () => {

  return (
    <aside className={styles.sidebarMain}>
      <div className={styles.iconHolder}>
        <a target="_blank" rel="noopener noreferrer" href="https://zimlab.uni-graz.at/gams/frontend"><i className="fab fa-gitlab"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://informationsmodellierung.uni-graz.at/de/"><img alt="uni graz logo" src="https://static.uni-graz.at/fileadmin/_processed_/1/3/csm_2018-11-22_ZIM_schwarz_typo3_24124f9364.png"></img></a>
        <a target="_blank" rel="noopener noreferrer" href="https://zimlab.uni-graz.at/gams/frontend/docuclient/-/issues"><i className="far fa-comment-dots"></i></a>
      </div>
    </aside>  
  )


}


export default RightSideBar;
