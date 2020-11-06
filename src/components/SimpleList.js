import './style.css'
import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

export default function SimpleList() {
  return (
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
  )
}
