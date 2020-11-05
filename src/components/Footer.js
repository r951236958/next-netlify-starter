import React, { Component } from 'react'
import Copyright from './Copyright'

export default function Footer() {
  return (
    <>
      <footer className="page-footer">
        Made with{' '}
        <img src="/netliheart.svg" alt="Netlify Logo" className="logo" /> for
        you
      </footer>
      <Copyright className="footer-copyright" />
    </>
  )
}
