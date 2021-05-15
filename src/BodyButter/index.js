import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import Forward from '../../public/app-static/img/PrimeLanding/Forward.svg';
import useTheme from "@material-ui/styles/useTheme";
//import PropTypes from 'prop-types';
// import Upgrade from '../../public/app-static/img/PrimeLanding/Artboard.svg';
import Box from "@material-ui/core/Box";
// import Layout from '../../components/Layout';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import dynamic from "next/dynamic";

// const theme = createMuiTheme();

// theme.typography.h3 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '2.1rem',
//   },
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '1.3rem',
//   },
// };

const useStyles = makeStyles((theme) => ({
  // gridc:{
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  // },
  upgrade: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'baseline',
    // width: '-webkit-fill-available',
  },
  uImage: {
    //height: "auto",
    width: "100%",
    //position: 'relative',
    marginTop: "-100px",

    [theme.breakpoints.up("lg")]: {
      left: "33px",
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
      marginTop: "89px",

      // marginTop:theme.spacing(1)
    },

    [theme.breakpoints.down("sm")]: {
      height: "550px",
      margin: "auto",

      // marginTop:theme.spacing(1)
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",

      // marginTop:theme.spacing(1)
    },
  },
  upgradeList: {
    fontWeight: "700",
    fontSize: "39px",
    color: "#74a012",
    [theme.breakpoints.down("md")]: {
      fontSize: "39px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      textAlign: "center",
    },
  },
  side: {
    height: "5px",
    width: "100%",
    marginTop: "1em",
    marginBottom: "2em",
    marginLeft: "0",
    color: "#16c79a",
    backgroundColor: "#16c79a",
    [theme.breakpoints.down("xs")]: {
      width: "28%",
      margin: "auto",
    },
  },
}));

function BodyButter() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Grid container style={{ marginTop: "8rem" }}>
        <style>
          {`
                 .reason {
                    display: flex;
                    flexDirection: row;
                    maxWidth: 100%;
                    margin: 10px 0 0 0;
                }
                 .reason-container {
                    text-align: start;
                   
                }
                .reason-arrow {
                    height: 20px;
                    width: 25px;
                    
                }
                .content-body {
                    max-width: 100%;
                    font-size: 25px;
                    line-height: 1.5;
                    color:#74a012;
                }
                .header-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: baseline;
                    width: 80%;
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '20px'
                    },
                }
                    
                }
              
            `}
        </style>

        <Grid item lg={6} md={6} sm={12} xs={12} align="center">
          <div className="header-container">
            <Box className={classes.upgrade}>
              <Typography
                className={classes.upgradeList}
                align="left"
                style={{ fontWeight: "bold" }}
              >
                BODY BUTTERS
              </Typography>
              <hr className={classes.side} />

              <div className="reason-container">
                <Typography
                  className="content-body"
                  style={{ textAlign: "start" }}
                  variant="h5"
                >
                  Skin Softer, moisturizer, anti-inflammatory, for dry
                  <br /> and eczema prone skin, sooting and relaxing
                </Typography>
              </div>
            </Box>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} align="center" display="flex">
          <Box pl={8} display="flex" justifyContent="center">
            {/* <img
                            alt="background"
                            className={classes.uImage}
                            src={Upgrade}
                        /> */}
            <img
              className={classes.uImage}
              src="https://explore.zoom.us/docs/image/postattendee/postattendee-building-forward.png"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

// export default BodyButter;

export default dynamic(() => Promise.resolve(BodyButter), {
  ssr: false,
});
