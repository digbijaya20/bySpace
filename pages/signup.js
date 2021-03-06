import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import authService from '../service/auth.service';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import { Hidden } from '@material-ui/core';
import LoginLayout from '../src/LoginLayout';
 

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

 function SignUp(props) {
    const classes = useStyles();
    const router = useRouter();


    // const handleSignUp = async () => {
    //     const firstName = document.getElementById('firstName').value;
    //     const lastName = document.getElementById('lastName').value;
    //     const username = document.getElementById('email').value;
    //     const password = document.getElementById('password').value;

    //     await authService.signUp(firstName, lastName, username, password);
    //     props.history.push({
    //         pathname: '/'
    //     });
    // };

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
                    Sign up
                </Typography>
                <div className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phone"
                                label="Phone No"
                                name="phone"
                                autoComplete="phone"
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        // onClick={() => handleSignUp(props)}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item 
                        // onClick={()=>router.push('/auth/login')}
                        >
                            <Link href='/login'>
                                Already have an account? Sign in
                                </Link>
                           
                        </Grid>
                    </Grid>
                </div>
            </div>
           
        </Container>
        </Grid>
        </Grid>
    );
}

export default dynamic(() => Promise.resolve(SignUp), {
    ssr: false
});
