import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

const theme = createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1re',
      textTransform: 'none',
      color: 'white',
    },
  },
  overrides: {
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: '#065599',
        },
      },
    },
    MuiMenuItem: {
      root: {
        '&$selected': {
          backgroundColor: '#065599',
        },
      },
    },
  },
});

export default theme;
