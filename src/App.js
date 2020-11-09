import React, { useEffect, useState } from 'react'
import Protected from './Protected'
import Public from './Public'
//import netlifyIdentity from 'netlify-identity-widget'
import netlifyAuth from './netlifyAuth.js'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import HeroCard from './components/HeroCard'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/StarBorder'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700]
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}))

// copied straight from https://reacttraining.com/react-router/web/example/auth-workflow
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {
  const classes = useStyles()

  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
  let [user, setUser] = useState(null)

  useEffect(() => {
    let isCurrent = true
    netlifyAuth.initialize((user) => {
      if (isCurrent) {
        setLoggedIn(!!user)
        setUser(user)
      }
    })

    return () => {
      isCurrent = false
    }
  }, [])

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user)
    })
  }

  return (
    <Router>
      <CssBaseline />
      <TopBar />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default Material-UI components
          with little customization.
        </Typography>
      </Container>
      {/* End hero unit */}

      <Container maxWidth="md" component="main" className="container">
        <AuthButton />
        <Typography align="center" color="textSecondary" component="p">
          <Button variant="contained" color="primary" className={classes.link}>
            <Link to="/public">Public Page</Link>
          </Button>
          <Button variant="contained" color="primary" className={classes.link}>
            <Link to="/protected">Protected Page</Link>
          </Button>
        </Typography>

        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
        <Box my={4}>
          <HeroCard />
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
      {/* End footer */}
    </Router>
  )
}

//const netlifyAuth = {
//  isAuthenticated: false,
//  user: null,
//  authenticate(callback) {
//    this.isAuthenticated = true
//    netlifyIdentity.open()
//    netlifyIdentity.on('login', (user) => {
//      this.user = user
//      callback(user)
//    })
//  },
//  signout(callback) {
//    this.isAuthenticated = false
//    netlifyIdentity.logout()
//    netlifyIdentity.on('logout', () => {
//      this.user = null
//      callback()
//    })
//  }
//}

const AuthButton = withRouter(({ history }) =>
  netlifyAuth.isAuthenticated ? (
    <Typography variant="h5" align="center" color="textSecondary" component="p">
      Welcome!{' '}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          netlifyAuth.signout(() => history.push('/'))
        }}
      >
        Sign out
      </Button>
    </Typography>
  ) : (
    <Typography
      variant="h5"
      align="center"
      color="textSecondary"
      component="p"
      className="description"
    >
      You are not logged in.
    </Typography>
  )
)

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        netlifyAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

class Login extends React.Component {
  state = { redirectToReferrer: false }

  login = () => {
    netlifyAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } }
    let { redirectToReferrer } = this.state

    if (redirectToReferrer) return <Redirect to={from} />

    return (
      <div>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          You must log in to view the page at {from.pathname}
        </Typography>
        <Typography align="center" gutterBottom>
          <Button variant="contained" color="primary" onClick={this.login}>
            Log in
          </Button>
        </Typography>
      </div>
    )
  }
}
export default AuthExample
