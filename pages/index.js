import theme from '../src/theme/index';
import Navbar from '../src/components/Navbar/Navbar';
import Layout from '../src/components/layout';
import styled from 'styled-components';
import {Flex} from '@chakra-ui/react';
import Head from 'next/head';
import HeroSection from '../src/components/HeroSection/Hero';
import Slider from '../src/components/Carousel/Slider';
import Test from '../src/components/test'

const Container = styled.div `
background-image: url('/Hacker.png');
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
height: 100%;
width: 100%;
`

const DarkLayer = styled.div`
padding:20px;
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.7);
background-attachment: fixed;
background-repeat: no-repeat;
background-position:center;
background-size: cover;
`

const Wrapper = styled.div`
height:200px;
background:blue;
`



export default function Home() {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
    </Head>


    <Container>
      <DarkLayer>
<Navbar/>
  <HeroSection/>
  </DarkLayer>
  

</Container>
<Wrapper>
  <Test/>
</Wrapper>

  </>
  )
}










