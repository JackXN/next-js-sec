import React from "react";
import { Flex, Container, Box, Text, Button } from "@chakra-ui/react";
import styled from "styled-components";
import { style } from "styled-system";
import ServiceCards from "../ServiceCards/ServiceCards";

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
          Can Your Website Or <br /> Network Be Hacked?
        </Text>
        <Text as="p" sx={styles.description}>
          {HeroData.titleThree.text}
        </Text>
        <Flex sx={styles.buttons.container}>
          <Button
            sx={styles.buttons.primary}
            as="button"
            _hover={{
              boxShadow: "inset -3.5em 0 0 0 var(--hover)",
              boxShadow: "inset 3.5em 0 0 0 var(--hover)",
            }}
            focus={{
              boxShadow: "inset -3.5em 0 0 0 var(--hover)",
              boxShadow: "inset 3.5em 0 0 0 var(--hover)",
            }}
            color="var(--color)"
            transition="0.25s"
          >
            Learn More
          </Button>
          <Button
            _hover={{
              boxShadow: "inset -3.5em 0 0 0 var(--hover)",
              boxShadow: "inset 3.5em 0 0 0 var(--hover)",
            }}
            focus={{
              boxShadow: "inset -3.5em 0 0 0 var(--hover)",
              boxShadow: "inset 3.5em 0 0 0 var(--hover)",
            }}
            color="var(--color)"
            transition="0.25s"
            sx={styles.buttons.secondary}
          >
            About Us
          </Button>
        </Flex>
      </Flex>
      <ServiceCards />
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
    pl: [, "0px", "50px", null, null, "150px"],
  },
  top: {
    pb: "20px",
    color: "white",
    mt: "20px",
    fontSize: ["16px", "18px"],
    fontWeight: "400",
    text: "center",
    ml: [null, "10px"],
    fontFamily: "Rubik, sans-serif",
  },
  title: {
    fontSize: ["35px", "80px", "80px"],
    lineHeight: ["42px", "50px", "90px"],
    fontWeight: "black",
  },
  description: {
    fontSize: ["15px", "16px"],
    fontFamily: "Rubik, sans-serif",
    fontWeight: "400",
    maxWidth: ["650px", "900px"],
    mt: "25px",
  },
  buttons: {
    container: {
      align: "center",
      justify: "space-between",
      padding: "20px",
      mt: [null, null, null, "20px"],
    },
    primary: {
      padding: "25px",
      margin: "10px",
      ml: "-20px",
      background: "linear-gradient(to right, #040405 50%, #AD0541 50%)",
      color: "white",
      transition: "all .5s ease-out",
      borderRadius: "none",
      fontSize: ["15px", null, "20px", "25px"],
      backgroundPosition: " right bottom",
      backgroundSize: "200% 100%",
      transition: "0.25s",
      "&:focus": {
        inset: "-3.5rem 0 0 0 var(--hover)",
        inset: "3.5rem 0 0 0 var(--hover)",
      },
      "&:hover": {
        backgroundPosition: "left bottom",
        color: "white",
      },
    },
    secondary: {
      padding: "25px",
      margin: "10px",
      ml: "20px",
      background: "linear-gradient(to right, #040405 50%, #191A1A 50%)",
      color: "white",
      transition: "all .5s ease-out",
      borderRadius: "none",
      fontSize: ["15px", null, "20px", "25px"],
      backgroundPosition: " right bottom",
      backgroundSize: "200% 100%",
      transition: "0.25s",
      "&:focus": {
        inset: "-3.5rem 0 0 0 var(--hover)",
        inset: "3.5rem 0 0 0 var(--hover)",
      },
      "&:hover": {
        backgroundPosition: "left bottom",
        color: "white",
      },
    },
  },
};

// #191A1A

const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
`;
