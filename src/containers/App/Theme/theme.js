import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3d06ef'
    },
    secondary: {
      main: '#ba99fe'
    },
  },
  background: {
    default: 'pink'
  },
  typography: {
    logo: {
      color: 'black',
      fontSize: '3.75vw',
      fontFamily: 'Sonsie One',
      border: 1,
      textShadow: '0 0 2px #00ce4f, 2px 2px 0 #8dffba, 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 31px #fff, 0 0 42px #8dffba, 0 0 82px #8dffba',
      marginTop: '3rem',
      zIndex: '1'
    },
    description: {
      color: 'white',
      fontFamily: 'Italiana',
      fontSize: 25,
    },
    smallPrint: {
      color: 'white',
      fontFamily: 'Italiana',
      fontSize: 18,
      lineHeight: 1.6,
    },
    projectTitle: {
      fontFamily: 'Italiana',
      fontSize: 20,
      color: 'white'
    },
    projectText: {
      fontFamily: 'Italiana',
      fontSize: 14,
      color: 'white'
    },
    name: {
      color: 'black',
      fontSize: 25,
      marginRight: 15,
      fontFamily: 'Sonsie One',
      border: 1,
      textShadow: '0 0 2px #00ce4f, 2px 2px 0 #8dffba, 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 31px #fff, 0 0 42px #8dffba, 0 0 82px #8dffba',
    },
  }
});

export default theme;
