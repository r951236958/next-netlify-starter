import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import Typography from '@material-ui/core/Typography'

export default function Protected() {
  const user = netlifyIdentity.currentUser()
  console.log({ user })
  return (
    <div>
      <h3>Protected Page</h3>
      You are logged in as
    </div>
  )
}
