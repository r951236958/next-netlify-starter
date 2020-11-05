import './style.css'
import React from 'react';
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Copyright from './components/Copyright'


import { Typography, Grid, Box } from '@material-ui/core';

export default function Home() {
  return (
    <Typography component="div" className="HomeContainer" variant="root" gutterBottom >
      <Typography component="main" variant="root" gutterBottom >
        <Header title="Welcome to my app!" />
          <Typography component="p" variant="inherit" className="description" gutterBottom>
            Get started by editing <code>pages/index.js</code>
          </Typography>
          
      </Typography>
      <Box mb={2}>
            <Copyright />
          </Box>
      <Footer />
    </Typography>
  )
}
