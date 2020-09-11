import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { setValue } from '../redux/page/page.action';
import ButtonArrow from './ui/ButtonArrow';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  icon: {
    marginRight: '0.5em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchMD = useMediaQuery(theme.breakpoints.down('md'));

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const handleOnChange = (event) => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper('Invalid phone');
        } else {
          setPhoneHelper('');
        }
        break;

      default:
        break;
    }
  };

  return (
    <Grid container derection="row">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          marginBottom: matchMD ? '5em' : 0,
          marginTop: matchSM ? '1em' : matchMD ? '5em' : 0,
        }}
        xl={3}
        lg={4}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchMD ? 'center' : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                align={matchMD ? 'center' : undefined}
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                We&apos;re waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  className={classes.icon}
                  style={{ verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue }}
                >
                  <a
                    href="tel:0978826715"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    0978-826-715
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <img src={emailIcon} alt="envolope" className={classes.icon} />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href="mailto:antai0926@gmail.com"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    antai0926@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ marginTop: '2em' }}
            >
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                ></TextField>
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={handleOnChange}
                ></TextField>
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={handleOnChange}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  multiline
                  rows={10}
                  InputProps={{ disableUnderline: true }}
                  id="message"
                  fullWidth
                  value={message}
                  className={classes.message}
                  onChange={(event) => setMessage(event.target.value)}
                ></TextField>
              </Grid>
              <Grid item justify="center" style={{ marginTop: '2em' }}>
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  variant="contained"
                  className={classes.sendButton}
                >
                  Send message
                  <img
                    src={airplane}
                    alt="paper airplane"
                    style={{ marginLeft: '1rem' }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchMD ? 'column' : 'row'}
        className={classes.background}
        alignItems="center"
        justify={matchMD ? 'center' : undefined}
        xl={9}
        lg={8}
      >
        <Grid item style={{ marginLeft: '3em' }}>
          <Grid
            container
            direction="column"
            style={{ textAlign: matchMD ? 'center' : undefined }}
          >
            {/* <Grid item> */}
            <Typography align={matchMD ? 'center' : undefined} variant="h2">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography
              align={matchMD ? 'center' : undefined}
              variant="subtitle2"
              style={{ fontSize: '1.5rem' }}
            >
              Take advantage of the 21st Century.
            </Typography>
            <Grid container item justify={matchMD ? 'center' : undefined}>
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => dispatch(setValue(2))}
              >
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
        <Grid item style={{ marginLeft: '3em' }}>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => dispatch(setValue(5))}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
