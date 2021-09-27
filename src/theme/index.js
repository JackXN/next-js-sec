/* eslint-disable import/no-anonymous-default-export */
import {extendTheme} from '@chakra-ui/react';

  const colors = {
primary: 'red',
random: 'orange',
  }


const breakpoints = [    '480px',
'640px',
'768px',
'1024px',
'1220px',
'1366px',
'1620px',]

const customTheme = extendTheme({breakpoints,colors})
export default customTheme