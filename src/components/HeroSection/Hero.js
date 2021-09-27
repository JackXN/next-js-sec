import React from "react";
import { Flex, Container, Box, Text, Button } from "@chakra-ui/react";
import styled from "styled-components";
import { style } from "styled-system";


const HeroData = {
    titleOne: {
      id: 1,
      name: "top",
      text: "Apex Security is a locally owned Cybersecurity Company",
    },
    titleTwo: {
      id: 2,
      name: "title",
      text: "Can Your Website Or Network Be Hacked?",
    },
    titleThree: {
      id: 3,
      name: "description",
      text: "From large Fortune 500 companies to local small businesses, we are here to help secure your most valuable data.  Our solutions meet your needs and requirements. When your ready to secure your organization, choose us as your partner",
    },
  };


function Hero() {
  return (
    <HeroContainer>
      <Text as="p" sx={styles.top}>
        {HeroData.titleOne.text}
      </Text>
      <Flex sx={styles.flexContainer}>
        <Text as="h1" sx={styles.title}>
         Can Your Website Or <br/> Network Be Hacked?
        </Text>
        <Text as="p" sx={styles.description}>
          {HeroData.titleThree.text}
        </Text>
<Flex sx={styles.buttons.container}>
<Button sx={styles.buttons.primary}>Learn More</Button>
<Button sx={styles.buttons.secondary}>About Us</Button>
</Flex>
      </Flex>
    </HeroContainer>
  );
}

export default Hero;



const styles = {
    flexContainer: {
      display: "flex",
      fontFamily: "Barlow Condensed, sans-serif",
      color: "white",
      mt: "50px",
      flexDirection: "column",
    },
    top: {
      pb: "20px",
      color: "gray",
      mt: "20px",
      fontWeight: "bold",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "black",
    },
    description: {
      fontSize: "1.3rem",
      fontWeight: "medium",
      mw: "600px",
      mt: "25px",
    },
    buttons:{
      container: {
        align: 'center',
        justify: 'space-between',
        padding: '20px',

        
      },
      primary: {
        padding: '20px',
        margin:'10px',
        ml:'-20px',
        backgroundColor: '#AD0441',
        color: 'white',
        borderRadius: 'none',
      },
      secondary: {
        padding: '20px',
        margin:'10px',
        backgroundColor: '#191A1B',
        color: 'white',
        borderRadius: 'none',
      },
  
    }
  };




const HeroContent = styled.div`
  height: 100vh;
  width: 100%;
`;

const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
`;
