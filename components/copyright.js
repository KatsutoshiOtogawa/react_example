// @ts-check
import {ReactElement} from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

/**
 * CopyWriteを表示させるためのコンポーネントです。
 * @param {{ sx : {mt: number}, href: string, year: number}} props 
 * @returns {ReactElement}
 */
export function Copyright(props) {
  return (
    // <Typography variant="body2" color="text.secondary" align="center" {...props}>
    <Typography variant="body2" color="text.secondary" align="center" sx={props.sx} >
      {'Copyright © '}
      <Link color="inherit" href={props.href} >
        Your Website
      </Link>{' '}
      {props.year}
      {'.'}
    </Typography>
  );
}
