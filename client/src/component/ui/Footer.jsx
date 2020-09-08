import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setValue, setSelectedIndex } from '../../redux/page/page.action';

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

const GridItem = ({ linkObjArr }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid item className={classes.gridItem}>
      <Grid container direction="column" className={classes.linkContainer}>
        {linkObjArr.map((el) => (
          <Grid
            itme
            className={classes.link}
            key={el.name}
            component={Link}
            to={el.link}
            onClick={() => {
              dispatch(setValue(el.value));
              dispatch(setSelectedIndex(el.selectedIndex));
            }}
          >
            {el.name}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const Footer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.mainContainer} justify="center">
        <GridItem linkObjArr={[{ name: 'Home', link: '/', value: 0 }]} />
        <GridItem
          linkObjArr={[
            { name: 'Services', link: '/services', value: 1, selectedIndex: 0 },
            {
              name: 'Custom Software Development',
              link: '/customsoftware',
              value: 1,
              selectedIndex: 1,
            },
            {
              name: 'Mobile App Development',
              link: '/mobileapps',
              value: 1,
              selectedIndex: 2,
            },
            {
              name: 'Website Development',
              link: '/websites',
              value: 1,
              selectedIndex: 3,
            },
          ]}
        />
        <GridItem
          linkObjArr={[
            { name: 'The Revolution', link: '/revolution', value: 2 },
            { name: 'Vistion', link: '/revolution', value: 2 },
            { name: 'Technology', link: '/revolution', value: 2 },
            { name: 'Process', link: '/revolution', value: 2 },
          ]}
        />
        <GridItem
          linkObjArr={[
            { name: 'About Us', link: '/about', value: 3 },
            { name: 'History', link: '/about', value: 3 },
            { name: 'Team', link: '/about', value: 3 },
          ]}
        />
        <GridItem
          linkObjArr={[{ name: 'Contact Us', link: '/contact', value: 4 }]}
        />
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
