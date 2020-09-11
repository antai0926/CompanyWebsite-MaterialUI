import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

import CallToAction from './ui/CallToAction';

import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';
import { useDispatch } from 'react-redux';

import { setValue, setSelectedIndex } from '../redux/page/page.action';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: '4em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  buttonSpan: {
    marginRight: 10,
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: '8em 0',
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  infoItem: {
    [theme.breakpoints.down('xs')]: {
      margin: '3em 0',
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'));
  const dispatch = useDispatch();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/**-----Hero Block---- */}
      <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br /> to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/estimate"
                  className={classes.estimateButton}
                  variant="contained"
                  onClick={() => dispatch(setValue(5))}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButtonHero}
                  onClick={() => dispatch(setValue(3))}
                >
                  <span className={classes.buttonSpan}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>

      {/**-----Service Block---- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchSM ? 'center' : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchSM ? 0 : '5em',
              textAlign: matchSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                dispatch(setValue(1));
                dispatch(setSelectedIndex(1));
              }}
            >
              <span className={classes.buttonSpan}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customSoftwareIcon}
              alt="custom software icon"
            />
          </Grid>
        </Grid>
      </Grid>

      {/**-----iOS/Android Block---- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchSM ? 0 : '5em',
              textAlign: matchSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Devolopment</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{' '}
              {matchSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                dispatch(setValue(1));
                dispatch(setSelectedIndex(2));
              }}
            >
              <span className={classes.buttonSpan}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt="mobile phone icon"
            />
          </Grid>
        </Grid>
      </Grid>

      {/**-----websites Block---- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchSM ? 'center' : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchSM ? 0 : '5em',
              textAlign: matchSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Website Devolopment</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                dispatch(setValue(1));
                dispatch(setSelectedIndex(3));
              }}
            >
              <span className={classes.buttonSpan}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={websitesIcon}
              alt="website icon"
            />
          </Grid>
        </Grid>
      </Grid>

      {/**-----Revolution Block---- */}
      <Grid item>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: matchXS ? '70em' : '100em', marginTop: '12em' }}
          className={classes.revolutionBackground}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant="h3">The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    className={classes.learnButtonHero}
                    onClick={() => dispatch(setValue(2))}
                  >
                    <span className={classes.buttonSpan}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* <div className={classes.revolutionBackground} /> */}
        </Grid>
      </Grid>

      {/**-----Information Block---- */}
      <Grid item style={{ height: matchXS ? '50em' : '80em' }}>
        <Grid
          container
          direction={matchXS ? 'column' : 'row'}
          alignItems="center"
          className={classes.infoBackground}
          justify={matchXS ? 'center' : 'space-between'}
          style={{ padding: '5em' }}
        >
          <Grid item className={classes.infoItem}>
            <Grid
              container
              direction="column"
              alignItems={matchXS ? 'center' : 'flex-end'}
            >
              <Typography variant="h2" style={{ color: 'white' }}>
                About Us
              </Typography>
              <Typography variant="subtitle2">
                Let&apos;s get personal.
              </Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/about"
                  variant="outlined"
                  className={classes.learnButton}
                  style={{ color: 'white', borderColor: 'white' }}
                  onClick={() => dispatch(setValue(3))}
                >
                  <span className={classes.buttonSpan}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.infoItem}>
            <Grid
              container
              direction="column"
              alignItems={matchXS ? 'center' : 'flex-end'}
            >
              <Typography variant="h2" style={{ color: 'white' }}>
                Contact Us
              </Typography>
              <Typography variant="subtitle2">
                Say hello!{' '}
                <span role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  className={classes.learnButton}
                  style={{ color: 'white', borderColor: 'white' }}
                  onClick={() => dispatch(setValue(4))}
                >
                  <span className={classes.buttonSpan}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/**CalltoAction Block*/}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
