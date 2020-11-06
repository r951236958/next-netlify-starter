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
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
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

//ReactDOM.render(
//    <Container maxWidth="md">
//        <ThemeProvider theme={theme}>
//        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//        <CssBaseline />
//        <Grid container spacing={1}>
//            <Grid item xs={12} sm={12}>
//                <Home />
//            </Grid>
//        </Grid>
//      </ThemeProvider>
//    </Container>
//    ,
//    document.querySelector('#root'),
//    );
// registerServiceWorker();

const Layout = (props) => {
  const navStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '43px',
    backgroundColor: 'rgb(66, 103, 178)',
    display: 'flex',
    alignItems: 'center'
  }
  const iconStyle = {
    marginLeft: '10%',
    height: '25px',
    width: '25px',
    borderRadius: '1px',
    backgroundColor: 'white'
  }
  const inputStyle = {
    marginLeft: '5px',
    padding: '0px 7px',
    height: '25px',
    width: '28%',
    borderRadius: '2px',
    border: 'none',
    backgroundImage:
      "url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png')",
    backgroundPosition: '97% 50%',
    backgroundSize: 'auto 80%',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div>
      <div className="nav-bar" style={navStyle}>
        <div className="icon" style={iconStyle}>
          <img
            style={{ height: '120%' }}
            src="https://www.logospng.com/images/48/facebook-logo-fb-sketched-sketch-icon-48978.png"
            alt="icon"
          />
        </div>
        <input placeholder="搜尋" style={inputStyle} />
      </div>
      <div className="index-container" style={{ marginTop: '43px' }}>
        {props.children}
      </div>
    </div>
  )
}
export default Layout
