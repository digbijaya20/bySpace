import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
// import theme from '../Util/theme';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialPinterest,
  TiSocialLinkedin,
  TiSocialInstagram
} from 'react-icons/ti';
import dynamic from "next/dynamic";
import { Box } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles((theme) => ({
    footer: {
      marginTop: theme.spacing(5),
      //backgroundColor: theme.palette.grey['100'],
      padding: `${theme.spacing(3.9)}px ${theme.spacing(
        16.25
      )}px  ${theme.spacing(1.55)}px`,
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(3.5)
      }
    },
    bydiTitle:{
        fontSize:'40px',
        fontFamily:'Courier, Monaco, monospace',
        fontWeight:'700'
    },
    bydiText:{
        fontSize:'25px',
        fontFamily:'cursive',
    },
    copyright:{
        marginTop:'1rem',
        color:'grey',
    },
    policyList:{
        fontSize:'27px',
        marginBottom:'20px',
        fontWeight:'600',
    },
    avatarContainer: {
        display: 'flex',
        marginTop: 'auto',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(2)
        }
      },
      icon: {
        fontSize: theme.spacing(4)
      },
}));
function Footer(){
    const classes = useStyles();

    return(
        <Paper className={classes.footer} >
            <Grid container spacing={4}>
                <Grid item xs={12} sm={5} md={5} lg={5} >
                    <Typography variant='h2' className={classes.bydiTitle}>About BYDI Organics!</Typography>
                    <Typography variant='h6' className={classes.bydiText}>BYDI Organics is proud to be the Indian Organic MakeUp
                    brand with a range of products specically designed to suit Indian tones and textures.Completely devoid of
                    chemical preservatives, we have used only natural and organically sourced ingredients to give you on-trend 
                    makeup that is lightweight, and yet long lasting
                    </Typography>
                    <Typography variant="h5"  className={classes.copyright}>Copyright ©  {new Date().getFullYear()} Ruby's Organics</Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3} >
                   <List>
                       <ListItem className={classes.policyList}>Terms of Services</ListItem>
                       <ListItem className={classes.policyList}>Privacy Policy</ListItem>
                       <ListItem className={classes.policyList}>Refund Policy</ListItem>
                       <ListItem className={classes.policyList}>Contact Us</ListItem>
                       <ListItem className={classes.policyList}>Business Queries</ListItem>


                   </List>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} >
                <Typography variant='h2' className={classes.bydiTitle}>TALK TO US</Typography>
                <Typography variant='h5' className={classes.bydiPhone}>+(91)- 9668685560</Typography>
                <Typography variant='h5' className={classes.bydiEmail}><a href='mailto:bydiorganics@gmail.com'>
                bydiorganics@gmail.com </a></Typography>
                <div className={classes.avatarContainer}>
                <IconButton
                 aria-label='delete'
                 href='#'
                 className={classes.margin}>
                <TiSocialFacebook className={classes.icon} color='blue' />
                </IconButton>
                <IconButton
                 aria-label='delete'
                 href='#'
                 className={classes.margin}>
                <TiSocialTwitter className={classes.icon} color='#1DA1F2'/>
                </IconButton>
                <IconButton
                 aria-label='delete'
                 href='#'
                 className={classes.margin}>
                <TiSocialPinterest className={classes.icon} color='#E60023' />
                </IconButton>
                <IconButton
                 aria-label='delete'
                 href='#'
                 className={classes.margin}>
                <TiSocialLinkedin className={classes.icon}  color='#0e76a8' />
                </IconButton>
                <IconButton
                 aria-label='delete'
                 href='#'
                 className={classes.margin}>
                <TiSocialInstagram className={classes.icon} color='#bc2a8d' />
                </IconButton>
                </div>
                
                </Grid>

                
            </Grid>
        </Paper>
    )
}


export default dynamic(() => Promise.resolve(Footer), {
    ssr: false,
  });