import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from '../../components/NavBar/index-navbar';
import Home from '../Home/index-home';
import About from '../About/index-about';
import NotFound from '../NotFound/index-notfound';
import Projects from '../Projects/index-projects';
import Footer from '../../components/Footer/index-footer';

import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material';
import background from '../Home/493085.jpg';
import Resume from '../Resume/resume-projects';

const useStyles = makeStyles({
  home: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height: '100vh',
    backgroundPosition: 'center',
    display: 'grid',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Paper className={classes.home}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </Paper>
  );
}

export default App;


