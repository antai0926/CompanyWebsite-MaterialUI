import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em 5em',
  },
  linkContainer: {
    gap: '1em',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container className={classes.mainContainer} justify="center">
        <Grid item className={classes.gridItem}>
          <Grid container direction="column">
            {[{ name: 'Home', link: '/' }].map((el) => (
              <Grid
                itme
                className={classes.link}
                key={el.name}
                component={Link}
                to={el.link}
              >
                {el.name}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" className={classes.linkContainer}>
            {[
              { name: 'Services', link: '/services' },
              { name: 'Custom Software Development', link: '/customsoftware' },
              { name: 'Mobile App Development', link: '/mobileapps' },
              { name: 'Website Development', link: '/websites' },
            ].map((el) => (
              <Grid
                itme
                component={Link}
                to={el.link}
                className={classes.link}
                key={el.name}
              >
                {el.name}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" className={classes.linkContainer}>
            {[
              { name: 'The Revolution', link: '/revolution' },
              { name: 'Vistion', link: '/revolution' },
              { name: 'Technology', link: '/revolution' },
              { name: 'Process', link: '/revolution' },
            ].map((el) => (
              <Grid
                itme
                className={classes.link}
                key={el.name}
                component={Link}
                to={el.link}
              >
                {el.name}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" className={classes.linkContainer}>
            {[
              { name: 'About Us', link: '/about' },
              { name: 'History', link: '/about' },
              { name: 'Team', link: '/about' },
            ].map((el) => (
              <Grid
                itme
                className={classes.link}
                key={el.name}
                component={Link}
                to={el.link}
              >
                {el.name}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" className={classes.linkContainer}>
            {[{ name: 'Contact Us', link: '/contact' }].map((el) => (
              <Grid
                itme
                className={classes.link}
                key={el.name}
                component={Link}
                to={el.link}
              >
                {el.name}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />
    </footer>
  );
};

export default Footer;
