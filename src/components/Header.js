import React, { Component }  from 'react';
import Typography from '@material-ui/core/Typography';

export default function Header({ title }) {
  return (
    <Typography className="title" variant="root" component="h1" gutterBottom>
      {title}
    </Typography>
  )
}
