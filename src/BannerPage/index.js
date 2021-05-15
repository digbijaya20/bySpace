import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Banner from '../../public/BannerImg/Banner.svg';
import Banner2 from '../../public/BannerImg/Banner2.svg';
import Banner3 from '../../public/BannerImg/Banner3.svg';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import dynamic from 'next/dynamic';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath: Banner,
    },
    {
        label: 'VideoLecture',
        imgPath: Banner2,
    },
    {
        label: 'Previous Exam paper',
        imgPath: Banner3,
    },
];

// const theme = createMuiTheme({
//     overrides: {
//         // Style sheet name ⚛️
//         MuiMobileStepperDotActive: {
//             // Name of the rule

//             // Some CSS
//             color: 'white',
//         },
//     },
// });

const useStyles = makeStyles((theme) => ({
    // root: {},
    dots: {
        color: 'white',
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        // height: "580px",
        height: 'auto',
        display: 'block',
        overflow: 'hidden',
        width: '100%',
        // objectFit: "cover",
        objectFit: 'contain',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            objectFit: 'contain',
        },
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            height: '489px',
            objectFit: 'cover',
        },
    },
    imageBox: {
        position: 'relative',
        color: 'white',
    },
    centered: {
        position: 'absolute',
        top: '38%',
        left: '7%',
        // fontSize: "20px",
        fontWeight: 'bold',
        textAlign: 'left',
        wordSpacing: '2px',
        [theme.breakpoints.down('md')]: {
            fontSize: '5px',
            top: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            top: '90px',
            left: '10px',
            right: '10px',
        },
    },
    button: {
        borderRadius: '5px',
        height: '51px',
        width: '180px',
        fontSize: '20px',
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            height: '37px',
            width: '120px',
            fontSize: '12px',
            position: 'relative',
            top: '10px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '47px',
            width: '160px',
            fontSize: '16px',
            position: 'relative',
            top: '59px',
        },
    },
    container: {
        //margin: '1% 0 0',
        marginTop:'10px',
        [theme.breakpoints.down('md')]: {
            margin: '25px 30px 0 30px ',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0px',
            marginRight: '0px',
            marginTop: '0px',
        },
    },
    mobileStep: {
        background: 'transparent',
        position: 'relative',
        bottom: '35px',
        [theme.breakpoints.down('sm')]: {
            bottom: '26px',
        },
        [theme.breakpoints.down('xs')]: {
            bottom: '54px',
        },
    },
    activeColor: {
        backgroundColor: `${theme.palette.common.white} !important`,
    },
    defaultDotColor: {
        height: 12,
        width: 12,
        backgroundColor: theme.palette.grey['500'],
        [theme.breakpoints.down('md')]: {
            height: 8,
            width: 8,
            position: 'relative',
            bottom: '10px',
        },
    },
    readMore: {
        fontSize: '16px',
        fontWeight: '50',
        [theme.breakpoints.down('md')]: {
            fontSize: '13px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '19px',
        },
    },
    heroText: {
        fontSize: '34px',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            fontSize: '23px',
            top: '2px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '35px',
        },
    },
    heroSubText: {
        fontSize: '20px',
        fontWeight: '400',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            fontSize: '13px',
            top: '8px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '14.3px',
            top: '10px',
            margin: '0px 5px 0 5px',
        },
    },
}));

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const handleClick = () =>
        document
            .getElementById('cat-search')
            .scrollIntoView({ block: 'center', inline: 'center' });

    return (
        <Box className={classes.container} >
            <Grid container display="flex" justify="center">
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <div className={classes.imageBox}>
                                    <img
                                        className={classes.img}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                    <div className={classes.centered}>
                                        <span className={classes.readMore}>
                                            {' '}
                                            Read from
                                        </span>
                                        <br />
                                        <span className={classes.heroText}>
                                            {' '}
                                            Updated and Verified Notes
                                        </span>
                                        <br />
                                        <span className={classes.heroSubText}>
                                            Each Prime note is hand-crafted by
                                            subject experts
                                            <br />
                                            to give you the best Learning and
                                            Understanding
                                        </span>{' '}
                                        <br />
                                        <br />
                                        <Button
                                            className={classes.button}
                                            size="large"
                                            variant="contained"
                                            gutterBottom
                                            color="primary"
                                            onClick={handleClick}
                                        >
                                            Buy Now
                                        </Button>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>

                <MobileStepper
                    className={classes.mobileStep}
                    variant="dots"
                    classes={{
                        dotActive: classes.activeColor,
                        dot: classes.defaultDotColor,
                    }}
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}

                    //         nextButton={
                    //             <Button size="small" onClick={handleNext} disabled={activeStep === (maxSteps-1)}>
                    //   Next
                    //                 {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    //             </Button>
                    //         }
                    //         backButton={
                    //             <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    //                 {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    //   Back
                    //             </Button>
                    //         }
                />
            </Grid>
        </Box>
    );
}

// export default SwipeableTextMobileStepper;
export default dynamic(() => Promise.resolve(SwipeableTextMobileStepper), {
    ssr: false,
});
