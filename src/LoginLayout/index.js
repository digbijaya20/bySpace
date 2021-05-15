import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
// import LnLogo from '../../src/Login/Img/LnLogo';

// import NoteIcon from '../../src/Login/Img/NoteIcon';
// import ExamIcon from '../../src/Login/Img/ExamIcon';
// import VideoIcon from '../../src/Login/Img/VideoIcon';
// import NeckTieIcon from '../../src/Login/Img/NeckTieIcon';
import Box from '@material-ui/core/Box';
import { Hidden } from '@material-ui/core';
// import Layout from '../../components/Layout';
// import LnDarkImage from '../../static/img/login-background.png';


const useStyles = makeStyles(theme => ({
    lnLogoId: {
        height: '74px',
        width: '167px',
    },
    listItem: {
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        width: '90%%',       
    },
    boxId: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(2),
        justifyContent: 'flex-start',
    },
    listId: {
        marginBottom: '0px',
        textDecoration: 'none',
        listStyle: 'none',
    },
    loginRoot:{
        height:'calc(100vh - 50px)',
    },
    loginLayout:{
        minHeight:'calc(100vh - 50px)',
    },
    gridRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // overflow: 'hidden'
    },
    gridRootComponent:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:'20px'

    },
    subGrid: {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        // paddingTop: 97
    },
    lnLogo: {
        width: '100%',
        height: '100%',
        position: 'relative',
        objectFit: 'cover'    
    },
    leftListItem:{
        color: 'white',
        marginLeft: '30px',
        fontWeight: 'bold',
        fontSize:'14px'

    }

}));

LogInLayout.propTypes = {
    user: PropTypes.object,
};


function LogInLayout({ children}) {
    const classes = useStyles();

    return (

        <>
            
            {/* <Layout
                disableGutters
            > */}
                <div className={classes.gridRoot+ ' ' + classes.loginLayout} id='client-login-page'>
                    <Grid container >
                        <Hidden mdDown>
                            <Grid item lg={6} md={12} sm={12} xs={12} className={classes.subGrid +' ' + classes.loginRoot} >
                               oo
                                {/* <img src={LnDarkImage} className={classes.lnLogo}/> */}
                                <div className={classes.listItem}>
                                    <ul  >
                                        <li className={classes.listId}>
                                            <Box className={classes.boxId}>
                                                oo
                                                {/* <NoteIcon ></NoteIcon> */}
                                                <Typography className={classes.leftListItem}>University Notes</Typography>
                                            </Box>
                                        </li>
                                        <li className={classes.listId}>
                                            <Box className={classes.boxId}>
                                                oo
                                                {/* <ExamIcon ></ExamIcon> */}
                                                <Typography className={classes.leftListItem}>Exam question and solutions</Typography>
                                            </Box>
                                        </li>
                                        <li className={classes.listId}>
                                            <Box className={classes.boxId}>
                                                oo
                                                {/* <VideoIcon ></VideoIcon> */}
                                                <Typography className={classes.leftListItem}>Video Lectures and tutorials</Typography>
                                            </Box>
                                        </li>
                                        <li className={classes.listId}>
                                            <Box className={classes.boxId}>
                                                oo
                                                {/* <NeckTieIcon ></NeckTieIcon> */}
                                                <Typography className={classes.leftListItem}>Placement preparation contents</Typography>
                                            </Box>
                                        </li>

                                    </ul>

                                </div>

                            </Grid>
                        </Hidden>
                        <Grid item lg={6} md={12} sm={12} xs={12} className={classes.subGrid}
                        >
                            <Grid
                                container
                                spacing={1}
                                justify="center"
                            >
                                <Grid className={classes.gridRoot}
                                    item
                                    md={12}
                                    sm={12}
                                    xs={12}
                                >
                                    {/* <LnLogo className={classes.lnLogoId} /> */}
                                    ooo

                                </Grid>

                            </Grid>

                            <Grid
                                container
                                spacing={1}
                                justify="center"
                            >
                                <Grid className={classes.gridRootComponent}
                                    item
                                    md={12}
                                    sm={12}
                                    xs={12}
                                >
                                   
                                    {children}

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </div>
            {/* </Layout> */}
        </>

    );
}

export default dynamic(() => Promise.resolve(LogInLayout), {
    ssr: false
});