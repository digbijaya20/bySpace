import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import PropTypes from 'prop-types';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useState } from "react";
// import Layout from '../../components/Layout';
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import dynamic from "next/dynamic";

// const theme = createMuiTheme();

// theme.typography.h3 = {
//     fontSize: '1.2rem',
//     '@media (min-width:600px)': {
//         fontSize: '2.1rem',
//     },
//     [theme.breakpoints.down('sm')]: {
//         fontSize: '1.3rem',
//     },
// };
// theme.typography.h6 = {
//     fontSize: '1.2rem',
//     '@media (min-width:600px)': {
//         fontSize: '1.4rem',
//     },
//     [theme.breakpoints.down('sm')]: {
//         fontSize: '1rem',
//     },
// };

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  primeCardGrid: {
    justifyContent: "center",
    display: "flex",
  },
  card: {
    //position: "relative",

    border: "solid 1px #944e6c",
    // padding: theme.spacing(3, 2),

    boxShadow: "none",
    backgroundColor: "#944e6c",
    borderRadius: "0px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
      borderRadius: "15px",
    },
  },

  primeMedia: {
    backgroundSize: "contain",
    width: "100%",
    minHeight: "200px",
    // [theme.breakpoints.down('xs')]: {
    //     height:'30%',

    // },
  },
  //   unlimited: {
  //     color: " #888888",
  //     fontSize: "16px",
  //     [theme.breakpoints.down("xs")]: {
  //       fontSize: "16px",
  //     },
  //   },
  container: {
    marginBottom: "62px",
  },
  boxHeight: {
    //position: "relative",
    textAlign: "center",
    //top: "8px",
    //fontSize: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  //   cardText: {
  //     textAlign: "center",
  //     fontWeight: "Bold",
  //     fontSize: "24px",
  //     [theme.breakpoints.down("xs")]: {
  //       fontSize: "15px",
  //     },
  //   },

  upgradeList: {
    fontWeight: "700",
    fontSize: "39px",
    color: "#fff",
    paddingTop:'50px',
    [theme.breakpoints.down("md")]: {
      fontSize: "39px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      textAlign: "center",
    },
  },
  cardTitle: {
    fontWeight: "550",
    fontSize: "25px",
    color:'#fff'
  },
  cardThings: {
    //fontWeight: "550",
    fontSize: "20px",
     color:'#fff'
  },
//   sided: {
//      // backgroundColor:'#16c79a',
//     height: "5px",
//     width: "40%",
//     display:'inline-block',
//     marginTop: "1em",
//     marginBottom: "2em",
//     marginLeft: "370px",
//     color: "#fff",
//     backgroundColor: "#16c79a",
//     [theme.breakpoints.down("xs")]: {
//       width: "28%",
//       margin: "auto",
//     },
//   },
bar:{
    width: "40%",
    height: "5px",
}
}));

const CustomerReview = () => {
  const classes = useStyles();

  return (
    <Box style={{ marginTop: "8rem", backgroundColor:'#944e6c' }}>
      <Container>
        <Typography
          className={classes.upgradeList}
          align="center"
          style={{ fontWeight: "bold" }}
        >
          CUSTOMER REVIEWS
        </Typography>
        {/* <hr className={classes.sided} color="#fff" backgroundColor='#fff' /> */}
        <hr color='#fff' className={classes.bar}/>

        <Grid container style={{ marginTop: "2rem" }} spacing={3}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card className={classes.card}>
              <CardMedia
                component="svg"
                className={classes.primeMedia}
                image="https://explore.zoom.us/docs/image/postattendee/postattendee-building-forward.png"
                height="120"
              />
              <CardContent className={classes.boxHeight}>
                <Typography
                  textAlign="center"
                  variant="h5"
                  className={classes.cardTitle}
                >
                  Skin Care Goodies
                </Typography>
                <Typography
                  textAlign="center"
                  variant="h6"
                  className={classes.cardThings}
                >
                  We offer only dermatologist recomandded products
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card className={classes.card}>
              <CardMedia
                component="svg"
                className={classes.primeMedia}
                image="https://explore.zoom.us/docs/image/postattendee/postattendee-building-forward.png"
                height="120"
              />
              <CardContent className={classes.boxHeight}>
                <Typography
                  textAlign="center"
                  variant="h5"
                  className={classes.cardTitle}
                >
                  Bath and Body
                </Typography>
                <Typography
                  textAlign="center"
                  variant="h6"
                  className={classes.cardThings}
                >
                 Items to nourish your skin and nature your senses
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card className={classes.card}>
              <CardMedia
                component="svg"
                className={classes.primeMedia}
                image="https://explore.zoom.us/docs/image/postattendee/postattendee-building-forward.png"
                height="120"
              />
              <CardContent className={classes.boxHeight}>
                <Typography
                  textAlign="center"
                  variant="h5"
                  className={classes.cardTitle}
                >
                  Beauty Products
                </Typography>
                <Typography
                  textAlign="center"
                  variant="h6"
                  className={classes.cardThings}
                >
                 Over 100 brands offering a vast variety options
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// exporCustomerReview;

export default dynamic(() => Promise.resolve(CustomerReview), {
  ssr: false,
});
