import './style.css'
import React from 'react'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

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
  buttongroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

function ButtonS(props) {
  return <Button {...props} />
}

export default function Home() {
  const classes = useStyles()

  return (
    <Typography component="div" variant="root">
      <Typography component="main" variant="root" gutterBottom>
        <Header title="Welcome to my app!" />
        <Box my={2}>
          <Typography component="p" variant="inherit" className="description">
            Get started by editing <code>pages/index.js</code>
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={5}>
              <List class="menulist">
                <ListSubheader>
                  <span className="subheader">常用連結</span>
                </ListSubheader>
                <Divider />
                <ListItem button>
                  <ListItemIcon>
                    <i className="material-icons">g_translate</i>
                  </ListItemIcon>
                  <Link
                    color="textPrimary"
                    href="https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN"
                  >
                    <ListItemText primary="Google翻譯" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <i className="material-icons">today</i>
                  </ListItemIcon>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/1gzDP5JSYbjPs3ypXvHgZXDp7hbczR5l0OxVDBulMjG0"
                  >
                    <ListItemText primary="日報" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <i className="material-icons">history_edu</i>
                  </ListItemIcon>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/document/d/1rxUeCFo3CkjF4Vj-GWdrom10mPnWe6_bKdR6CT_GjV8"
                  >
                    <ListItemText primary="批注詞" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <i className="material-icons">calculate</i>
                  </ListItemIcon>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/1mtz6488MHF6LxGPVro5X5qneZJt2Hv3SqLekWwwk0zw"
                  >
                    <ListItemText primary="數據計算" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <i className="material-icons">filter_alt</i>
                  </ListItemIcon>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/18SWgCzsUB4rHSNl_qEe8OrlbmwGvqnZkv3wuKQznshY"
                  >
                    <ListItemText primary="篩選總表" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <i className="material-icons">source</i>
                  </ListItemIcon>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/1BEgZRROTF-8GyU7KFfG0BT-Gkh1o9qJlzNECzQh14jI"
                  >
                    <ListItemText primary="匯入處理" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <i className="material-icons">folder_shared</i>
                  </ListItemIcon>

                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws"
                  >
                    <ListItemText primary="採購部共用" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <i className="material-icons">folder_shared </i>
                  </ListItemIcon>

                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA"
                  >
                    <ListItemText primary="Jayden共用" />
                  </Link>
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box my={2}>
              <div className={classes.buttongroup}>
                <ButtonGroup
                  size="small"
                  aria-label="small outlined button group"
                >
                  <ButtonS variant="contained" color="default">
                    default
                  </ButtonS>
                  <ButtonS variant="outlined" color="default">
                    default
                  </ButtonS>
                </ButtonGroup>
                <ButtonGroup
                  size="small"
                  aria-label="small outlined button group"
                >
                  <ButtonS variant="contained" color="inherit">
                    inherit
                  </ButtonS>
                  <ButtonS variant="outlined" color="inherit">
                    inherit
                  </ButtonS>
                </ButtonGroup>
                <ButtonGroup
                  color="secondary"
                  aria-label="outlined secondary button group"
                >
                  <ButtonS variant="contained" color="primary">
                    primary
                  </ButtonS>
                  <ButtonS variant="outlined" color="primary">
                    primary
                  </ButtonS>
                </ButtonGroup>
                <ButtonGroup
                  size="large"
                  color="primary"
                  aria-label="large outlined primary button group"
                >
                  <ButtonS variant="contained" color="secondary">
                    secondary
                  </ButtonS>
                  <ButtonS variant="outlined" color="secondary">
                    secondary
                  </ButtonS>
                </ButtonGroup>
              </div>
            </Box>
          </Grid>
        </Grid>

        <Paper>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Box color="text.primary" my={2}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Hello" />
                  </ListItem>
                </List>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                  <ListItem button>
                    <ListItemText primary="Trash" />
                  </ListItem>
                  <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemLink>
                </List>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <MenuList class="menulist">
                <MenuItem>
                  <Link
                    color="textPrimary"
                    href="https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN"
                  >
                    <i className="material-icons left">g_translate</i>Google翻譯
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/1gzDP5JSYbjPs3ypXvHgZXDp7hbczR5l0OxVDBulMjG0"
                  >
                    <i className="material-icons left">today</i>日報
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/document/d/1rxUeCFo3CkjF4Vj-GWdrom10mPnWe6_bKdR6CT_GjV8"
                  >
                    <i className="material-icons left">history_edu</i>批注詞
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/1mtz6488MHF6LxGPVro5X5qneZJt2Hv3SqLekWwwk0zw"
                  >
                    <i className="material-icons left">calculate</i>數據計算
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/18SWgCzsUB4rHSNl_qEe8OrlbmwGvqnZkv3wuKQznshY"
                  >
                    <i className="material-icons left">filter_alt</i>篩選總表
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/1BEgZRROTF-8GyU7KFfG0BT-Gkh1o9qJlzNECzQh14jI"
                  >
                    <i className="material-icons left">source</i>匯入處理
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws"
                  >
                    <i className="material-icons left">folder_shared</i>
                    採購部共用
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    color="textPrimary"
                    href="https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA"
                  >
                    <i className="material-icons left">folder_shared </i>
                    Jayden共用
                  </Link>
                </MenuItem>
              </MenuList>
            </Grid>
          </Grid>
        </Paper>
      </Typography>

      <Box mb={2}>
        <Copyright />
      </Box>
      <Footer />
    </Typography>
  )
}
