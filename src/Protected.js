import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import Typography from '@material-ui/core/Typography'

export default function Protected() {
  const user = netlifyIdentity.currentUser()
  console.log({ user })
  return (
    <div>
      <Typography
        component="h3"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Protected Page
      </Typography>
      <p>
        You are logged in as<b>{user.email}</b>
      </p>
    </div>
  )
}
