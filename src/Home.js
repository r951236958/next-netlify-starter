import './style.css'
import React from 'react'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import SignUp from './components/SignUp'
import MyLink from './components/MyLink'
import MyButton from './components/MyButton'

import { makeStyles } from '@material-ui/core/styles'
//import InboxIcon from '@material-ui/icons/Inbox'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import DraftsIcon from '@material-ui/icons/Drafts'

import {
  Typography,
  Grid,
  Button,
  ButtonGroup,
  Box,
  Paper,
  MenuList,
  MenuItem,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Drawer,
  Divider
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography component="main" variant="root" gutterBottom>
        <Header title="Welcome to my app!" />
        <Box my={2}>
          <Typography component="p" variant="inherit" className="description">
            Get started by editing <code>pages/index.js</code>
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <MyLink />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box my={2}>
              <MyButton />
            </Box>
          </Grid>
        </Grid>

        <Grid container justify="center" spacing={1}>
          <Grid item xs={12} sm={6}>
            <Box my={4}>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Typography>

      <Footer />
    </div>
  )
}
