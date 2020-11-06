import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import {
  CssBaseline,
  Box,
  Container,
  Grid,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  MenuItem,
  MenuList
} from '@material-ui/core'
//import Box from '@material-ui/core/Box';
//import CssBaseline from '@material-ui/core/CssBaseline';
import {
  responsiveFontSizes,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles'

// import registerServiceWorker from './registerServiceWorker';
//import netlifyIdentity from 'netlify-identity-widget';

//import App from './App';
import Copyright from './components/Copyright'
//import App from './App';
import Home from './Home'
import theme from './theme'
import MenuListComposition from './components/MyMenuList'

//window.netlifyIdentity = netlifyIdentity;
// You must run this once before trying to interact with the widget
//netlifyIdentity.init();

ReactDOM.render(
  <Container maxWidth="md">
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Home />
    </ThemeProvider>
  </Container>,
  document.querySelector('#root')
)
// registerServiceWorker();
