import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { CssBaseline, Box, Container, Grid } from '@material-ui/core';
//import Box from '@material-ui/core/Box';
//import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
// import registerServiceWorker from './registerServiceWorker';
//import netlifyIdentity from 'netlify-identity-widget';

//import App from './App';
import Copyright from './components/Copyright';
//import App from './App';
import Home from './Home';
import theme from './theme';

//window.netlifyIdentity = netlifyIdentity;
// You must run this once before trying to interact with the widget
//netlifyIdentity.init();

ReactDOM.render(
    <Container maxWidth="md">
        <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
                <Home />
            </Grid>
        </Grid>
        <Box mt={8}>
          <Copyright />
        </Box>
      </ThemeProvider>
    </Container>
    ,
    document.querySelector('#root'),
    );
// registerServiceWorker();