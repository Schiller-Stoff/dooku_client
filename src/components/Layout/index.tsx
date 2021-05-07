import React from "react"
import "../../styles/index.css";
//@ts-ignore works as expected
import * as styles from "./index.module.css";
import RightSidebar from "../RightSidebar"; 
import { Grid, Container, Breadcrumbs, Typography } from "@material-ui/core"
import { Link } from "gatsby";
import Nav from "../Nav";


interface Props {
  left?: any
  center?: any
  right?: any
}

const Layout: React.FC<Props> = ({ left, center, right }) => {
  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"
      ></link> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700amp;display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
      />
      <link href="//db.onlinewebfonts.com/c/539a50bc747b98d2938eb0c713071ab3?family=GT+America+Mono+Bold" rel="stylesheet" type="text/css"/>

      <Nav></Nav>
      <br></br>
      <br></br>
      
      <br></br>
      <Grid container>
        <Grid xs={12} sm={2} item className={`${styles.leftSide}`}>
          <div className={`${styles.stickyLeft}`}>{left}</div>
        </Grid>
        <Grid xs={12} sm={8} xl={7} item className={`${styles.center}`}>
          <br></br>
          <br></br>
          <Container>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/">
                Home
              </Link>
            </Breadcrumbs>
            <Container>{center}</Container>
          </Container>
        </Grid>
        <Grid xs={12} sm={2} xl={3} item className={`${styles.rightSide}`}>
          <RightSidebar></RightSidebar>
          {right}
        </Grid>
      </Grid>
    </>
  )
}

export default Layout
