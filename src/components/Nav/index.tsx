import React from "react";
import { Link, useStaticQuery, graphql, navigate } from "gatsby"
//@ts-ignore
import * as styles from "./styles.module.css";
import { AppBar, Toolbar, Typography, IconButton, Button, TextField, InputAdornment, Tooltip, makeStyles } from "@material-ui/core"
import { Autocomplete } from '@material-ui/lab';
import { AccountCircle, FolderOpen, Home, Info, Search, ListAlt } from "@material-ui/icons";


const useStyles = makeStyles({
  navButton: {
    border: "none"
  },
  navBtnLabel: {
    textDecoration: "none",
    border:"none",
    fontFamily:'"GTAmericaMono",Consolas,Courier'
  },
  gatsbyLink: {
    textDecoration: "none"
  }
});


const Nav: React.FC = () => {

  const inputRef = React.useRef<undefined | HTMLInputElement>(undefined);
  const classes = useStyles();

  const data: {siteBuildMetadata: {buildTime: string}} = useStaticQuery(graphql`
    {
      siteBuildMetadata {
        buildTime(formatString: "DD.MM.YYYY | HH:MM")
      }
    }
  `);


  return (
      <>
      <AppBar position="fixed" className={styles.nav}>
        <Toolbar>      
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <Link to="/">
              <img src="https://zimlab.uni-graz.at/uploads/-/system/appearance/header_logo/1/header_logo2.png" style={{width:65, height:25}}></img>
            </Link>
          </IconButton> */}
        
          <Tooltip title="Homepage: Tool and feature overview">
            <Link to="/" className={classes.gatsbyLink} activeStyle={{borderBottom:"2px solid white"}}>
              <Button className={classes.navButton} startIcon={<Home></Home>} size="small" variant="text">
              {/* <Link to="/" activeStyle={{color: "tomato"}} ><Home></Home></Link> */}
              <Typography className={classes.navBtnLabel}>Home</Typography>
            </Button>
            </Link>
          </Tooltip>

          <Tooltip title="Published libraries and plugins on NPM">
            <Link to="/packages" className={classes.gatsbyLink} activeStyle={{borderBottom:"2px solid white"}}>
              <Button className={classes.navButton} startIcon={<><i className="fab fa-npm"></i></>} size="small" variant="text">
              {/* <Link to="/" activeStyle={{color: "tomato"}} ><Home></Home></Link> */}
              <Typography className={classes.navBtnLabel}>NPM</Typography>
            </Button>
            </Link>
          </Tooltip>

          <Tooltip title="Reference implementations for commonly shared components and concepts">
            <Link to="/refimpls" className={classes.gatsbyLink} activeStyle={{borderBottom:"2px solid white"}}>
              <Button className={classes.navButton} startIcon={<ListAlt></ListAlt>} size="small" variant="text">
              <Typography className={classes.navBtnLabel}>Refimpls</Typography>
            </Button>
            </Link>
          </Tooltip>

          <Tooltip title="Overview over the documentation source">
            <Link to="/overview" className={classes.gatsbyLink} activeStyle={{borderBottom:"2px solid white"}}>
              <Button className={classes.navButton} startIcon={<FolderOpen></FolderOpen>} size="small" variant="text">
              <Typography className={classes.navBtnLabel}>Doc</Typography>
            </Button>
            </Link>
          </Tooltip>

          <Tooltip title="About this webpage">
            <Link to="/about" className={classes.gatsbyLink} activeStyle={{borderBottom:"2px solid white"}}>
              <Button className={classes.navButton} startIcon={<Info/>} size="small" variant="text">
              <Typography className={classes.navBtnLabel}>About</Typography>
            </Button>
            </Link>
          </Tooltip>
          
          
          <span>
          <form onSubmit={(evt) => {
            evt.preventDefault();
            navigate(`/search/${inputRef ? inputRef.current.value : ''}`)
          }}>
          <TextField
            //className={classes.margin}
            id="input-with-icon-textfield"
            placeholder="Search"
            variant="standard"
            inputRef={inputRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton type="submit"> 
                    <Search ></Search>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          </form>
            <small>Last build: {data.siteBuildMetadata.buildTime}</small>
          </span>
        </Toolbar>
      </AppBar>
      </>
  );
};

export default Nav;
