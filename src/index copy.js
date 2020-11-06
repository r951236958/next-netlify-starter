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
import Layout from './Layout'
import theme from './theme'
import MenuListComposition from './components/MyMenuList'
import * as serviceWorker from './serviceWorker'

export default function App(props) {
  return <button> {props.children} </button>
}

ReactDOM.render(
  <div>
    <Layout>
      <App>在index.js中設定文字</App>
    </Layout>
  </div>,
  document.getElementById('root')
)
