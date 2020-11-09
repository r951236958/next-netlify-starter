import React from 'react'
import Protected from './Protected'
import Public from './Public'
import netlifyIdentity from 'netlify-identity-widget'
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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

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

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined'
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support'
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained'
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined'
  }
]
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations']
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one'
    ]
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource'
    ]
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
]

// copied straight from https://reacttraining.com/react-router/web/example/auth-workflow
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {
  const classes = useStyles()
  return (
    <Router>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Company name
          </Typography>
          <nav>
            <MuiLink
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Features
            </MuiLink>
            <MuiLink
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Enterprise
            </MuiLink>
            <MuiLink
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Support
            </MuiLink>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
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
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <MuiLink href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </MuiLink>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </Router>
  )
}

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user) => {
      this.user = user
      callback(user)
    })
  },
  signout(callback) {
    this.isAuthenticated = false
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => {
      this.user = null
      callback()
    })
  }
}

const AuthButton = withRouter(({ history }) =>
  netlifyAuth.isAuthenticated ? (
    <p className="description">
      Welcome!{' '}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          netlifyAuth.signout(() => history.push('/'))
        }}
      >
        Sign out
      </Button>
    </p>
  ) : (
    <p className="description">You are not logged in.</p>
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
          <Button variant="contained" color="secondary" onClick={this.login}>
            Log in
          </Button>
        </Typography>
      </div>
    )
  }
}
export default AuthExample
