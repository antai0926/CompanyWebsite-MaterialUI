import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    // marginRight: 40,
    // '&:hover': {
    //   backgroundColor: theme.palette.secondary.light,
    // },
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      container
      direction={matchSM ? 'column' : 'row'}
      style={{ height: '60em', padding: matchXS ? '0 1em' : '0 5em' }}
      className={classes.background}
      alignItems="center"
      justify={matchSM ? 'center' : 'space-between'}
    >
      <Grid item>
        <Grid
          container
          direction="column"
          style={{ textAlign: matchSM ? 'center' : undefined }}
        >
          {/* <Grid item> */}
          <Typography variant="h2">
            Simple Software.
            <br />
            Revolutionary Results.
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
            Take advantage of the 21st Century.
          </Typography>
          <Grid container item justify={matchSM ? 'center' : undefined}>
            <Button variant="outlined" className={classes.learnButton}>
              <span className={classes.buttonSpan}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.estimateButton}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
