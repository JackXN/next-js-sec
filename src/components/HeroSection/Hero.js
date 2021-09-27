import React from "react";
import { Flex, Container, Box, Text, Button } from "@chakra-ui/react";
import styled from "styled-components";
import { style } from "styled-system";
import ServiceCards from '../ServiceCards/ServiceCards';



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

      <Flex sx={styles.flexContainer}>
      <Text as="p" sx={styles.top}>
        {HeroData.titleOne.text}
      </Text>
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
      <ServiceCards/>
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
      pl: [null,null,null,null,,null,'150px', '350x'],
    },
    top: {
      pb: "20px",
      color: "white",
      mt: "20px",
      fontSize: ['10px',null,null,'15px'],
      fontWeight: "bold",
      text:'center',
    },
    title: {
      fontSize: ['30px', null, '45px', '80px'],
      lineHeight: ['30px', '50px',null, '90px'],
      fontWeight: "black",
    },
    description: {
      fontSize: ['20px', null, '25px', '16px', '20px', '30px'],
      fontWeight: "medium",
      maxWidth: ["650px", '900px'],
      mt: "25px",
    },
    buttons:{
      container: {
        align: 'center',
        justify: 'space-between',
        padding: '20px',
        mt: [null,null,null,'20px',],
        
      },
      primary: {
        padding: '25px',
        margin:'10px',
        ml:'-20px',
        backgroundColor: '#AD0441',
        color: 'white',
        borderRadius: 'none',
        fontSize: ['15px', null,'20px','25px' ],
      },
      secondary: {
        padding: '25px',
        margin:'10px',
        backgroundColor: '#191A1B',
        color: 'white',
        borderRadius: 'none',
        fontSize: ['15px', null,'20px', '25px'],
      
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
