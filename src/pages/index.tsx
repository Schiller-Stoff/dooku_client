import React from "react"
import Layout from "../components/Layout"
import FrontendBar from "../components/FrontendBar";
import DocsFuzzySearch from "../components/DocsFuzzySearch"
import FrontendDocFeed from "../components/App/FrontendDocFeed";
import { GridListTile, GridList, Card, Typography, CardContent, CardActions, Button, Paper, Container, makeStyles, Grid } from "@material-ui/core";
import { Search, ListAlt, DynamicFeed, Info } from "@material-ui/icons";
import {Link, navigate} from "gatsby"

const useStyles = makeStyles({
  gridTile: {
    "&:hover": {
      background:"lightgreen",
      cursor: "pointer",
      color:"lightgreen !important"
    },
    transition:"all .15s ease-in",
  } 
})

const Home = () => {

  const classes = useStyles();

  return (
    <Layout
      center={
        <>
          <h1>Frontend Dooku </h1>
          <p>Welcome to the <b>frontend documentation</b> portal for DH research at <b>ZIM Graz!</b></p>
          <hr></hr>
          {/* <Paper style={{border: "2px solid darkblue", background:"lightblue"}} square elevation={3}>
            <Container>
              <br></br>
              <Typography style={{color:"darkblue"}}>Welcome to the <b>frontend documentation</b> portal for DH research at <b>ZIM Graz.</b></Typography>
              <br></br>
            </Container>
          </Paper> */}
          {/* <br></br> */}
          <h2>Tools</h2>
          <p>Overview of the intended <b>main features</b> of this webpage:</p>
          <Grid sm={12} lg={10}>

          
          <Paper square elevation={5}>
          <GridList cols={3}  cellHeight={180}>
              <GridListTile style={{border:"2px solid darkblue"}} className={classes.gridTile} onClick={() => navigate("/search")}>
                <Card style={{border:"none"}} elevation={0}>
                <CardContent>
                    
                  <Typography variant="h3" component="h3">
                    <Search style={{display:"block", fontSize:".5em"}}></Search>
                    <b style={{fontSize:".5em", color:"darkblue", letterSpacing:"-1px"}}>search</b>
                  </Typography>
                  <Typography variant="body2" component="p">
                    find relevent material like packages, documentation, demos or examples.
                    <br />
                    <br />
                  </Typography>
                 
                </CardContent>
                
                {/* <CardActions>
                  <Button size="small">Find resources </Button>
                </CardActions> */}
              </Card>
              </GridListTile>
              <GridListTile className={classes.gridTile} style={{borderTop:"2px solid darkblue", borderRight:"2px solid darkblue", borderBottom:"2px solid darkblue"}} onClick={() => navigate("/packages")}>
                <Card elevation={0}>
                  <CardContent>

                    <Typography variant="h3" component="h3">
                    <i style={{display:"block", fontSize:".5em"}} className="fab fa-npm"></i> 
                    <b style={{fontSize:".5em", color:"darkblue", letterSpacing:"-1px"}}>reuse</b>
                  </Typography>  
                    <Typography variant="h5" component="h2">
                     
                    </Typography>
                    <Typography variant="body2" component="p">
                      discover all published, ready to use <b>packages on npmjs.com</b>
                      <br />
                      <br />
                    </Typography>
                  
                  </CardContent>
                  
                  {/* <CardActions>
                    <Button size="small">Find resources </Button>
                  </CardActions> */}
                </Card>
              </GridListTile>

              <GridListTile className={classes.gridTile} style={{borderTop:"2px solid darkblue", borderBottom:"2px solid darkblue", borderRight:"2px solid darkblue"}} onClick={() => navigate("/refimpls")}>
                <Card elevation={0}>
                  <CardContent>
                    <Typography variant="h3" component="h3">
                      <ListAlt style={{display:"block", fontSize:".5em"}}/> 
                      <b style={{fontSize:".5em", color:"darkblue", letterSpacing:"-1px"}}>how to</b>
                    </Typography>

                    <Typography variant="h5" component="h2">
                    
                    </Typography>
                    <Typography variant="body2" component="p">
                      find <b>best practices</b> for using libraries, documentation, demos and examples
                      <br />
                      <br />
                    </Typography>
                  
                  </CardContent>
                  
                  {/* <CardActions>
                    <Button size="small">Find resources </Button>
                  </CardActions> */}
                </Card>
              </GridListTile>
              <GridListTile className={classes.gridTile} style={{borderRight:"2px solid darkblue",borderLeft:"2px solid darkblue", borderBottom:"2px solid darkblue"}} onClick={() => navigate("/overview")}>
                <Card elevation={0}>
                  <CardContent>
                  <Typography variant="h3" component="h3">
                  <i style={{display:"block", fontSize:".5em"}} className="fab fa-google-drive"></i>
                  <b style={{fontSize:".5em", color:"darkblue", letterSpacing:"-1px"}}>doc</b>
                  </Typography>
                    <Typography variant="body2" component="p">
                      explore <b>documentation</b> and notes created in the shared tooling.
                      <br />
                      <br />
                    </Typography>
                  
                  </CardContent>
                  
                  {/* <CardActions>
                    <Button size="small">Find resources </Button>
                  </CardActions> */}
                </Card>
              </GridListTile>
              <GridListTile className={classes.gridTile} style={{borderRight:"2px solid darkblue", borderBottom:"2px solid darkblue"}} onClick={() => navigate("/overview")}>
                <Card elevation={0}>
                  <CardContent>
                  <Typography variant="h3" component="h3">
                    <DynamicFeed style={{display:"block", fontSize:".5em"}}></DynamicFeed>
                    <b style={{fontSize:".5em", letterSpacing:"-1px", color:"darkblue"}}>feed</b>
                  </Typography>
                    <Typography variant="body2" component="p">
                      explore documentation and notes created in the shared tooling.
                      <br />
                      <br />
                    </Typography>
                  
                  </CardContent>
                  
                  {/* <CardActions>
                    <Button size="small">Find resources </Button>
                  </CardActions> */}
                </Card>
              </GridListTile>
              <GridListTile className={classes.gridTile} style={{borderRight:"2px solid darkblue", borderBottom:"2px solid darkblue"}} onClick={() => navigate("/overview")}>
                <Card elevation={0}>
                  <CardContent>
                  <Typography variant="h3" component="h3">
                    <Info style={{display:"block", fontSize:".5em"}}></Info>
                    <b style={{fontSize:".5em", letterSpacing:"-1px", color:"darkblue"}}>inform</b>
                  </Typography>
                    <Typography variant="body2" component="p">
                      basic information <b>about this portal</b>.
                      <br />
                      <br />
                    </Typography>
                  
                  </CardContent>
                  
                  {/* <CardActions>
                    <Button size="small">Find resources </Button>
                  </CardActions> */}
                </Card>
              </GridListTile>
          </GridList>
          </Paper>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          {/* <img style={{maxWidth:"8vw", display:"inline", filter:"grayscale(100%) contrast(175%)"}} src="https://cdn.custom-cursor.com/packs/2131/pack2756.png"></img> */}
          {/* <DocsFuzzySearch></DocsFuzzySearch> */}
          <h2>Ongoing documentation</h2>
          <p>Last changed documents in ZIM Frontend folder in Google Drive: </p>
          <FrontendDocFeed/>
          <br></br>
          <br></br>
          <br></br>
          {/* <h2>Ongoing Coding on Gitlab</h2> */}
            
          
        </>
      }
      left={<FrontendBar/>}
    
    ></Layout>
  )
}

export default Home
