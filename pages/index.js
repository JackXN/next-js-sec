import { ThemeProvider,Box } from 'theme-ui';
import theme from '../src/theme/index';
import Navbar from '../src/components/Navbar/Navbar';
import Layout from '../src/components/layout';

import styled from 'styled-components';

const Container = styled.div `
background-image: url('/Hacker.png');
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
height: 100vh;
width: 100%;
background-color: black;
`

const DarkLayer = styled.div`
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.5);
background-attachment: fixed;
background-repeat: no-repeat;
background-position:center;
background-size: cover;
`




export default function Home() {
  return (
    <>
<Container>
  <DarkLayer>
  <Navbar/>
  </DarkLayer>

</Container>
  </>
  )
}






