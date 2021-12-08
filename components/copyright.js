// @ts-check
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Signup.module.css'

import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

/**
 * 
 * @param {{ sx : {mt: number}}} props 
 * @returns {Typography}
 */
export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
