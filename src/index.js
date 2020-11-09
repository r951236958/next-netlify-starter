import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from 'netlify-identity-widget'

import {
  responsiveFontSizes,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles'

import theme from './theme'

window.netlifyIdentity = netlifyIdentity
// You must run this once before trying to interact with the widget
netlifyIdentity.init()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
// registerServiceWorker();
