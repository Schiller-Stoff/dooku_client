import React from "react"
import "../../styles/index.css";
//@ts-ignore works as expected
import * as styles from "./index.module.css";
import RightSidebar from "../RightSidebar"; 


interface Props {
  left?: any
  center?: any
  right?: any
}

const Layout: React.FC<Props> = ({ left, center, right }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700amp;display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
      />

      <div className="row">
        <div className={`col-lg-3 ${styles.leftSide}`}>
          <div className={`${styles.stickyLeft} sticky-top`}>{left}</div>
        </div>
        <div className={`col-lg-8 ${styles.center}`}>
          <div className="container">{center}</div>
        </div>
        <div className={`col-lg ${styles.rightSide}`}>
          <RightSidebar></RightSidebar>
          {right}
        </div>
      </div>
    </>
  )
}

export default Layout
