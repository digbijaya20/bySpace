import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import loginService from '../service/auth.service';
// import {toast} from 'react-toastify';
import Link from 'next/link'
import dynamic from 'next/dynamic';
import LoginLayout from '../src/LoginLayout';
import { Hidden } from '@material-ui/core';

function Copyright() {
    return (
        // <Typography variant="body2" color="textSecondary" align="center">
        //     {'Copyright © '}
        //     <Link color="inherit" href="https://material-ui.com/">
        //         Your Website
        //     </Link>{' '}
        //     {new Date().getFullYear()}
        //     {'.'}
        // </Typography>
        <div></div>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.background.PattensBlue
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    subGrid2:{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        maxWidth: 550,
        padding: theme.spacing(1.875,3.75),
        [theme.breakpoints.down('xs')]:{
            padding: 0,
        }
    },
}));

 function SignIn(props) {
    const classes = useStyles();
    const handleClick  = async (props) => {
        const username = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // let isAuthenticated;
        // try {
        //     isAuthenticated = await loginService.login(username, password);
        // } catch (ex) {
        //     if(isAuthenticated === false) {
        //         toast('User is not authorized. Please sign up');
        //     }
        //     return;
        // }

        // if(isAuthenticated) {
        //     localStorage.setItem('isAuthenticated', 'true');
        //     props.history.push({
        //         pathname: '/homepage'
        //     });
        // }
    };
    return (
        <Grid container>
             <Hidden xsDown>
             <Grid item xs= {12} sm={8} md={8}>
                 <LoginLayout/>
             </Grid>
             </Hidden>
            <Grid item xs= {12} sm={4} md={4} className={classes.subGrid2}> 
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <div className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => handleClick(props)}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href='/' variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item >
                            <Link href='/signup' variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
        </Grid>
        </Grid>
    );
}


export default dynamic(() => Promise.resolve(SignIn), {
    ssr: false
});